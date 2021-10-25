import React, { useState, useEffect } from "react";
import { Row, Col, message, Card, Timeline, Carousel } from 'antd';
import '../assets/css/Activity.css';
import apiUrl from "../conf/apiUrl";
import axios from "axios";
function Activity() {
    const [lives, setLives] = useState([]);
    const [show, setShow] = useState(false);
    const getLives = () => {
        axios({
            method: 'get',
            url: apiUrl.live,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                setLives(res.data.data);
                setShow(true);
            }
        )
    }
    useEffect(() => {
        getLives();
    }, []);
    if (!show) {
        return (
            message.loading('资源加载中', 0.5)
        )
    }
    return (
        <div>
            {
                lives.map(item => (
                    <Row>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Card className="aCard">
                                <Carousel autoplay>
                                    {item.livedPhotos.map(photo => (
                                        <div className="imgDiv">
                                            <img className="aImg" src={photo.livePhotoLoc} />
                                        </div>
                                    ))
                                    }
                                </Carousel>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="aContent">
                                <h2 className="aTitle">{item.liveName}</h2>
                                <p className="aDate">{item.liveTime}</p>
                                <p className="aContext">{item.liveContent}</p>

                            </div>
                        </Col>
                    </Row>

                ))
            }

        </div>
    )
}
export default Activity;