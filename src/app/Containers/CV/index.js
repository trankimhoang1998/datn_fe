import { UnorderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, message, Modal, Row } from "antd";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../../helper/localStorage";
import { fetchInfoCandidateRequest } from "../../../redux/actionCreators/candidateActionCreator";
import { addCvRequest } from "../../../redux/actionCreators/cvActionCreator";
import Knowledge from "./component/MainInfo/Knowledge";
import Template_CV from "./component/temptate-cv";
import "./component/temptate-cv/index.scss";
import TipsCV from "./component/TipsCV";
import { dataCV2 } from "./data";
import "./index.scss";

function CV(props) {
  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }
  const dispatch = useDispatch();
  const infoCandidate = useSelector((state) => state.candidate.infoCandidate);

  useEffect(() => {
    dispatch(fetchInfoCandidateRequest(id));
  }, [dispatch]);

  const [dataUser] = useState(infoCandidate.result[0]); // this is data infor by user
  const [data, setData] = useState(dataCV2); // this is data Cv by user

  const [formCheckList] = Form.useForm();
  const [visible, setVisible] = useState(false);
  
  const [valueCheckListForm, setValueCheckListForm] = useState(() => {
    return data.map((item) => {
      return {
        value: item.check,
        title: item.title,
      };
    });
  });
 useEffect(()=>{
  setValueCheckListForm(() => {
    return data.map((item) => {
      return {
        value: item.check,
        title: item.title,
      };
    });
  })
 },[visible])

  const handleOnChangeCheck = (index) => {
    const check = valueCheckListForm[index].value;
    const item = { ...valueCheckListForm[index], value: !check };
    const temp = [
      ...valueCheckListForm.slice(0, index),
      item,
      ...valueCheckListForm.slice(index + 1, data.length),
    ];
    setValueCheckListForm(temp);
  };

  const handleChange = (parentIndex, childIndex, newDivision) => {
    const newData = data.map((x, i) => {
      if (i === parentIndex) {
        const divisions = x.divisions.map((x2, i2) => {
          if (i2 === childIndex) {
            return {
              ...x2,
              ...newDivision,
            };
          }
          return x2;
        });
        return {
          ...x,
          divisions,
        };
      }
      return x;
    });
    setData(newData);
  };

  const renderCheckList = () => {
    let jsx = [];
    jsx = valueCheckListForm.map((item, index) => {
      return (
        <Form.Item className="list-form-custom" key={index} name={index}>
          <Checkbox
            className="list-form-custom-checked"
            checked={item.value}
            onChange={() => handleOnChangeCheck(index)}
          >
            <div className="list-form-custom-checked-content">
              <span>{item.title}</span>
            </div>
          </Checkbox>
        </Form.Item>
      );
    });
    return jsx;
  };

  const renderKnowledges = (item, key) => {
    if (item.check) {
      return (
        <Knowledge
          handleHidden={handleHidden}
          handleRemoveDivision={handleRemoveDivision}
          handleAddDivision={handleAddDivision}
          onHandleChange={(index, newDivision) =>
            handleChange(key, index, newDivision)
          }
          key={key}
          dataItem={item}
          index={key}
        />
      );
    }
  };

  const handleConfirm = (boolean) => {
    if (boolean) {
      let count = 0;
      valueCheckListForm.map((item) => {
        if (item.value) {
          count += 1;
        }
      });
      if (count < 2) return message.error("Lựa chọn ít nhất 2 mục");
      else {
        const temp = data.map((item, index) => {
          return { ...item, check: valueCheckListForm[index].value };
        });
        setData(temp);

        setVisible(!visible);
      }
    } else {
      setVisible(!visible);
    }
  };

  const handleAddDivision = (know, _) => {
    const item = { ...data[know] };
    const diviTemp = item.divisions[item.divisions.length - 1];
    item.divisions.push(diviTemp);
    const temp = [
      ...data.slice(0, know),
      item,
      ...data.slice(know + 1, data.lenght),
    ];
    setData(temp);
    localStorage.setItem("data", JSON.stringify(temp));
  };

  const handleRemoveDivision = (know, division) => {
    const divi = data[know].divisions;
    const diviTemp = [
      ...divi.slice(0, division),
      ...divi.slice(division + 1, data[know].divisions.lenght),
    ];
    const item = { ...data[know], divisions: diviTemp };
    const temp = [
      ...data.slice(0, know),
      item,
      ...data.slice(know + 1, data.lenght),
    ];

    if (divi.length < 2) return message.error("Không được xóa hết trường");
    else {
      setData(temp);
      localStorage.setItem("data", JSON.stringify(temp));
    }
  };

  const handleHidden = (index) => {
    const item = { ...data[index], check: false };
    const temp = [
      ...data.slice(0, index),
      item,
      ...data.slice(index + 1, data.lenght),
    ];

    const isCheck = () => {
      let count = 0;
      temp.map((item) => {
        if (item.check) return (count += 1);
      });
      if (count < 2)
        return message.error("Không được xóa hết các trường, tối thiểu 2");
      else {
        setData(temp);
        localStorage.setItem("data", JSON.stringify(temp));
      }
    };
    isCheck();
  };

  const handleOnFinish = (e) => {
    const newDataUser = {
      birthday: e.birthday,
      email: e.email,
      full_name: e.full_name,
      location: e.location,
      phone: e.phone,
      potision: e.potision,
    };
    const title = e.title;
    const avatar = e.avatar.fileList[0].thumbUrl;
    const newData = { dataUser: newDataUser, dataCV: data };
    const value = {
      user_id: id,
      title: title,
      avatar: avatar,
      object: newData,
    };
    dispatch(addCvRequest(value));
  };
  return (
    <Container fluid>
      <Modal
        title="Thêm trường tùy chỉnh"
        visible={visible}
        onOk={() => handleConfirm(true)}
        onCancel={() => setVisible(false)}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        <Form form={formCheckList}>
          <div className="form-checked">{renderCheckList()}</div>
        </Form>
      </Modal>
      <Form onFinish={handleOnFinish}>
        <Row>
          <Col span={16}>
            <Template_CV data={dataUser} />
            <div className="main-info">
              {data.map(renderKnowledges)}
              <Button
                type="primary"
                className="btn-form-check-list"
                onClick={() => setVisible(true)}
                icon={<UnorderedListOutlined />}
              />
            </div>
          </Col>
          <Col span={8}>
            <TipsCV handleOnFinish={handleOnFinish} />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default CV;
