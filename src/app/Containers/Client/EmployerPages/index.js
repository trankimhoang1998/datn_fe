import React from "react";
import Employer from "./component/ListEmployer/employer";
import Search from "./component/Search";
import { useState } from "react";
import { HandleChangeTitle } from "../../../../helper/handleTitle";

export default function EmployerPages() {
  const [formState, setFormState] = useState({
    company: "",
  });
  const [current, setCurrent] = useState(1);
  const handleCurrent = (val) => {
    setCurrent(val);
  };
  const handleSubmit = (data) => {
    setFormState((formState) => ({
      company: data.company,
    }));
  };

  return (
    <div>
      <HandleChangeTitle title="Nhà tuyển dụng" />
      <Search handleCurrent={handleCurrent} handleSubmit={handleSubmit} />
      <Employer
        current={current}
        handleCurrent={handleCurrent}
        formState={formState}
      />
    </div>
  );
}
