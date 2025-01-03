import { Button, Image, Modal } from "antd"
import thumbnail from "../../../assets/images/thumbnail.jpg"
import "./ProductItem.scss"
import { useEffect, useState } from "react"
import OpenAI from "openai";
import { useCart } from "../../../service/CartContext";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { formatCurrency } from "../../../helper/convertMoney";
const ProductItem = ({sorts }) => {
    useEffect(()=>{
        const productList = async () => {
             const res = fetch('http://localhost:8080/BE_PrinterShop/api/v1/products');
             if(res.ok){
                 const data = await res.json();
                 setProducts(data.data);
             }
        }

           productList();
 },[])
    const [products, setProducts] = useState([]);
    const {cartItems , setCartItems , addToCart , updateQuantity , removeFromCart , getTotalPrice} = useCart()
    const navigate = useNavigate();
    useEffect(() => {
        //  call api lấy danh sách sản phẩm
        const productList = async () => {
            try {
                const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/products');
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const result = await response.json();
                setProducts(result.data);
            } catch (error) {
                console.log(error.message);
                
            }
        }
        productList();
    }, [])
    const handleDetail = (item) => {
        sessionStorage.setItem('recentProduct', JSON.stringify(item));
        navigate(`/product/${item.id}`)
    }
    
    return (
        <>
            { sorts.map((item) => {
                return (
                    <div className="product-item" key={item.id}>
                        <div className="product-item__img" onClick={()=>{handleDetail(item)}}>
                            <Image src={item.img} preview={false}></Image>
                        </div>
                        <p className="product-item__title">{item.name}</p>
                        <p className="product-item__price">{formatCurrency(item.price)}</p>
                        {item.inStock <= 0 ? <p className="product-item__outStock">Tạm hết hàng</p> : ""}
                        <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                        <button className="add-to-cart-btn" onClick={()=> addToCart({id : item.id , name : item.name , price : item.price })} >Thêm vào giỏ hàng</button>
                        </div>
                       
                    </div>
                   
                )
            })}


        </>


    )
}
export default ProductItem