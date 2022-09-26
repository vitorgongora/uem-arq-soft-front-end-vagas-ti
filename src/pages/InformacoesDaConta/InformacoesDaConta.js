import React from "react";
import { Row, Col, Typography, Card, Button, Form, Input, Divider } from "antd";

const InformacoesDaConta = (props) => {
  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Informações da conta
        </Typography.Title>
      </Row>
      <Row>
        <Card bordered={false} style={{ width: "100%", marginTop: 12 }}>
          <Form
            name="basic"
            layout={"vertical"}
            initialValues={{ remember: true }}
            onFinish={e => {}}
            onFinishFailed={e => {}}
            autoComplete="off"
          >
            <Form.Item
              label="Nome"
              name="nome"
              style={{width: "300px"}}
              rules={
                [
                  //{ required: true, message: "Please input your username!" },
                ]
              }
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              style={{width: "300px"}}
              rules={
                [
                  //{ required: true, message: "Please input your username!" },
                ]
              }
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="CNPJ"
              name="cnpj"
              style={{width: "300px"}}
              rules={
                [
                  //{ required: true, message: "Please input your username!" },
                ]
              }
            >
              <Input />
            </Form.Item>

            <Form.Item label="Senha">
              <Button type="primary">Alterar</Button>
            </Form.Item>

            <Form.Item style={{marginBottom: "0px"}}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ display: "block", marginLeft: "auto" }}
              >
                Salvar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default InformacoesDaConta;
