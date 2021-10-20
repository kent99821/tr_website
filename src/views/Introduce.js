import { Row, Col } from "antd";
import React from "react";
function Introduce(){
    return(
        <div>
            <Row>
                <Col span={12}>
                <div>简介</div>
                </Col>
                <Col span={12}>
                    <video src="" controls="controls"></video>
                </Col>
            </Row>
        </div>
    )
}
export default Introduce;