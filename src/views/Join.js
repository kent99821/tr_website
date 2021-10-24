import React, { Component } from 'react';
import { Button, Divider, Row, Col, Input, Modal, Popover } from 'antd';
import { Card } from 'element-react';
import 'element-theme-default';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import apiUrl from '../conf/apiUrl';
import evaluationpng from '../assets/img/evaluation.png';
import class1png from '../assets/img/class1.png';
import directionpng from '../assets/img/direction.png';
import evaluation1png from '../assets/img/evaluation1.png';
import expectationpng from '../assets/img/expectation.png';
import namepng from '../assets/img/name.png';
import numberpng from '../assets/img/number.png';
import otherpng from '../assets/img/other.png';
import phonepng from '../assets/img/phone.png';
import skillpng from '../assets/img/skill.png';
import '../assets/css/Join.css';

const IsPC = () => {
  var userAgentInfo = navigator.userAgent
  var Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ]
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
export default class join extends Component {
  constructor(props) {
    super(props)
    const name = localStorage.getItem('name')
    const direction = localStorage.getItem('direction')
    const number = localStorage.getItem('number')
    const phone = localStorage.getItem('phone')
    const class1 = localStorage.getItem('class')
    const evaluation = localStorage.getItem('evaluation')
    const skills = localStorage.getItem('skills')
    const expectation = localStorage.getItem('expectation')
    const experience = localStorage.getItem('experience')
    const others = localStorage.getItem('others')
    const storageplaceholders = JSON.parse(localStorage.getItem('placeholders'))
    const defaultplaceholders = {
      title: '图灵智能创新团队创新组招新简历',
      buttonname: '切换创业组',
      skill: '高中是否有编程语言基础？或者在其它领域是否有较突出的技能？',
      experience: '是否有项目经验，若无请填暂无',
    }
    const placeholders = storageplaceholders
      ? storageplaceholders
      : defaultplaceholders
    this.state = {
      placeholders,
      downloadurls: {},
      name,
      direction,
      number,
      phone,
      class: class1,
      evaluation,
      skills,
      expectation,
      experience,
      others,
      visible: true,
      issubmit: false,
    }

 

    Modal.info({
      title: '小提示',
      content: (
        <div>
          <span>点击标题下面的按钮可以在创新组和创业组之间切换简历哦</span>
          {IsPC() ? (
            ''
          ) : (
            <>
              <br />
              <br />
              <span>请在电脑端打印哦!!!</span>
              <br />
              <span>请在电脑端打印哦!!!</span>
              <br />
              <span>请在电脑端打印哦!!!</span>
              <br />
            </>
          )}
        </div>
      ),
      centered: IsPC() ? false : true,
    })
  }

  handlenamechange = (e) => {
    this.setState(
      {
        name: e.target.value,
      },
      () => {
        localStorage.setItem('name', this.state.name)
      }
    )
  }
  handledirectionchange = (e) => {
    this.setState(
      {
        direction: e.target.value,
      },
      () => {
        localStorage.setItem('direction', this.state.direction)
      }
    )
  }
  handlenumberchange = (e) => {
    this.setState(
      {
        number: e.target.value,
      },
      () => {
        localStorage.setItem('number', this.state.number)
      }
    )
  }
  handlephonechange = (e) => {
    this.setState(
      {
        phone: e.target.value,
      },
      () => {
        localStorage.setItem('phone', this.state.phone)
      }
    )
  }
  handleclasschange = (e) => {
    this.setState(
      {
        class: e.target.value,
      },
      () => {
        localStorage.setItem('class', this.state.class)
      }
    )
  }
  handleevaluationchange = (e) => {
    this.setState(
      {
        evaluation: e.target.value,
      },
      () => {
        localStorage.setItem('evaluation', this.state.evaluation)
      }
    )
  }
  handleskillschange = (e) => {
    this.setState(
      {
        skills: e.target.value,
      },
      () => {
        localStorage.setItem('skills', this.state.skills)
      }
    )
  }
  handleexpectationchange = (e) => {
    this.setState(
      {
        expectation: e.target.value,
      },
      () => {
        localStorage.setItem('expectation', this.state.expectation)
      }
    )
  }
  handleexperiencechange = (e) => {
    this.setState(
      {
        experience: e.target.value,
      },
      () => {
        localStorage.setItem('experience', this.state.experience)
      }
    )
  }
  handleotherschange = (e) => {
    this.setState(
      {
        others: e.target.value,
      },
      () => {
        localStorage.setItem('others', this.state.others)
      }
    )
  }

