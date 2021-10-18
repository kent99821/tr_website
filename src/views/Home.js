import React, { useState } from "react";
import { BackTop, Row, Menu, Col, Carousel  } from 'antd';
import {
    HomeOutlined,
    FileSearchOutlined,
    NotificationOutlined,
    TeamOutlined,
    PartitionOutlined,
    BuildOutlined,
    TrophyOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import '../assets/css/home.css';
import { Link, Switch, Route } from "react-router-dom";
import ClientIndex from './ClientIndex';
import Introduce from './Introduce';
import Notice from './Notice';
import Leader from './Leader';
import Teacher from './Teacher';
import TeamMate from './TeamMate';
import Project from "./Projec";
import Price from './Price';
import Activity from './Activity';
import Join from './Join';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function Home() {
    const [current, setCurrent] = useState('');
    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div>
            <BackTop />
            <Row type="flex" justify="center" className="menu">
                <Col xs={20} sm={20} md={20} lg={20} xl={24} xxl={24}>
                    <Menu mode="horizontal" className="menu" onClick={handleClick} selectedKeys={[current]}>
                        <Menu.Item key="index" className="menuItem" icon={<HomeOutlined />}>
                            <Link to="/turing/index"> 首页</Link>
                        </Menu.Item>
                        <Menu.Item className="menuItem" icon={<FileSearchOutlined />}>
                            <Link to="/turing/introduce"> 团队简介</Link>
                        </Menu.Item>
                        <Menu.Item className="menuItem" icon={<NotificationOutlined />}>
                            <Link to="/turing/notice"> 团队公告</Link>
                        </Menu.Item>
                        <Menu.Item className="menuItem" icon={<TeamOutlined />}>
                            <Link to="/turing/leader"> 领导视察</Link>
                        </Menu.Item>
                        <Menu.Item className="menuItem" icon={<PartitionOutlined />}>
                            团队规模
                        </Menu.Item>
                        <Menu.Item className="menuItem" icon={<BuildOutlined />}>
                            <Link to="/turing/project">团队项目</Link>
                        </Menu.Item>
                        <Menu.Item className="menuItem" icon={<TrophyOutlined />}>
                            <Link to="/turing/price">团队荣誉</Link>
                        </Menu.Item>
                        <Menu.Item className="menuItem" icon={<UserAddOutlined />}>
                            <Link to="/turing/Join">加入我们</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
            <div className="show">
                <Switch>
                    <Route path="/turing/index" component={ClientIndex}></Route>
                    <Route path="/turing/introduce" component={Introduce}></Route>
                    <Route path="/turing/notice" component={Notice}></Route>
                    <Route path="/turing/leader" component={Leader}></Route>
                    <Route path="/turing/teacher" component={Teacher}></Route>
                    <Route path="/turing/teammate" component={TeamMate}></Route>
                    <Route path="/turing/project" component={Project}></Route>
                    <Route path="/turing/price" component={Price}></Route>
                    <Route path="/turing/activity" component={Activity}></Route>
                    <Route path="/turing/join" component={Join}></Route>
                </Switch>
            </div>
        </div>
    )
}
export default Home;