import React, { useState, useEffect } from "react";
import { Row, Col, message, Card } from 'antd';
import '../assets/css/Detailed.css'
import apiUrl from "../conf/apiUrl";
import axios from "axios";

function Detailed(props) {
    const [lead, setLead] = useState({});
    const [show, setShow] = useState(false);
    const getLead = () => {
        const id = props.match.params.id;
        // 领导视察
        axios({
            method: 'get',
            url: apiUrl.leaderId + id,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                console.log(res.data.data);
                setLead(res.data.data);
                setShow(true);
            })
    }
    useEffect(() => {
        getLead();
    }, [])
    if (!show) {
        return (
            message.loading('资源加载中', 0.5)
        )
    }
    return (
        <div className="detailed">
            <Row type="flex" align="middle" justify="center" wrap={true}>
                <Col span={24}>
                    <h1 className="title">{lead.title}</h1>
                    <p className="date">发布日期: {lead.date}</p>
                    <p className="content">{lead.content}</p>
                    <img className="photo" alt={lead.title} src={lead.img} />
                </Col>
            </Row>

        </div>
    )
}
export default Detailed;