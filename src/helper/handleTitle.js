import React from "react";
import { Helmet } from "react-helmet";

export default function HandleTitle(props) {
  return (
    <Helmet titleTemplate="%s- Jobs" defaultTitle='Jobs'>
    <meta name="description"/>
  </Helmet>
  );
}
export const HandleChangeTitle =(props) =>{
    const {title} =props;
    return(
        <Helmet>
        <title>{title}</title>
        {/* <meta name="description" content="Recruitment" /> */}
      </Helmet>
    )
}
