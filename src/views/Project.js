import React, { useState, useEffect } from "react";
import { Row, Col, message, Card  } from 'antd';
import '../assets/css/Project.css'
import apiUrl from "../conf/apiUrl";
import axios from "axios";
function Project() {
    const [projects, setProjects] = useState([]);
    const [show, setShow] = useState(false);
    const getProjects = () => {
        axios({
            method: 'get',
            url: apiUrl.project,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                setProjects(res.data.data);
                setShow(true);
            })
    }
    useEffect(() => {
        getProjects();
    }, [])
    if (!show) {
        return (
            message.loading('资源加载中', 0.5)
        )
    }
    return (
        <div>
            {
                projects.map(item => (
                    <div>
                        <Row type="flex" align="middle" justify="center" wrap={true}>
                            <Col span={24}>
                            <div>
                            <h1 className="title">{item.projectName}</h1>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="gif">
                                <Card className="pmg" title="团队项目">
                                    <p className="mem">项目成员</p>
                                    <p className="mem"> {
                                    item.projectMembers.map(member=>(
                                        member.memberName+" "
                                    ))
                                        }</p>
                                    <p className="mem">项目介绍</p> 
                                    <p className="content">{item.projectContent}</p>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div className="gif"> 
                                <img className="pmg" alt="pmg" src={item.projectGif}/>
                            </div>
                        </Col>
                        </Row>
                    </div>
                ))
            }
        </div>
    )
}
export default Project;