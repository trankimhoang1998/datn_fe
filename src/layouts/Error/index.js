import React, { Suspense } from "react";
import "antd/dist/antd.css";
import { Skeleton } from "antd";

function Error(props) {
  return (
    <div>
      <Suspense fallback={<Skeleton active />}>{props.children}</Suspense>
    </div>
  );
}

export default Error;
