import { Checkbox, Col, Flex, Image, InputNumber, List, Row, Slider } from "antd";
import "./shop.scss"
import TypedInputNumber from "antd/es/input-number";
import hp from "../../../assets/images/brand/hp.png"
import cannon from "../../../assets/images/brand/canon.png"
import epson from "../../../assets/images/brand/epson.png"
import hprt from "../../../assets/images/brand/hprt.png"
import brother from "../../../assets/images/brand/brother.png"
import { useEffect, useState } from "react";
import Link from "antd/es/typography/Link";
import Product from "../../../components/user/Products";
import ProductItem from "../../../components/user/ProductItem";
import SliderProduct from "../../../components/user/SliderProduct";

const Shop = () => {
    useEffect(()=>{
        const productList = async () => {
            try {
                const response = await fetch('http://localhost:8080/BE_PrinterShop/api/v1/products');
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                const result = await response.json();
                setProducts(result.data);
                localStorage.setItem('products', JSON.stringify(result.data));
            } catch (error) {
                console.log(error.message);
                
            }
        }

              productList();
    },[])
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [brand, setBrand] = useState([]);
    const [ram, setRam] = useState([]);
    const [sizePage  , setSizePage] = useState([]);
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem('products')) || []
    );
    const [sorted , setSorted] = useState(products);
    const [sortOder , setSortOrder] = useState('asc');
    const [isSort, setIsSort] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    // hàm sắp xếp sản phẩm
    const handleChange  = (value) => {
        setIsSort(true);
        setSortOrder(value);
        let sortedProducts = [...products];
        // sắp xếp lại danh sách sản phẩm theo giá
        
        if (value === 'asc') {
            // Sắp xếp theo giá tăng dần
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        }
        else if(value === 'best-seller'){
            // sắp xếp theo sản phẩm bán chạy nhất là inStock thấp nhất tới nhiều nhất và lấy 5 sản phẩm đầu tiên
            sortedProducts = sortedProducts.sort((a, b) => b.inStock - a.inStock);
            sortedProducts = sortedProducts.slice(0, 5);
        }
        else{
            //sắp xếp theo giá giảm dần 
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        }
      
        setSorted(sortedProducts);
    }

    const handleChangeBrand = (value) => {
        setBrand(value);
      
    }



    const onSliderChange = (value) => {
        setPriceRange(value);
    };
    const options = [
        {
            label: 'HP',
            value: "HP",
        },
        {
            label: 'Canon',
            value: 'Canon',
        },
        {
            label: 'Epson',
            value: 'Epson',
        },
        {
            label: 'Brother',
            value: 'Brother',
        }
    ]
    const RamOptions = [
        {
            label: '2GB',
            value: "2GB",
        },
        {
            label: '4GB',
            value: '4GB',
        },
        {
            label: '8GB',
            value: '8GB',
        },
        {
            label: '16GB',
            value: '16GB',
        }
    ]
    const SizePageOptions = [
        {
            label: 'A1',
            value : 'A1'
        },
        {
            label: 'A3',
            value : 'A3'
        },
        {
            label: 'A4',
            value : 'A4'
        },
        {
            label: 'A5',
            value : 'A5'
        }
    ]


    return (
        <>
            <div className="shop">
                <Row>
                    <Col span={4}>
                        <div className="left-side">
                            <div className="slider_price">
                                <p>Khoảng giá </p>
                                {/* <span style={{ marginRight: '10px' }}>Từ</span> */}
                                {/* <InputNumber                              
                                    min={0}
                                    max={10000000}
                                    value={priceRange[0]}
                                    onChange={(value) => setPriceRange([value, priceRange[1]])}
                                />
                                <span style={{ margin: '0 10px' }}>Đến</span>
                                <InputNumber
                            
                                    min={0}
                                    max={10000000}
                                    value={priceRange[1]}
                                    onChange={(value) => setPriceRange([priceRange[0], value])}
                                /> */}
                                <Slider
                                    range
                                    min={0} max={50000000}
                                    step={1000000}
                                    value={priceRange}
                                    onChange={onSliderChange}
                                    tipFormatter={value => `${value / 1000000} triệu`} // Hiển thị giá trị theo triệu
                                />

                            </div>
                            <div className="brand-left">
                                <h2>Thương hiệu</h2>
                                <div className="checkbox">
                                    <Checkbox.Group
                                        value={brand}
                                        onChange={(value)=>handleChangeBrand(value)}
                                        options={options}
                                    ></Checkbox.Group>
                                </div>

                            </div>

                            <div className="ram">
                                <h2>Bộ nhớ </h2>
                                <div className="checkbox">
                                    <Checkbox.Group
                                        value={ram}
                                        onChange={(value) => setRam(value)}
                                        options={RamOptions}
                                    ></Checkbox.Group>
                                </div>
                            </div>
                            <div className="sizePage">
                                <h2>Khổ giấy</h2>
                                <div className="checkbox">
                                    <Checkbox.Group
                                        value={sizePage}
                                        onChange={(value) => setSizePage(value)}
                                        options={SizePageOptions}
                                    ></Checkbox.Group>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col span={20}>
                        <div className="right-side">
                            <div className="title">
                                <h2>Máy in văn phòng- Chính hãng - Giá rẻ</h2>
                            </div>
                            <div className="brand" style={{ display: "flex", padding: 20, }}>
                                <Link><Image src={hp} preview={false}></Image></Link>
                                <Link><Image src={cannon} preview={false}></Image></Link>
                                <Link><Image src={brother} preview={false}></Image></Link>
                                <Link><Image src={epson} preview={false}></Image></Link>

                            </div>
                            <div className="category">
                                <h3>Chọn loại sản phẩm</h3>
                            </div>
                            <div className="best-product">
                                    
                            </div>
                            <div className="sort">
                                <p>sắp xếp theo</p>
                                <ul style={{ display: 'flex' }}>
                                    <li onClick={()=>{handleChange('desc')}}>
                                        <Link className="text-color">GIÁ GIẢM DẦN</Link>
                                    </li>
                                    <li onClick={()=>{handleChange('asc')}} >
                                        <Link className="text-color">GIÁ TĂNG DẦN</Link>
                                    </li>
                                    <li onClick={()=>{handleChange('best-seller')}}>
                                        <Link className="text-color">BÁN CHẠY NHẤT</Link>
                                    </li>
                                
                                </ul>
                            </div>

                            <div className="product-list">
                                {isSort ? <ProductItem sorts = {sorted}></ProductItem> : <ProductItem sorts = {products}></ProductItem>}
                              
                            </div>
                        </div>
                    </Col>
                </Row>



            </div>

        </>
    )
}

export default Shop;