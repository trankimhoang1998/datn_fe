import React from "react";
import ListRecruitment from "./component/ListRecruitment";
import Search from "./component/Search";
import { useState } from "react";
import { HandleChangeTitle } from "../../../../helper/handleTitle";

export default function RecruitmentPages() {

  const [formState, setFormState] = useState({
    vacancy: "",
    city: "",
    rank: "",
    career:""
  });

  const [current, setCurrent] = useState(1);

  const handleCurrent = (val) => {
    setCurrent(val);
  };
  
  const handleSubmit = (data) => {
    setFormState((formState) => ({
      vacancy: data.vacancy,
      city: data.city,
      rank: data.rank,
      career: data.career
    }));
  };

  return (
    <div>
      <HandleChangeTitle title="Việc làm" />
      <Search handleCurrent={handleCurrent} handleSubmit={handleSubmit} />
      <ListRecruitment
        current={current}
        handleCurrent={handleCurrent}
        formState={formState}
      />
    </div>
  );
}
