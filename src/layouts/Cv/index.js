import React, { Suspense } from "react";
import "antd/dist/antd.css";
import { Skeleton } from "antd";
import Header from "../Client/Component/header";
import { HandleChangeTitle } from "../../helper/handleTitle";

function Cv(props) {
  return (
    <div>
      <HandleChangeTitle title="Tạo CV" />
      <Header />
      <Suspense fallback={<Skeleton active />}>{props.children}</Suspense>
    </div>
  );
}

export default Cv;
