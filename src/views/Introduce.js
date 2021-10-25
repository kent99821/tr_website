import React,{ useState, useEffect } from "react";
import { Row, Col, message} from "antd";
import axios from "axios";
import '../assets/css/Introduce.css';
import apiUrl from "../conf/apiUrl";
function Introduce(){
    const [introduction, setIntroduction] = useState({});
    const [show, setShow] = useState(false);
    const getIntroduce = ()=>{
        axios({
            method:'get',
            url: apiUrl.introduce,
            headers: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res =>{
                setIntroduction(res.data.data[0]);
                setShow(true);
            })
    }
    useEffect(() => {
        getIntroduce();
    }, [])
    if (!show) {
        return (
            message.loading('资源加载中', 0.5)
        )
    }
    return(
        <div>
            <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="showI">
                    <h1 className="title">图灵智能创新团队介绍</h1>
                        <p className="content">{introduction.introductionInfo}</p>
                        <br/>
                        <p className="date">更新日期: {introduction.introductionEditTime}</p>
                </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} >
                    <div className="showI">
                    <video className="video" src="http://150.158.171.105:9876/static/2021Video.mp4" controls="controls"></video>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Introduce;