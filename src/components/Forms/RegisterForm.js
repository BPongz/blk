import React, { useState, useEffect } from "react"
import classnames from "classnames"
// reactstrap components
import {
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  UncontrolledPopover,
  PopoverBody,
  Popover,
} from "reactstrap"
import ReactDatetime from "react-datetime"
import Select from "react-select"

export default function RegisterForm() {
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
  const [selectedTal, setSelectedTal] = useState(null)
  const [selectedPos, setSelectedPos] = useState(null)
  const [popoverOpen, setPopoverOpen] = React.useState(false)
  const talent = [
    { value: "1", label: "ดนตรี" },
    { value: "2", label: "กีฬา" },
    { value: "3", label: "การใช้ซอฟท์แวร์" },
    { value: "4", label: "Front-End" },
    { value: "5", label: "Back-End" },
  ]
  const position = [
    { value: "1", label: "Software Developer" },
    { value: "2", label: "Software Tester" },
    { value: "3", label: "IT-Support" },
  ]

  const [provinceData, setProvinceData] = useState([])
  const [filterZipCode, setFilterZipCode] = useState([])
  const [province, setProvince] = useState("")
  const [amphure, setAmphure] = useState("")
  const [selectedZip, setSelectedZip] = useState("")
  const [tumbon, setTumbon] = useState([])

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_revert_tambon_with_amphure_province.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProvinceData(data)
      })
  }, [])

  const onZipInputChange = (event) => {
    let zipcodeData = []
    const filteredprovinceData = provinceData.filter((data, index) => {
      const zipcode = data.zip_code.toString()
      if (zipcode.includes(event)) {
        return zipcode
      }
    })
    for (const data of filteredprovinceData) {
      zipcodeData.push(data.zip_code)
    }
    setFilterZipCode([...new Set(zipcodeData)])
    setSelectedZip(event)
    if (event === "") {
      setFilterZipCode([])
    }
  }

  const onSelectZip = (event) => {
    console.log("evnt", event)
    setSelectedZip(event.toString())
    setTumbon(
      provinceData.filter((data, index) => {
        const zipcode = data.zip_code.toString()
        if (zipcode.includes(event)) {
          return zipcode
        }
      })
    )
  }

  useEffect(() => {
    if (tumbon.length > 0) {
      setProvince(tumbon[0].amphure.province.name_th)
      setAmphure(tumbon[0].amphure.name_th)
      console.log(tumbon)
    }
  }, [tumbon])

  const handlePos = (e) => {
    setSelectedPos(e)
  }
  const handleTal = (e) => {
    setSelectedTal(e)
  }

  const toggle = () => {
    setPopoverOpen(!popoverOpen)
  }

  return (
    <>
      <Row>
        <Col lg="6">
          <Row>
            <Col lg="12">
              <Label className="mb-0 cd-header">ข้อมูลส่วนตัว</Label>
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
              <Label className="mb-0 mt-1 cd-header">ที่อยู่</Label>
              <hr className="line-primary mt-1" />
            </Col>
            <Col lg="6" xs="6">
              <InputGroup
                id="bt"
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
                  data-container="body"
                  id="ipop"
                  onFocus={(e) => {
                    setZipCodeFocus(true)
                  }}
                  onBlur={() => {
                    setZipCodeFocus(false)
                  }}
                  value={selectedZip}
                  onChange={(e) => {
                    onZipInputChange(e.target.value)
                  }}
                  onKeyDown={() => {
                    setPopoverOpen(filterZipCode.length > 0)
                  }}
                />
              </InputGroup>
              <Popover
                placement="bottom"
                target="ipop"
                isOpen={filterZipCode.length > 0 ? popoverOpen : false}
                id="customPopover"
              >
                <PopoverBody>
                  {filterZipCode.map((code) => {
                    return (
                      <p
                        style={{ color: "black", cursor: "pointer" }}
                        key={code}
                        onClick={() => {
                          onSelectZip(code)
                          setPopoverOpen(false)
                        }}
                      >
                        {code}
                      </p>
                    )
                  })}
                </PopoverBody>
              </Popover>
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
                  type="select"
                  onFocus={(e) => setZipCodeFocus(true)}
                  onBlur={(e) => setZipCodeFocus(false)}
                  onChange={(e) => setSelectedTal(e.target.value)}
                  disabled={tumbon.length === 0}
                  defaultValue="0"
                >
                  <option value="0" disabled>
                    ตำบล
                  </option>
                  {tumbon.map((code) => {
                    return <option key={code.name_th}>{code.name_th}</option>
                  })}
                </Input>
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
                  value={amphure}
                />
              </InputGroup>
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
                  value={province}
                />
              </InputGroup>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <Row>
            <Col lg="12">
              <Label className="mb-0 cd-header">รายละเอียดเพิ่มเติม</Label>
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
              <Select
                className="Selector"
                placeholder="ความสามารถพิเศษ"
                value={selectedTal} // set selected value
                options={talent} // set list of the data
                onChange={handleTal} // assign onChange function
                isOptionDisabled={(option) => option.isdisabled} // disable an option
              />
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
              <Select
                className="Selector"
                placeholder="ตำแหน่งที่สนใจ"
                value={selectedPos} // set selected value
                options={position} // set list of the data
                onChange={handlePos} // assign onChange function
                isOptionDisabled={(option) => option.isdisabled} // disable an option
              />
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
    </>
  )
}
