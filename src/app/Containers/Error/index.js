import React from "react";
import { Result, Button } from "antd";
import history from "../../../helper/history";

function Error(props) {
  const handleBackHome = () => {
    history.push("/");
  };
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang này không tồn tại"
        extra={
          <Button onClick={handleBackHome} type="primary">
            Trở về Trang chủ
          </Button>
        }
      />
    </div>
  );
}

export default Error;
