import React, { useState } from "react";
import { HandleChangeTitle } from "../../../../helper/handleTitle";
import ListCandidates from "./component/ListCandidates/ListCandidates";
import Search from "./component/Search";

export default function CandidatePages() {
  const [formState, setFormState] = useState({
    name: "",
    position:""
  });
  const [current, setCurrent] = useState(1);
  const handleCurrent = (val) => {
    setCurrent(val);
  };
  const handleSubmit = (data) => {
    setFormState((formState) => ({
      name: data.name,
      position: data.position,
    }));
  };

  return (
    <>
      <HandleChangeTitle title="Ứng viên" />
      <Search handleCurrent={handleCurrent} handleSubmit={handleSubmit} />
      <ListCandidates
        current={current}
        handleCurrent={handleCurrent}
        formState={formState}
      />
    </>
  );
}
