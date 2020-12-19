import { Button, Col, DatePicker, Form, Input, Row, Select,InputNumber } from "antd";
import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UploadImage } from "../../../../../../helper/uploadImage";
import { fetchListCareerRequest } from "../../../../../../redux/actionCreators/careerActionCreator";
import { fetchListCityRequest } from "../../../../../../redux/actionCreators/cityActionCreator";
import { fetchListRankRequest } from "../../../../../../redux/actionCreators/rankActionCreator";
import {
  getInfoEditRecruitmentRequest,
  updateRecruitmentRequest,
} from "../../../../../../redux/actionCreators/recruitmentActionCreator";
import { fetchListSalaryRequest } from "../../../../../../redux/actionCreators/salaryActionCreator";
import { fetchListTypeofworkRequest } from "../../../../../../redux/actionCreators/typeofworkActionCreator";
import "./index.scss";
import moment from "moment";

export default function EditJob() {
  const id = useParams().id;

  const { Option } = Select;
  const { TextArea } = Input;

  const city = useSelector((state) => state.city.listCity);
  const rank = useSelector((state) => state.rank.listRank);
  const career = useSelector((state) => state.career.listCareer);
  const salary = useSelector((state) => state.salary.listSalary);
  const typeofwork = useSelector((state) => state.typeofwork.listTypeofwork);
  const infoEdit = useSelector(
    (state) => state.recruitment.infoEditRecruitment
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListCityRequest());
    dispatch(fetchListRankRequest());
    dispatch(fetchListCareerRequest());
    dispatch(fetchListSalaryRequest());
    dispatch(fetchListTypeofworkRequest());
    dispatch(getInfoEditRecruitmentRequest(id));
  }, [dispatch]);

  const onFinish = (value) => {
    const newValue = {
      ...value,
      photo: value.photo.fileList[0].thumbUrl,
    };
    dispatch(updateRecruitmentRequest(newValue.id, newValue));
  };

  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  useEffect(() => {
    if (infoEdit.result[0]) {
      setFieldsValue({ id: infoEdit.result[0].id });
      setFieldsValue({ vacancy: infoEdit.result[0].vacancy });
      setFieldsValue({ quantity: infoEdit.result[0].quantity });
      setFieldsValue({ rank_id: infoEdit.result[0].rank_id });
      setFieldsValue({ city_id: infoEdit.result[0].city_id });
      setFieldsValue({ type_of_work_id: infoEdit.result[0].type_of_work_id });
      setFieldsValue({ career_id: infoEdit.result[0].career_id });
      setFieldsValue({ salary_id: infoEdit.result[0].salary_id });
      setFieldsValue({ end_date: moment(infoEdit.result[0].end_date) });
      setFieldsValue({ description: infoEdit.result[0].description });
      setFieldsValue({ entitlements: infoEdit.result[0].entitlements });
      setFieldsValue({ job_requirements: infoEdit.result[0].job_requirements });
      setFieldsValue({
        requested_documents: infoEdit.result[0].requested_documents,
      });
    }
    return setFieldsValue({});
  }, [infoEdit.result[0]]);

  return (
    <Container>
      <div className="addJob__title">
        <h2>Sửa tin tuyển dụng</h2>
      </div>
      <div className="addJob__form">
        <div className="addJob__form-dep">
          <h4>Bạn vui lòng hoàn thiện các thông tin dưới đây</h4>
          <p>(*) Các thông tin bắt buộc</p>
        </div>
        <Form form={form} onFinish={onFinish}>
          <Row>
            <Col span={24}>
              <h6>Ảnh Job (*)</h6>
              <UploadImage name="photo" url={infoEdit.result[0].photo} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="id" style={{ display: "none" }}>
                <Input className="addJob__form-input" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Tiêu đề tin tuyển dụng (*)</h6>
              <Form.Item
                name="vacancy"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tiêu đề cho tin tuyển dụng",
                  },
                ]}
              >
                <Input className="addJob__form-input" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Số lượng (*)</h6>
              <Form.Item
                name="quantity"
                rules={[
                  {
                    type: 'number',
                    message: 'Vui lòng chỉ nhập số',
                  },
                  {
                    required: true,
                    message: 'Vui lòng nhập số lượng người cần tuyển',
                  },
                ]}
              >
                <InputNumber min={1} className="addJob__form-input" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div>
                <h6>Chức vụ (*)</h6>
                <Form.Item
                  name="rank_id"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn",
                    },
                  ]}
                >
                  <Select
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {rank.result.map((value, key) => {
                      return (
                        <Option key={key} value={value.id}>
                          {value.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <h6>Địa điểm (*)</h6>
                <Form.Item
                  name="city_id"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn",
                    },
                  ]}
                >
                  <Select
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {city.result.map((value, key) => {
                      return (
                        <Option key={key} value={value.id}>
                          {value.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <h6>Hình thức làm việc (*)</h6>
                <Form.Item
                  name="type_of_work_id"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn",
                    },
                  ]}
                >
                  <Select
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {typeofwork.result.map((value, key) => {
                      return (
                        <Option key={key} value={value.id}>
                          {value.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
            </Col>

            <Col span={12}>
              <div>
                <h6>Vị trí (*)</h6>
                <Form.Item
                  name="career_id"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn",
                    },
                  ]}
                >
                  <Select
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {career.result.map((value, key) => {
                      return (
                        <Option key={key} value={value.id}>
                          {value.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <h6>Mức lương (*)</h6>
                <Form.Item
                  name="salary_id"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn",
                    },
                  ]}
                >
                  <Select
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {salary.result.map((value, key) => {
                      return (
                        <Option key={key} value={value.id}>
                          {value.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <h6>Hạn nộp hồ sơ (*)</h6>
                <Form.Item
                  name="end_date"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn hạn nộp hồ sơ",
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Mô tả công việc (*)</h6>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền mô tả công việc",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Quyền lợi được hưởng (*)</h6>
              <Form.Item
                name="entitlements"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền quyền lợi thừa hưởng",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Yêu cầu công việc (*)</h6>
              <Form.Item
                name="job_requirements"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền yêu cầu công việc",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Yêu cầu hồ sơ (*)</h6>
              <Form.Item
                name="requested_documents"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền yêu cầu hồ sơ",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Button className="addJob__form-btn" type="primary" htmlType="submit">
            Sửa tin
          </Button>
        </Form>
      </div>
    </Container>
  );
}
