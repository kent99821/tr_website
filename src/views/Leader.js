import React, { useState, useEffect } from "react";
import { Row, Col,  message, Card} from 'antd';
import '../assets/css/Leader.css';
import { Link } from 'react-router-dom';
import apiUrl from "../conf/apiUrl";
import axios from "axios";
function Leader(){
    const [leads, setLeads] = useState([]);
    const [show, setShow] = useState(false);
    const getLeads = () => {
        // 领导视察
        axios({
            method: 'get',
            url: apiUrl.leader,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                setLeads(res.data.data);
                setShow(true);
            })
    }
    useEffect(() => {
        getLeads();
    }, [])
    if (!show) {
        return (
            message.loading('资源加载中', 2)
        )
    }
    return(
        <div>
                <Row type="flex" align="middle" justify="center" >
                {leads.map(item => (
                    <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
                        <Card className="Ldcard"
                            hoverable
                            title={"发布日期:"+item.date}
                            extra={<Link to={`/turing/detailed/${item.id}`}>详情</Link>}
                            cover={
                                <img className="ldImg" alt="project" src={item.img} />}>
                            <p className="ldTitle">{item.title}</p>
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Leader;