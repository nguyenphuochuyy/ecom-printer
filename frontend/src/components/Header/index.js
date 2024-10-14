import { Avatar, Badge, Col, Menu, Row, Select } from "antd";
import logo from "../../assets/images/logo.png"
import { FaLocationDot, FaCircleUser, FaCartShopping } from "react-icons/fa6";
import "./header.scss"
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
const Headers = () => {
    const items = [
        {
            key: '1',

            label: 'Option 1',
        },
        {
            key: '2',

            label: 'Option 2',
        },
        {
            key: '3',
            label: 'Option 3',
        },


    ];
    return (
        <>
            <div className="header-top-side">
                <div>
                    <p className="header-top-side__title">FREE delivery & 40% Discount for next 3 orders! Place your 1st order in</p>
                </div>
                <div>
                    <p className="header-top-side__title">Until the end of the sale: 47 day 6h 59m 59s</p>
                </div>
            </div>
            <div className="header-mid container ">
                <div className="header-mid__menu">
                    <ul style={{ display: 'flex', alignItems: 'center' }}>
                        <li>About us</li>
                        <li>My account</li>
                        <li>Wishlist</li>
                    </ul>
                    <p>We diliver to you every day from 7:00 - 23:00</p>
                </div>
                <div>
                    <p>Order Tracking</p>
                </div>
            </div>
            <div className="container">
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <div className="header-top">
                            <div className="header-top__logo">
                                <div className="img">
                                    {/* <img src={logo}></img> */}
                                </div>

                                <div className="icon">
                                    <FaLocationDot className="ics" />
                                </div>
                            </div>
                            <div className="header-top__search">
                                <SearchBar />
                            </div>
                            <div className="header-top__user">
                                <FaCircleUser />
                                <Link to={"/login"}>Sign In</Link>
                                <FaCartShopping />


                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <div className="header-menu">
                            <div className="header-menu__left">
                                <Menu mode="horizontal">
                                    <Menu.Item>
                                    </Menu.Item>
                                    <Menu.Item>Shop</Menu.Item>
                                    <Menu.Item>Fruits & Vegetables</Menu.Item>
                                    <Menu.Item>Beverages</Menu.Item>
                                    <Menu.Item>Snacks</Menu.Item>
                                    <Menu.Item>Contact</Menu.Item>
                                </Menu>
                            </div>
                            <div className="header-menu__right"></div>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}
export default Headers;