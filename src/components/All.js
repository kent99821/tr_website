import React, { useState, useEffect } from "react";
import { Row, Col, message, Card, Image, Pagination, Tabs } from 'antd';
import '../assets/css/TeamMates.css';
import apiUrl from "../conf/apiUrl";
import axios from "axios";
function All() {
    const [members, setMmbers] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);
    const pageSizeOptions = [2, 4, 5, 6, 8, 10];
    const getMembers = (page, size) => {
        axios({
            method: 'get',
            url: `${apiUrl.memberPage}?page=${page}?&size=${size}`,
            headers: { 'Access-Control-Allow-Orign': '*' },
            withCredentials: true
        }).then(
            res => {
                setMmbers(res.data.data.members);
                setTotal(res.data.data.total);
            }
        )
    }
    const onChange = (page, size) => {
        setPage(page);
        setSize(size);
        getMembers(page, size);
    }
    useEffect(() => {
        getMembers(page, size);
        setShow(true);
    }, [])
    if (!show) {
        return (
            message.loading('资源加载中', 2)
        )
    }

    return (
        <div>
            <div>
                {
                    members.map(item => (
                        <Row type="flex" align="middle" justify="center" wrap={true}>
                            <Col span={24}>
                               <Card className="pCard">
                               <div>
                                   <div className="memberIcon">
                                    <img src={item.memberIcon} preview={false}  className="memberImg"/>
                                    </div>
                                    <div className="mInform">
                                    <p className="memberName">{item.memberName}</p>
                                    <p className="introduce">{item.memberIntroduction}</p>
                                    <p className="mClass">班级: {item.memberMajor}-{item.memberClass}</p>
                                    <p className="mLearn">研究方向: {item.memberTechnology}</p>
                                    <p className="mAfter">毕业去向: {item.memAfterGraduatedDestination} </p>
                                    </div>
                                </div>
                               </Card>
                            </Col>
                        </Row>
                    ))
                }
            </div>
            <div>
                <Row type="flex" align="middle" justify="center" wrap={true}>
                    <Col span={24}>
                        <Pagination
                            total={total}
                            showTotal={total => `共 ${total} 条`}
                            defaultPageSize={5}
                            defaultCurrent={1}
                            showSizeChanger
                            onChange={onChange}
                            pageSizeOptions={pageSizeOptions}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default All;