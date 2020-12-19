import { Tabs } from "antd";
import React from "react";
import { HandleChangeTitle } from "../../../../helper/handleTitle";
import SignupCandidate from "./component/signupCandidate";
import SignupEmployer from "./component/signupEmployer";
import "./index.scss";

const { TabPane } = Tabs;
function SignupPage(props) {
  return (
    <>
      <HandleChangeTitle title="Đăng ký" />
      <Tabs className="container" defaultActiveKey="1">
        <TabPane tab="Ứng viên" key="1">
          <SignupCandidate />
        </TabPane>
        <TabPane tab="Nhà Tuyển Dụng" key="2">
          <SignupEmployer />
        </TabPane>
      </Tabs>
    </>
  );
}

export default SignupPage;
