import { Layout } from "antd"
import Headers from "../../components/Header"
const {Header, Footer , Content} = Layout
const Home = () => {
   return (
    <>
        <Layout>
            <header>
                <Headers/>
            </header>
            <Content>
                
            </Content>
            <footer>foot</footer>
        </Layout>
    </>
   ) 
}
export default Home