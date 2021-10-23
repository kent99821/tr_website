import React,{useState, useEffect} from "react";
import { Row, Col,  message, Card, Image} from 'antd';
import '../assets/css/Teachers.css';
import apiUrl from "../conf/apiUrl";
import axios from "axios";
function Teachers(){
    const [teachers, setTeachers] = useState([]);
    const [show, setShow] = useState(false);
    const getTeachers = ()=>{
        axios({
            method:'get',
            url:apiUrl.teacher,
            headers:{'Access-Control-Allow-Orign':'*'},
            withCredentials:true
        }).then(
            res =>{
                setTeachers(res.data.data);
                setShow(true);
            }
        )
    }
    useEffect(()=>{
        getTeachers();
        setShow(true);
    },[])
    if(!show){
        return (
            message.loading('资源加载中', 2)
        )
    }
    return(
        <div>
            {
                teachers.map(item=>(
                    <div>
                    <Row type="flex" align="middle" justify="center" wrap={true}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <div>
                        <Card title="指导老师" className="tCard" hoverable>
                        <div className="avtar">
                            <Image width={100} src={item.teacherImg} preview={false} />
                        </div>
                        <div className="namePostion">
                            <p>{item.teacherName}</p>
                            <p>职称: {item.teacherPosition}</p>
                        </div>
                       </Card>
                    </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <div>
                    <Card title="教师信息" className="mCard" hoverable>
                           <p className="inform">邮箱: {item.teacherEmail}</p>
                           <p className="inform">出生地: {item.teacherBorn}</p>
                           <p className="inform">职业: {item.teacherJob}</p>
                           <p className="inform">毕业院校: {item.teacherGraduation}</p>
                       </Card>
                    </div>
                    </Col>
                    </Row>
                    <Row type="flex" align="middle" justify="center" wrap={true}>
                        <Col span={24}>
                            <div className="content">
                                <h2 className="field">主要研究领域和方向</h2>
                                <p className="text">{item.teacherResearch}</p>
                                <h2 className="field">科研工作</h2>
                                <p className="text">{item.teacherScientificResearch}</p>
                                <h2 className="field">获奖情况</h2>
                                <p className="text">{item.teacherAwardIntroduction}</p>
                            </div>
                        </Col>
                    </Row>
                    </div>
                ))
            }
        </div>
    )
}
export default Teachers;