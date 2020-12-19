import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCityRequest } from "../../../../../../redux/actionCreators/cityActionCreator";
import { fetchListRankRequest } from "../../../../../../redux/actionCreators/rankActionCreator";
import { fetchListCareerRequest } from "../../../../../../redux/actionCreators/careerActionCreator";
import "./index.scss";

export default function Search(props) {
  const city = useSelector((state) => state.city.listCity);
  const rank = useSelector((state) => state.rank.listRank);
  const career = useSelector((state) => state.career.listCareer);

  const citys = [
    {
      created_at: "2020-11-12 12:54:39",
      id: "",
      name: "",
      updated_at: "2020-11-12 12:54:39",
    },
    ...city.result,
  ];

  const ranks = [
    {
      created_at: "2020-11-12 12:54:39",
      id: "",
      name: "",
      updated_at: "2020-11-12 12:54:39",
    },
    ...rank.result,
  ];

  const careers = [
    {
      created_at: "2020-11-12 12:54:39",
      id: "",
      name: "",
      updated_at: "2020-11-12 12:54:39",
    },
    ...career.result,
  ];

  const { handleCurrent } = props;
  const { handleSubmit } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListCityRequest());
    dispatch(fetchListRankRequest());
    dispatch(fetchListCareerRequest());
  }, [dispatch]);

  const [formState, setFormState] = useState({
    vacancy: "",
    city: "",
    rank: "",
    career:""
  });

  const { Option } = Select;

  const handleChangeVacancy = (event) => {
    const value = event.target.value;
    setFormState((formState) => ({
      ...formState,
      vacancy: value,
    }));
  };

  const handleChangeCity = (event) => {
    setFormState((formState) => ({
      ...formState,
      city: event,
    }));
  };

  const handleChangeRank = (event) => {
    setFormState((formState) => ({
      ...formState,
      rank: event,
    }));
  };

  const handleChangeCareer = (event) => {
    setFormState((formState) => ({
      ...formState,
      career: event,
    }));
  };


  const onFinish = (values) => {
    handleSubmit(formState);
    handleCurrent(1);
  };

  return (
    <Container fluid id="search">
      <Container className="search">
        <div className="search__title">
          <h2>Tìm kiếm Việc làm</h2>
          <hr className="line-theme" />
        </div>
        <Row className="search__content">
          <Form onFinish={onFinish}>
            <Form.Item name="vacancy" onChange={handleChangeVacancy}>
              <Input placeholder="Tên công việc..." className="search__input" />
            </Form.Item>

            <Form.Item name="city">
              <Select
                placeholder="Thành Phố"
                className="search__input-select"
                onChange={handleChangeCity}
              >
                {citys.map((value, key) => {
                  if (value.name == "") {
                    return (
                      <Option key={key} value={value.id}>
                        Tất cả
                      </Option>
                    );
                  }
                  return (
                    <Option key={key} value={value.id}>
                      {value.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item name="rank">
              <Select
                placeholder="Chức vụ"
                className="search__input-select"
                onChange={handleChangeRank}
              >
                {ranks.map((value, key) => {
                  if (value.name == "") {
                    return (
                      <Option key={key} value={value.id}>
                        Tất cả
                      </Option>
                    );
                  }
                  return (
                    <Option key={key} value={value.id}>
                      {value.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item name="career">
              <Select
                placeholder="Vị Trí"
                className="search__input-select"
                onChange={handleChangeCareer}
              >
                {careers.map((value, key) => {
                  if (value.name == "") {
                    return (
                      <Option key={key} value={value.id}>
                        Tất cả
                      </Option>
                    );
                  }
                  return (
                    <Option key={key} value={value.id}>
                      {value.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button className="search-btn" type="primary" htmlType="submit">
                <SearchOutlined />
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}
