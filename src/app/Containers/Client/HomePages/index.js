import React from "react";
import Sliders from "./component/slider";
import ListNewJob from "./component/listNewJob";
import ListNewEmployer from "./component/listNewEmployer";
import { HandleChangeTitle } from "../../../../helper/handleTitle";
// import Advertisement from "./component/advertisement";
import Infor from './component/Infor'
function HomePages(props) {
  return (
    <>
      <HandleChangeTitle title="Trang chủ" />
      <Sliders />
      <ListNewJob />
      <ListNewEmployer />
      {/* <Advertisement /> */}
      <Infor/>
    </>
  );
}
export default HomePages;
