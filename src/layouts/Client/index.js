import { Skeleton } from "antd";
import "antd/dist/antd.css";
import NProgress from "nprogress";
import React, { Suspense } from "react";
import Container from "react-bootstrap/Container";
import Footer from "./Component/footer";
import Header from "./Component/header";

const LazyLoad = () => {
  const loadingEf = {
    height: "100vh",
  };
  return (
    <Container style={loadingEf}>
      <Skeleton active />
      <Skeleton.Avatar active />
      <Skeleton active />
      <Skeleton.Avatar active />
      <Skeleton active />
    </Container>
  );
};
const LazyLoading = () => {
  React.useEffect(() => {
    NProgress.configure({ easing: "ease", speed: 1500, showSpinner: false });
    NProgress.start();
    return () => {
      NProgress.done();
    };
  });

  return "";
};

function Client(props) {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <div>
            <LazyLoading />
            <LazyLoad />
          </div>
        }
      >
        {props.children}
      </Suspense>
      <Footer />
    </div>
  );
}

export default Client;
