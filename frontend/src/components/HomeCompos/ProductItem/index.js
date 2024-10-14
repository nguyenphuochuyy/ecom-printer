import { Image } from "antd"
import thumbnail from "../../../assets/images/thumbnail.jpg"
const ProductItem = ()=>{
    return (
        <>
            <div className="product-item">
                <div className="product-item__img">
                    <Image src= {thumbnail}></Image>
                </div>
            </div>
        </>
    )
}
export default ProductItem