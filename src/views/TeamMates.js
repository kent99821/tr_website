import React from "react";
import { Row, Col, Tabs } from 'antd';
import '../assets/css/TeamMates.css';
import All from "../components/All";
import Cv from "../components/Cv";
import Nlp from "../components/Nlp";
import Qd from "../components/Qd";
import Ht from "../components/Ht";
import Ui from "../components/Ui";
function TeamMates() {
    const { TabPane } = Tabs;
    return (
        <div>
            <Row type="flex" align="middle" justify="center" wrap={true}>
                <Col span={24}>
                    <div className="tabf">
                        <Tabs className="tab" defaultActiveKey="1" >
                            <TabPane tab="全部成员" key="all">
                                <All />
                            </TabPane>
                            <TabPane tab="计算机视觉方向" key="cv">
                                <Cv/>
                            </TabPane>
                            <TabPane tab="自然语言处理方向" key="nlp">
                                <Nlp/>
                            </TabPane>
                            <TabPane tab="前端方向" key="qd">
                            <Qd/>
                            </TabPane>
                            <TabPane tab="后台方向" key="ht">
                                <Ht/>
                            </TabPane>
                            <TabPane tab="UI" key="ui">
                                <Ui/>
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default TeamMates;