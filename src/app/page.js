"use client";
import LearningTable from "@/components/LearningTable";
import Progress from "@/components/Progress";
import {
  CrownOutlined,
  FileProtectOutlined,
  HddOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Flex, Rate, Row, Space, Typography } from "antd";
const { Title } = Typography;

export default function Home() {
  return (
    <Row gutter={16}>
      <Col span={17}>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-red-200">
                  <CrownOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    24
                  </Title>
                  <Typography>Enrolled Courses</Typography>
                </div>
              </Flex>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-green-200">
                  <HddOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    56
                  </Title>
                  <Typography>Lessons</Typography>
                </div>
              </Flex>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-yellow-200">
                  <FileProtectOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    17
                  </Title>
                  <Typography>Certificates</Typography>
                </div>
              </Flex>
            </Card>
          </Col>
        </Row>
        <LearningTable />
      </Col>
      <Col span={7}>
        <Progress />
        <Title level={5} className="mt-5">
          Popular Courses
        </Title>
        <Space direction="vertical" className="w-full">
          <Card>
            <Title level={5}>Python Basics</Title>
            <Rate disabled defaultValue={2} />
          </Card>
          <Card>
            <Title level={5}>Next JS Crash Course</Title>
            <Rate disabled defaultValue={4} />
          </Card>
        </Space>
      </Col>
    </Row>
  );
}