  checkagain = () => {
    if (!IsPC()) {
      alert('请在电脑端打印！')
    }
  }
  // 模板切换
  change = () => {
    if (this.state.placeholders.buttonname === '切换创业组') {
      const placeholders = {
        title: '图灵智能创新团队创业组招新简历',
        buttonname: '切换创新组',
        skill: `以前是否在产品设计、PPT制作、策划书编写上这方面有一定基础？例如：之前是否有文档撰写和需求分析等经验，之前是否有演讲、商业策划、ppt制作、运营的经历，或者在其它领域是否有较突出的技能、证书？`,
        experience: '是否有一些社会实践或是参与过其他创业项目？',
      }
      this.setState({ placeholders }, () => {
        localStorage.setItem('placeholders', JSON.stringify(placeholders))
      })
    } else {
      const placeholders = {
        title: '图灵智能创新团队创新组招新简历',
        buttonname: '切换创业组',
        skill: '高中是否有编程语言基础？或者在其它领域是否有较突出的技能？',
        experience: '是否有项目经验，若无请填暂无',
      }
      this.setState({ placeholders }, () => {
        localStorage.setItem('placeholders', JSON.stringify(placeholders))
      })
    }
  }

  submit = () => {
    const {
      name,
      direction,
      number,
      phone,
      evaluation,
      skills,
      expectation,
      experience,
      others,
      issubmit,
    } = this.state
    axios({
      method: 'post',
      url:apiUrl.resume,
      headers: { 'Access-Control-Allow-Origin': '*' },
      withCredentials: true,
      data: {
        resumeName: name,
        resumeStudentId: number,
        resumeTelephone: phone,
        resumeMajor: this.state.class,
        resumeDirect: direction,
        resumeEvaluation: evaluation,
        resumeSkills: skills,
        resumeExperience: experience,
        resumeExpect: expectation,
        resumeOther: others,
      },
    }).then((res) => {

      if (res.data.code === 200) {
        this.setState({ issubmit: !issubmit })
        Modal.success({
          content: '提交成功 感谢您选择图灵团队',
        });
      }
    })
  }


