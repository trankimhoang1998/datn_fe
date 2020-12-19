import { Input, Tooltip } from "antd";
import Form from "antd/lib/form/Form";
import React from "react";
import Division from "./Division";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import {
  CalendarOutlined,
  FormOutlined,
  BarsOutlined,
  WindowsOutlined,
  CommentOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
export default function Knowledge(props) {
  const {
    dataItem,
    index,
    handleAddDivision,
    handleRemoveDivision,
    handleHidden,
    onHandleChange,
  } = props;

  const handleInsert = (data) => {
    handleAddDivision(index, data);
  };

  const handleRemove = (data) => {
    handleRemoveDivision(index, data);
  };

  const handleMinusKnow = () => {
    handleHidden(index);
  };

  const renderDivsion = () => {
    let jsx = [];
    jsx = dataItem.divisions.map((division, index) => {
      return (
        <Division
          key={index}
          dataDivison={division}
          handleInsert={handleInsert}
          handleRemove={handleRemove}
          onHandleChange={(data) => onHandleChange(index, data)}
          index={index}
        />
      );
    });
    return jsx;
  };

  const icons = () => {
    if (dataItem.icon == "<WindowsOutlined />") return <WindowsOutlined />;
    if (dataItem.icon == "<CalendarOutlined />") return <CalendarOutlined />;
    if (dataItem.icon == "<FormOutlined />") return <FormOutlined />;
    if (dataItem.icon == "<BarsOutlined />") return <BarsOutlined />;
    if (dataItem.icon == "<CommentOutlined />") return <CommentOutlined />;
    if (dataItem.icon == "<FileDoneOutlined />") return <FileDoneOutlined />;
  };
  return (
    <>
      <div className="knowledge">
        <div className="knowledge__title">
          <span className="knowledge__title-icon">{icons()}</span>
          <Input
            className="knowledge__title-head"
            defaultValue={dataItem.title}
          />
        </div>
        {renderDivsion()}
        <Tooltip className="tooltip-custom" title="Xóa">
          <Button
            className="button-control-remove"
            icon={<DeleteOutlined />}
            onClick={handleMinusKnow}
          />
        </Tooltip>
      </div>
    </>
  );
}
