import "./index.scss";
import { Form, Button, Row, Input, Col, DatePicker, Select } from "antd";
import { UploadImage } from "../../../../../../helper/uploadImage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInfoCandidateRequest,
  updateInfoCandidateRequest,
} from "../../../../../../redux/actionCreators/candidateActionCreator";
import jwtDecode from "jwt-decode";
import { getAccessToken } from "../../../../../../helper/localStorage";
import moment from "moment";
import { fetchListCareerRequest } from "../../../../../../redux/actionCreators/careerActionCreator";

export default function InforCandidate() {
  const { Option } = Select;

  let token = getAccessToken();
  if (token) {
    var id = jwtDecode(token).sub;
  }

  const infoCandidate = useSelector((state) => state.candidate.infoCandidate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfoCandidateRequest(id));
    dispatch(fetchListCareerRequest());
  }, [dispatch]);

  const onFinish = (value) => {
    const newValue = {
      ...value,
      avatar: value.avatar.fileList[0].thumbUrl,
    };
    dispatch(updateInfoCandidateRequest(infoCandidate.result[0].id, newValue));
  };

  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  useEffect(() => {
    if (infoCandidate.result[0]) {
      setFieldsValue({
        name: infoCandidate.result[0].name
          ? infoCandidate.result[0].name
          : "Đang cập nhật",
      });
      setFieldsValue({
        address: infoCandidate.result[0].address
          ? infoCandidate.result[0].address
          : "Đang cập nhật",
      });
      setFieldsValue({
        phone: infoCandidate.result[0].phone
          ? infoCandidate.result[0].phone
          : "Đang cập nhật",
      });
      setFieldsValue({
        position: infoCandidate.result[0].position
          ? infoCandidate.result[0].position
          : "Đang cập nhật",
      });
      setFieldsValue({
        experience: infoCandidate.result[0].experience
          ? infoCandidate.result[0].experience
          : "Đang cập nhật",
      });
      setFieldsValue({
        birthday: moment(infoCandidate.result[0].birthday)
          ? moment(infoCandidate.result[0].birthday)
          : "Đang cập nhật",
      });
    }
    return setFieldsValue({});
  }, [infoCandidate.result[0]]);

  const career = useSelector((state) => state.career.listCareer);

  return (
    <Form form={form} onFinish={onFinish}>
      <div className="info__employers">
        <h6>Avatar</h6>
        <UploadImage name="avatar" url={infoCandidate.result[0].avatar} />
        <h6>Tên ứng viên</h6>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên ứng viên",
            },
          ]}
        >
          <Input
            className="info__employers-input"
            placeholder="Trần Kim Hoàng"
          />
        </Form.Item>
        <h6>Địa chỉ</h6>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập địa chỉ",
            },
          ]}
        >
          <Input className="info__employers-input" placeholder="Đà Nẵng" />
        </Form.Item>
        <Row>
          <Col span={12}>
            <div>
              <h6>Ngày tháng năm sinh</h6>
              <Form.Item
                name="birthday"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày sinh",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
              <h6>Số điện thoại</h6>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="0347971116"
                />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <h6>Vị trí</h6>
              <Form.Item
                name="position"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập ví trí",
                  },
                ]}
              >
                {/* <Input
                  className="info__employers-input"
                  placeholder="Internship"
                /> */}
                <Select
                  className="info__employers-input-select"
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
                      <Option key={key} value={value.name}>
                        {value.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <h6>Kinh nghiệm </h6>
              <Form.Item
                name="experience"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập kinh nghiệm",
                  },
                ]}
              >
                <Input className="info__employers-input" placeholder="1 năm" />
              </Form.Item>
            </div>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="info__employers-btn"
          >
            Cập nhật
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