  render() {
    const { placeholders, issubmit } = this.state
    const {
      name,
      direction,
      number,
      phone,
      evaluation,
      skills,
      expectation,
      experience,
      others,
    } = this.state
    return (
      <div
        className={`join ${IsPC() ? '' : 'isphone'}`}
        ref={(el) => (this.componentRef = el)}
      >
        <Card className={` ${IsPC() ? '' : 'isphone-card'}`}>
          <Row>
            <Col span="24">
              <h5>{placeholders.title}</h5>
            </Col>
          </Row>
          <Row>
            <Col span="24" className="no-print">
              <Button
                onClick={this.change}
                type="primary"
                ghost
                className="change-type-btn no-print"
              >
                {placeholders.buttonname}
              </Button>
            </Col>
          </Row>
          <Divider className="no-print" />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img className="col-img" src={evaluationpng} alt="" />
                <h1 className="col-title">个人信息</h1>
              </Row>
              <Row>
                <p className="col-english">Individual</p>
              </Row>
            </Col>
            <Col span="20" xs={24} sm={20} md={20} lg={20}>
              <Row>
                <Col
                  span="8"
                  xs={24}
                  sm={24}
                  md={10}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      className="col-img"
                      src={namepng}
                      alt=""
                      style={{ marginLeft: 0 }}
                    />
                    <h1 className="col-title">姓名</h1>
                  </Row>
                  <Input
                    placeholder="请输入正确的姓名"
                    size="large"
                    onChange={this.handlenamechange}
                    value={name}
                  />
                </Col>
                <Col
                  span="8"
                  xs={24}
                  sm={24}
                  md={10}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      className="col-img"
                      src={directionpng}
                      alt=""
                      style={{ marginLeft: 0 }}
                    />
                    <h1 className="col-title">方向</h1>
                  </Row>
                  <Input
                    placeholder="可先不填"
                    size="large"
                    value={direction}
                    onChange={this.handledirectionchange}
                  />
                </Col>
                <Col
                  span="8"
                  xs={24}
                  sm={24}
                  md={10}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      className="col-img"
                      src={numberpng}
                      alt=""
                      style={{ marginLeft: 0 }}
                    />
                    <h1 className="col-title">学号</h1>
                  </Row>
                  <Input
                    placeholder="请输入正确的12位学号"
                    size="large"
                    value={number}
                    onChange={this.handlenumberchange}
                  />
                </Col>
                <Col
                  span="8"
                  xs={24}
                  sm={24}
                  md={10}
                  lg={6}
                  style={{ marginRight: '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      className="col-img"
                      src={phonepng}
                      alt=""
                      style={{ marginLeft: 0 }}
                    />
                    <h1 className="col-title">电话</h1>
                  </Row>
                  <Input
                    placeholder="请输入正确的11位手机号码"
                    size="large"
                    value={phone}
                    onChange={this.handlephonechange}
                  />
                </Col>
                <Col
                  span="8"
                  xs={24}
                  sm={24}
                  md={10}
                  lg={6}
                  style={{ 'margin-right': '1vw', marginTop: '5px' }}
                >
                  <Row>
                    <img
                      className="col-img"
                      src={class1png}
                      alt=""
                      style={{ marginLeft: 0 }}
                    />
                    <h1 className="col-title">班级</h1>
                  </Row>
                  <Input
                    placeholder="如电气1202"
                    size="large"
                    value={this.state.class}
                    onChange={this.handleclasschange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img className="col-img" src={evaluation1png} alt="" />
                <h1 className="col-title">自我评价</h1>
              </Row>
              <Row>
                <p className="col-english">Evaluation</p>
              </Row>
            </Col>
            <Col span="20" xs={24} sm={20} md={20} lg={20}>
              <Input.TextArea
                id="myinput"
                placeholder="简单介绍一下自己，性格、兴趣爱好等等。你觉得你最大的优点是什么？"
                onChange={this.handleevaluationchange}
                value={evaluation}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img className="col-img" src={skillpng} alt="" />
                <h1 className="col-title">技能水平</h1>
              </Row>
              <Row>
                <p className="col-english">Skills</p>
              </Row>
            </Col>
            <Col span="20" xs={24} sm={20} md={20} lg={20}>
              <Input.TextArea
                placeholder={placeholders.skill}
                onChange={this.handleskillschange}
                value={skills}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img className="col-img" src={expectationpng} alt="" />
                <h1 className="col-title">期望</h1>
              </Row>
              <Row>
                <p className="col-english">Expectation</p>
              </Row>
            </Col>
            <Col span="20" xs={24} sm={20} md={20} lg={20}>
              <Input.TextArea
                placeholder="为什么想加入我们团队？ 你期望以后在团队里做怎么样的一个角色？以后想从事什么职业？简单说一说，你来到团队后的学习安排？"
                onChange={this.handleexpectationchange}
                value={expectation}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img className="col-img" src={otherpng} alt="" />
                <h1 className="col-title">项目经验</h1>
              </Row>
              <Row>
                <p className="col-english">Experience</p>
              </Row>
            </Col>
            <Col span="20" xs={24} sm={20} md={20} lg={20}>
              <Input.TextArea
                placeholder={placeholders.experience}
                onChange={this.handleexperiencechange}
                value={experience}
              />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span="4" xs={10} sm={4} md={4} lg={4}>
              <Row>
                <img className="col-img" src={otherpng} alt="" />
                <h1 className="col-title">其它</h1>
              </Row>
              <Row>
                <p className="col-english">Others</p>
              </Row>
            </Col>
            <Col span="20" xs={24} sm={20} md={20} lg={20}>
              <Input.TextArea
                placeholder="你还参加了哪些学生组织或社团面试？实验室有严格的管理条例，你觉得自己能适应吗？"
                onChange={this.handleotherschange}
                value={others}
              />
            </Col>
          </Row>
          <Divider className="no-print" />
          <Row className="no-print">
            <div style={{ margin: '0 auto 20px' }}>
              <Button
                onClick={this.submit}
                type="primary"
                style={{ marginRight: '1vw' }}
                disabled={issubmit}
              >
                {issubmit ? '已提交' : '提交'}
              </Button>
              {IsPC() ? (
                <ReactToPrint
                  trigger={() => {
                    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                    // to the root node of the returned component as it will be overwritten.
                    return (
                      <Popover
                        content="拉动文本框右下角调整打印布局 ^_^"
                        placement="bottom"
                      >
                        <Button type="primary" style={{ marginRight: '1vw' }}>
                          打印
                        </Button>
                      </Popover>
                    )
                  }}
                  content={() => this.componentRef}
                />
              ) : (
                <Button
                  type="primary"
                  style={{ marginRight: '1vw' }}
                  onClick={this.checkagain}
                >
                  打印
                </Button>
              )}
            </div>
          </Row>
        </Card>
      </div>
    )
  }
}