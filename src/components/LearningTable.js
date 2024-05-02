import { Space, Table, Tag } from "antd";
import React from "react";

function LearningTable() {
  const columns = [
    {
      title: "Course name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, text) => (
        <Tag color={text.status === "completed" ? "green" : "blue"}>
          {text.status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>View</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      id: "1",
      courseName: "Design Accessibility",
      duration: "5 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "2",
      courseName: "UX Research",
      duration: "6 hours",
      level: "Intermediate",
      status: "in progress",
    },
    {
      id: "3",
      courseName: "Figma for Beginners",
      duration: "9 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "4",
      courseName: "HTML & CSS",
      duration: "9 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "5",
      courseName: "Java for Beginners",
      duration: "9 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "5",
      courseName: "Next JS ",
      duration: "9 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "5",
      courseName: "Design Patterns ",
      duration: "9 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "5",
      courseName: "Machine Learning Concepts ",
      duration: "9 hours",
      level: "Advanced",
      status: "completed",
    },
  ];
  return <Table className="mt-4" columns={columns} dataSource={data} />;
}

export default LearningTable;
