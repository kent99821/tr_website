import React from "react";
import { Col, Row, Image, Avatar } from 'antd';
import logo1 from '../assets/img/logo1.gif';
import turing from '../assets/img/turing.jpg';
import logo from '../assets/img/logo.jpg';
import '../assets/css/footer.css'
function Footers() {
    return (
        <div className="footer">
            <Row>
            
                    <div className="left">
                    <Image src={logo1} className="logo1" preview={false} />
                    </div>
               
                    <div className="footerCenter">
                        <Avatar size="large"  src={logo} className="logo" />
                        <h2 className="name">图灵智能创新团队</h2>
                        <p className="centerText">TURING©广东海洋大学第一个人工智能团队</p>
                    </div>
                    <div className="right">
                    <Image src={turing} className="turing" preview={false} />
                    <p className="wechat">微信公众号</p>
                    </div>
             

            </Row>
        </div>
    )
}
export default Footers;