import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Input, Row, Select, Button, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "../../../RecruitmentPages/component/Search/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCareerRequest } from "../../../../../../redux/actionCreators/careerActionCreator";
export default function Search(props) {
  const { Option } = Select;

  const career = useSelector((state) => state.career.listCareer);

  const careers = [
    {
      created_at: "2020-11-12 12:54:39",
      id: 1,
      name: "",
      updated_at: "2020-11-12 12:54:39",
    },
    ...career.result,
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListCareerRequest());
  }, [dispatch]);

  const { handleCurrent } = props;
  const { handleSubmit } = props;

  const [formState, setFormState] = useState({
    name: "",
    position: "",
  });

  const handleChangeName = (event) => {
    const value = event.target.value;
    setFormState((formState) => ({
      ...formState,
      name: value,
    }));
  };

  const onFinish = (values) => {
    handleSubmit(formState);
    handleCurrent(1);
  };

  const handleChangePosition = (event) => {
    setFormState((formState) => ({
      ...formState,
      position: event,
    }));
  };

  return (
    <Container fluid id="search">
      <Container className="search">
        <div className="search__title">
          <h2>Tìm kiếm ứng viên</h2>
          <hr className="line-theme" />
        </div>
        <Row className="search__content">
          <Form onFinish={onFinish}>
            <Form.Item name="name" onChange={handleChangeName}>
              <Input
                placeholder="Nhập tên ứng viên"
                className="search__input"
              />
            </Form.Item>
            <Form.Item name="position">
              <Select
                placeholder="Vị Trí"
                className="search__input-select"
                onChange={handleChangePosition}
              >
                {careers.map((value, key) => {
                  if (value.name == "") {
                    return (
                      <Option key={key} value={value.name}>
                        Tất cả
                      </Option>
                    );
                  }
                  return (
                    <Option key={key} value={value.name}>
                      {value.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                className="search-btn"
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
              />
            </Form.Item>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}
