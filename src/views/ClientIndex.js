import React, { useState, useEffect } from "react";
import { Card, Col, Row, message, Image } from 'antd';
import {NotificationTwoTone} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../assets/css/ClientIndex.css'
import axios from "axios";
import apiUrl from "../conf/apiUrl";
function ClientIndex() {
    const [teachers, setTeachers] = useState([]);
    const [introduce, setIntroduce] = useState({});
    const [informs, setInforms] = useState([]);
    const [projects, setProject] = useState([]);
    const [lives, setLives] = useState([]);
    const [members, setMenbers] = useState([]);
    const [show, setShow] = useState(false);
    const getShows = () => {
        // 教师信息
        axios({
            method: 'get',
            url: apiUrl.teacher,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                setTeachers(res.data.data);
            })
        // 团队介绍
        axios({
            method: 'get',
            url: apiUrl.introduce,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                setIntroduce(res.data.data[0]);
                // setShow(true);
            })
        // 最新通告
        axios({
            method: 'get',
            url: apiUrl.inform,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                console.log(res);
                setInforms(res.data.data);
                setShow(true);
            })
    }

    useEffect(() => {
        getShows();
    }, [])
    if (!show) {
        return (
            message.loading('资源加载中', 2)
        )
    }
    return (
        <div>
            <Row type="flex" align="middle" justify="center" wrap={true}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <Card className="card" title="指导老师" bordered={true} >

                        <div className="avtar">
                            <Image width={100} src={teachers[0].teacherImg} preview={false} />
                        </div>
                        <div className="teacherMsg">
                            <p>{teachers[0].teacherName + ", " + teachers[0].teacherPosition + teachers[0].teacherResearch}</p>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8} >
                    <Card className="card" title="团队介绍" bordered={true} extra={<Link to="/turing/introduce">查看更多</Link>}>
                        <div className="introduce">
                            <p>{introduce.introductionInfo}</p>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <Card className="card" title="团队通告" bordered={true}>
                       <div className="inform">
                       {informs.map(item=>(
                            <li key={item.informTitle}><NotificationTwoTone />&nbsp;&nbsp;{item.informTitle}</li>
                        ))}
                       </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default ClientIndex;