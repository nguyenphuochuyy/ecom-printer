import "../../assets/css/base.css"
import Banner from "../../components/Banner"
import Brand from "../../components/HomeCompos/Brand"
import Product from "../../components/HomeCompos/Products"
import "./Home.scss"

const Home = () => {
   return (
    <>
        <div className="home">
                <Banner/>
                <Brand/>
                <Product/>
        </div>
    </>
   ) 
}
export default Home