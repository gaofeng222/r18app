import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Space,
  Divider,
  Popconfirm,
  Tag,
  Modal,
  Form,
  Input,
  DatePicker,
  message,
} from "antd";
import { TaskOkContainer, TaskOkHeader, TagBtnLists } from "./style";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  getTaskList,
  getHasDone,
  getNtDone,
  getAllData,
  handleClickChangeDone,
} from "../../store/TaskOkReucer";
import {
  deleteItem,
  handleClickHasDone,
  handleClickNotDone,
} from "../../store/TaskOkReucer";

function TaskOk() {
  const [active, setActive] = useState(0);
  const dataLists = useSelector((state) => state.task.datalists);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [datetime, setDateTime] = useState();

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskList());
  }, []);

  const columns = [
    {
      title: "编号",
      dataIndex: "no",
      key: "no",
      width: 65,
      render: (text, item, index) => {
        console.log("🚀 ~ TaskOk ~ item:", index);
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "任务描述",
      dataIndex: "task",
      key: "task",
      ellipsis: true,
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (text, item) => {
        return (
          <Tag color={item.isDone ? "green" : "red"}>
            {item.isDone ? "已完成" : "未完成"}
          </Tag>
        );
      },
    },
    {
      title: "完成时间",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "操作",
      dataIndex: "",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Popconfirm
              title="提示"
              description="确认要删除该任务吗？"
              okText="确定"
              cancelText="取消"
              onCancel={() => {}}
              onConfirm={() => handleDelete(item)}
            >
              <Button type="primary" danger>
                删除
              </Button>
            </Popconfirm>

            {!item.isDone && (
              <Button type="primary" onClick={() => handleComfirm(item)}>
                完成
              </Button>
            )}
          </Space>
        );
      },
    },
  ];
  const handleDelete = (item) => {
    dispatch(deleteItem(item.key));
  };
  const handleGetNtDone = () => {
    dispatch(getNtDone());
  };
  const handleGetHasDone = () => {
    dispatch(getHasDone());
  };
  const handleGetAll = () => {
    dispatch(getAllData());
  };
  const btnColorLists = [
    { name: "全部", cb: handleGetAll },
    { name: "完成", cb: handleGetHasDone },
    { name: "未完成", cb: handleGetNtDone },
  ];
  const handleComfirm = (item) => {
    dispatch(handleClickChangeDone(item.key));
  };
  const handleAdd = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setIsModalOpen(false);
      const formData = form.getFieldsValue();
      const { title, datetime } = formData;
      const data = {
        task: title,
        isDone: false,
        endTime: datetime.format("YYYY-MM-DD HH:mm:ss"),
      };
      dispatch(add(data));
      message.success("提交成功");
      form.resetFields();
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
    // setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value.trim());
  };
  const handleChangeTime = (date) => {
    console.log(
      "🚀 ~ handleChangeTime ~ date:",
      date.format("YYYY-MM-DD HH:mm:ss")
    );
    const time = date.format("YYYY-MM-DD HH:mm:ss");
    setDateTime(time);
  };
  return (
    <TaskOkContainer className="task-ok">
      <TaskOkHeader>
        <h1>Task Ok任务管理系统</h1>{" "}
        <Button onClick={handleAdd} type="primary">
          新增任务
        </Button>
      </TaskOkHeader>
      <Divider />
      <TagBtnLists>
        <Space>
          {btnColorLists.map((item, index) => {
            return (
              <Tag
                key={item.name}
                color={active === index ? "#108ee9" : ""}
                onClick={() => {
                  setActive(index);
                  item.cb(index);
                }}
              >
                {item.name}
              </Tag>
            );
          })}
        </Space>
      </TagBtnLists>

      <Table
        dataSource={dataLists}
        columns={columns}
        pagination={false}
        loading={loading}
      />
      <Modal
        title="新增任务"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认提交"
        cancelText="取消"
      >
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          form={form}
          initialValues={{ title: "zzzzzzz" }}
          layout="vertical"
        >
          <Form.Item
            name="title"
            required={true}
            label="任务描述"
            rules={[{ required: true, message: "请输入任务名称!" }]}
          >
            <Input.TextArea
              style={{ resize: "none" }}
              value={title}
              onChange={handleChangeTitle}
            />
          </Form.Item>
          <Form.Item
            name="datetime"
            label="完成时间"
            rules={[{ required: true, message: "时间不能为空!" }]}
          >
            <DatePicker
              style={{ width: "220px" }}
              value={datetime}
              onChange={handleChangeTime}
              required
              showTime
            />
          </Form.Item>
        </Form>
      </Modal>
    </TaskOkContainer>
  );
}

export default TaskOk;
