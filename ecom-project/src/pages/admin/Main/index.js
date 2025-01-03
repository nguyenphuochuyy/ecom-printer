import { Col, Row } from "antd";
import "./Admin.scss"
import BoxDashBoard from "../../../components/admin/BoxDashBoard";
import ShopDetailBox from "../../../components/admin/ShopDetailBox";
import RecentOrder from "../../../components/admin/RecentOrder";

function Admin(){
    
 
        
    return (
        <>
            <div className="container">
                <Row className="row">
                    <Col span ={24} style={{textAlign : 'center'}}>
                    <h3 className="admin-title">QUẢN LÍ CỬA HÀNG</h3>
                    </Col>
                </Row>  
                <Row >
                <Col span={24}>
                        <BoxDashBoard/>
                </Col>
                </Row>
                <Row>
                    <Col span = {24}>
                        <RecentOrder/>
                    </Col>
                </Row>

            </div>  
               
          
            
            
        </>
    )
}
export default Admin;