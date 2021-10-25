import React, { useState, useEffect } from "react";
import { Row, Col,  message, Timeline } from 'antd';
import '../assets/css/Notice.css'
import apiUrl from "../conf/apiUrl";
import axios from "axios";
function Notice() {
    const [informs, setInforms] = useState([]);
    const [show, setShow] = useState(false);
    const getInforms = () => {
        // 最新通告
        axios({
            method: 'get',
            url: apiUrl.inform,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                setInforms(res.data.data);
                setShow(true);
            })
    };

    useEffect(() => {
        getInforms();
    }, [])
    if (!show) {
        return (
            message.loading('资源加载中', 0.5)
        )
    }
    return (
        <div className="notice">
            <Row>
                <Col span={24}>
                    <Timeline className="timeLine" mode="left">
                    {
                        informs.map(item=>(
                            <Timeline.Item label={item.informCreateTime}>{item.informTitle}</Timeline.Item>
                        ))
                    }
                    </Timeline>
                </Col>
            </Row>
        </div>
    )
}
export default Notice;