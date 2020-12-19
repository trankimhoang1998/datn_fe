import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailRecruitmentRequest } from "../../../../../../redux/actionCreators/recruitmentActionCreator";
import Container from "react-bootstrap/Container";

function RecruitmentDetail(props) {
  const id = useParams().id;

  const dispatch = useDispatch();
  const detailRecruitment = useSelector(
    (state) => state.recruitment.detailRecruitment
  );

  useEffect(() => {
    dispatch(getDetailRecruitmentRequest(id));
  }, []);

  const data = detailRecruitment.result[0];

  console.log(data);

  return <Container>RecruitmentDetail</Container>;
}

export default RecruitmentDetail;
