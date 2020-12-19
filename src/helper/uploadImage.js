import React from "react";
import { Form, Upload } from "antd";

export const UploadImage = (props) => {
  const { name, url } = props;

  const [fileList, setFileList] = React.useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: url
        ? url
        : "https://ramenparados.com/wp-content/uploads/2019/03/no-avatar-png-8.png",
      thumbUrl: url
        ? url
        : "https://ramenparados.com/wp-content/uploads/2019/03/no-avatar-png-8.png",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <Form.Item name={name}>
      <Upload
        className="upload-img"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && "+ Upload"}
      </Upload>
    </Form.Item>
  );
};
