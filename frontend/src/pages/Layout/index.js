import { Layout } from "antd"
import Headers from "../../components/Header"
import "../../assets/css/base.css"
import { Outlet } from "react-router-dom"
import "./Layout.scss"
import Footers from "../../components/Footer"
const {Header, Footer , Content} = Layout
const Layouts = () => {
   return (
    <>
        <Layout className="layout-main">
            <header>
                <Headers/>
            </header>
            <div className="container">
            <Content className="content">
                <Outlet/>
            </Content>
            </div>
            <footer className="footer">
                <Footers/>
            </footer>
          
        </Layout>
    </>
   ) 
}
export default Layouts