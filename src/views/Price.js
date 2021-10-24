import React, { useState, useEffect } from "react";
import { Row, Col, message, Card } from 'antd';
import '../assets/css/Leader.css';
import apiUrl from "../conf/apiUrl";
import axios from "axios";
function Price() {
    const [prices, setPrices] = useState([]);
    const [show, setShow] = useState(false);
    const getPrices = () => {
        axios({
            method: 'get',
            url: apiUrl.price,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                setPrices(res.data.data);
                setShow(true);
            }
        )
    }
    useEffect(() => {
        getPrices();
    }, [])
    if (!show) {
        return (
            message.loading('资源加载中', 2)
        )
    }
    return (
        <div>
            <Row type="flex" align="middle" justify="center" >
                {prices.map(item => (
                    <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
                        <Card className="Ldcard"
                            hoverable
                            cover={
                                <img className="ldImg" alt="project" src={item.awardPhoto[0].awardPhotoLoc} />}>
                            <p className="ldTitle">{item.awardName}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Price;