/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react"
import classnames from "classnames"
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap"
import ReactDatetime from "react-datetime"

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js"
import Footer from "components/Footer/Footer.js"

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("")
  const [squares7and8, setSquares7and8] = React.useState("")
  const [fNameTHFocus, setFNameTHFocus] = React.useState(false)
  const [fNameENFocus, setFNameENFocus] = React.useState(false)
  const [nickNameFocus, setNickNameFocus] = React.useState(false)
  const [telFocus, setTelFocus] = React.useState(false)
  const [fbFocus, setFbFocus] = React.useState(false)
  const [emailFocus, setEmailFocus] = React.useState(false)
  const [igFocus, setIgFocus] = React.useState(false)
  const [lineFocus, setLineFocus] = React.useState(false)
  const [ldFocus, setLdFocus] = React.useState(false)
  const [provFocus, setProvFocus] = React.useState(false)
  const [distFocus, setDistFocus] = React.useState(false)
  const [sDistFocus, setSDistFocus] = React.useState(false)
  const [zipCodeFocus, setZipCodeFocus] = React.useState(false)
  const [talent, setTalent] = React.useState("")
  React.useEffect(() => {
    document.body.classList.toggle("register-page")
    document.documentElement.addEventListener("mousemove", followCursor)
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page")
      document.documentElement.removeEventListener("mousemove", followCursor)
    }
  }, [])
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2
    let posY = event.clientY - window.innerWidth / 6
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    )
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    )
  }
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header-register">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-1 offset-md-1" lg="10" md="10">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <Row>
                          <Col lg="6">
                            <Row>
                              <Col lg="12">
                                <Label className="mb-0 cd-header">
                                  ข้อมูลส่วนตัว
                                </Label>
                                <hr className="line-primary mt-1" />
                              </Col>
                              <Col lg="12">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": fNameTHFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ชื่อ-นามสกุล (TH)"
                                    type="text"
                                    onFocus={(e) => setFNameTHFocus(true)}
                                    onBlur={(e) => setFNameTHFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="12">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": fNameENFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ชื่อ-นามสกุล (EN)"
                                    type="text"
                                    onFocus={(e) => setFNameENFocus(true)}
                                    onBlur={(e) => setFNameENFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": nickNameFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ชื่อเล่น"
                                    type="text"
                                    onFocus={(e) => setNickNameFocus(true)}
                                    onBlur={(e) => setNickNameFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": telFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-mobile" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="เบอร์โทรศัพท์"
                                    type="text"
                                    onFocus={(e) => setTelFocus(true)}
                                    onBlur={(e) => setTelFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col md="6">
                                <div className="datepicker-container">
                                  <FormGroup>
                                    <ReactDatetime
                                      inputProps={{
                                        className: "form-control",
                                        placeholder: "วันเกิด",
                                      }}
                                    />
                                  </FormGroup>
                                </div>
                              </Col>
                              <Col md="6" xs="hide"></Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": fbFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Facebook"
                                    type="text"
                                    onFocus={(e) => setFbFocus(true)}
                                    onBlur={(e) => setFbFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": emailFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Email"
                                    type="text"
                                    onFocus={(e) => setEmailFocus(true)}
                                    onBlur={(e) => setEmailFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": igFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Instagram"
                                    type="text"
                                    onFocus={(e) => setIgFocus(true)}
                                    onBlur={(e) => setIgFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": lineFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Line"
                                    type="text"
                                    onFocus={(e) => setLineFocus(true)}
                                    onBlur={(e) => setLineFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": ldFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Linked In"
                                    type="text"
                                    onFocus={(e) => setLdFocus(true)}
                                    onBlur={(e) => setLdFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="12">
                                <Label className="mb-0 mt-1 cd-header">
                                  ที่อยู่
                                </Label>
                                <hr className="line-primary mt-1" />
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": provFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="จังหวัด"
                                    type="text"
                                    onFocus={(e) => setProvFocus(true)}
                                    onBlur={(e) => setProvFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": distFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="อำเภอ"
                                    type="text"
                                    onFocus={(e) => setDistFocus(true)}
                                    onBlur={(e) => setDistFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": sDistFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ตำบล"
                                    type="text"
                                    onFocus={(e) => setSDistFocus(true)}
                                    onBlur={(e) => setSDistFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6" xs="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": zipCodeFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="รหัสไปรษณีย์"
                                    type="text"
                                    onFocus={(e) => setZipCodeFocus(true)}
                                    onBlur={(e) => setZipCodeFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg="6">
                            <Row>
                              <Col lg="12">
                                <Label className="mb-0 cd-header">
                                  รายละเอียดเพิ่มเติม
                                </Label>
                                <hr className="line-primary mt-1" />
                              </Col>
                              <Col lg="5">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": provFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="วุฒิการศึกษา"
                                    type="text"
                                    onFocus={(e) => setProvFocus(true)}
                                    onBlur={(e) => setProvFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="7">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": distFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="สถานศึกษา"
                                    type="text"
                                    onFocus={(e) => setDistFocus(true)}
                                    onBlur={(e) => setDistFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="12">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": sDistFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="คณะ/สาขาวิชา"
                                    type="text"
                                    onFocus={(e) => setSDistFocus(true)}
                                    onBlur={(e) => setSDistFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="12">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": zipCodeFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    type="select"
                                    onFocus={(e) => setZipCodeFocus(true)}
                                    onBlur={(e) => setZipCodeFocus(false)}
                                    onChange={(e) => setTalent(e.target.value)}
                                  >
                                    <option value="" disabled selected>
                                      ความสามารถพิเศษ
                                    </option>
                                    <option>ดนตรี</option>
                                    <option>กีฬา</option>
                                    <option>งานบ้าน</option>
                                  </Input>
                                </InputGroup>
                              </Col>
                              <Col lg="12">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": zipCodeFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ประวัติการทำงาน/ ฝึกงาน (ถ้ามี)"
                                    type="text"
                                    onFocus={(e) => setZipCodeFocus(true)}
                                    onBlur={(e) => setZipCodeFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="12">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": zipCodeFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ชื่อที่ทำงาน"
                                    type="text"
                                    onFocus={(e) => setZipCodeFocus(true)}
                                    onBlur={(e) => setZipCodeFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": zipCodeFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ตำแหน่งงาน"
                                    type="text"
                                    onFocus={(e) => setZipCodeFocus(true)}
                                    onBlur={(e) => setZipCodeFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": zipCodeFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="ระยะเวลาที่ทำงาน"
                                    type="text"
                                    onFocus={(e) => setZipCodeFocus(true)}
                                    onBlur={(e) => setZipCodeFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                              <Col lg="12">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": zipCodeFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    type="select"
                                    onFocus={(e) => setZipCodeFocus(true)}
                                    onBlur={(e) => setZipCodeFocus(false)}
                                  >
                                    <option value="" disabled selected>
                                      ตำแหน่งที่สนใจ
                                    </option>
                                    <option>Software Developer</option>
                                    <option>Software Tester</option>
                                    <option>IT-Support</option>
                                  </Input>
                                </InputGroup>
                              </Col>
                              <Col lg="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": zipCodeFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-square-pin" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="เงินเดือนที่คาดหวัง"
                                    type="text"
                                    onFocus={(e) => setZipCodeFocus(true)}
                                    onBlur={(e) => setZipCodeFocus(false)}
                                  />
                                </InputGroup>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button className="btn-round" color="primary" size="lg">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
