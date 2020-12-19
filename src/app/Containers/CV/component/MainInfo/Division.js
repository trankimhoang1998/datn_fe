import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Rate, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
import React from "react";

export default function Division(props) {
  const {
    dataDivison,
    handleInsert,
    index,
    handleRemove,
    onHandleChange,
  } = props;

  const handleOnInsert = () => {
    handleInsert(index);
  };
  const handleOnRemove = () => {
    handleRemove(index);
  };
  const { RangePicker } = DatePicker;

  return (
    <>
      <div className="division">
        <div className="division__title">
          {dataDivison.description ? (
            <TextArea
              autoSize={true}
              className="division__title-input"
              value={dataDivison.description}
              onChange={(e) => onHandleChange({ description: e.target.value })}
            />
          ) : dataDivison.description === false ? (
            ""
          ) : (
            <TextArea
              autoSize={true}
              className="division__title-input"
              value=""
              onChange={(e) => onHandleChange({ description: e.target.value })}
            />
          )}
          {dataDivison.dateStart ? (
            <RangePicker
              className="data-picker-input"
              picker="month"
              value={[
                moment(dataDivison.dateStart),
                moment(dataDivison.dateEnd),
              ]}
              onChange={(selectedDates) => {
                const dateStart = selectedDates[0].format("YYYY-MM");
                const dateEnd = selectedDates[1].format("YYYY-MM");
                const dateRange = {
                  dateStart,
                  dateEnd,
                };
                onHandleChange(dateRange);
              }}
            />
          ) : (
            ""
          )}
        </div>
        {dataDivison.subdesc ? (
          <div>
            <Input
              className="division__input"
              onChange={(e) => onHandleChange({ subdesc: e.target.value })}
              value={dataDivison.subdesc}
            />
          </div>
        ) : dataDivison.subdesc === false ? (
          ""
        ) : (
          <Input
            className="division__input"
            onChange={(e) => onHandleChange({ subdesc: e.target.value })}
          />
        )}
        {dataDivison.rate ? (
          <>
            <Input
              className="division__input"
              defaultValue={dataDivison.nameSkill}
              onChange={(e) => onHandleChange({ nameSkill: e.target.value })}
            />
            <Rate
              allowHalf
              style={{ margin: "0 10px" }}
              defaultValue={dataDivison.rate}
              onChange={(e) => onHandleChange({ rate: e })}
            />
          </>
        ) : null}
        {dataDivison.detailInfo ? (
          <>
            <Input
              className="division__input"
              defaultValue={dataDivison.detailInfo}
              onChange={(e) => onHandleChange({ detailInfo: e.target.value })}
            />
          </>
        ) : dataDivison.detailInfo === false ? (
          ""
        ) : (
          <>
            <Input
              className="division__input"
              onChange={(e) => onHandleChange({ detailInfo: e.target.value })}
            />
          </>
        )}
        <div className="button-control">
          <Tooltip color="cyan" title="Thêm mục mới">
            <Button
              className="button-control-btn"
              type="primary"
              onClick={handleOnInsert}
              icon={<PlusOutlined />}
            />
          </Tooltip>
          <Tooltip color="orange" title="Xóa danh mục này">
            <Button
              className="button-control-btn"
              type="primary"
              danger
              onClick={handleOnRemove}
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        </div>
      </div>
    </>
  );
}
