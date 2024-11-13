import { Button, Image } from "antd"
import hp from "../../../assets/images/brand/hp.png"
import cannon from "../../../assets/images/brand/canon.png"
import epson from "../../../assets/images/brand/epson.png"
import hprt from "../../../assets/images/brand/hprt.png"
import brother from "../../../assets/images/brand/brother.png"
import './Brand.scss'
const Brand = () => {
    return(
        <>
            <div className="brand-top">
            <h2 className="brand__title">TOP BRANDS</h2>
            <Button style={{width : 100}} type="primary" className="brand__btn">View all</Button>
            </div>
           
            <div className="brand">
                <a>
                <Image  src= {hp} preview = {false} />
                </a>
                <a>
                <Image  src= {cannon} preview = {false} />
                </a>
                <a>
                <Image  src= {epson} preview = {false} />
                </a>
                <a>
                <Image  src= {hprt} preview = {false} />
                </a>
                <a>
                <Image  src= {brother} preview = {false} />
                </a>
                
            </div>
            
        </>
    )
}
export default Brand