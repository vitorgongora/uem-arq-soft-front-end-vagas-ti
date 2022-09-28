import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Collapse,
  Space,
  Table,
  Form,
  Input,
  Modal,
  Radio,
} from "antd";
import { CreditCardOutlined, DownloadOutlined } from "@ant-design/icons";
import "../../sass/modal-radio.scss";

const FormaDePagamento = (props) => {
  const [isChangePlanModalOpen, setIsChangePlanModalOpen] = useState(false);
  const [isChangeCardModalOpen, setIsChangeCardModalOpen] = useState(false);
  const [isCancelServiceModalOpen, setIsCancelServiceModalOpen] =
    useState(false);

  const columns = [
    {
      title: "Data de emissão",
      dataIndex: "data",
      key: "data",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space className="table-action-container">
          <Button shape="circle" icon={<DownloadOutlined />} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      data: "30/09/2021 09:42",
    },
    {
      key: "2",
      data: "30/10/2021 16:50",
    },
    {
      key: "3",
      data: "30/11/2021 09:53",
    },
  ];

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Forma de pagamento
        </Typography.Title>
      </Row>
      <Row>
        <Card bordered={false} style={{ width: "100%", marginTop: 12 }}>
          <Card style={{ boxShadow: "none" }}>
            <Row align="middle">
              <Col span={20}>
                <Row></Row>
                <CreditCardOutlined style={{ marginRight: 16 }} />
                •••• •••• •••• 2021
                <Row>Próxima cobraça em 20/Novembro/2021 por R$187,90</Row>
              </Col>
              <Col span={4}>
                <Button
                  type="primary"
                  style={{ width: "100%" }}
                  onClick={(e) => setIsChangePlanModalOpen(true)}
                >
                  Alterar plano
                </Button>
                <Button type="primary" style={{ width: "100%", marginTop: 6 }}>
                  Alterar cartão
                </Button>
                <Button className="ant-btn-danger" style={{ width: "100%", marginTop: 6 }}>
                  Cancelar serviço
                </Button>
              </Col>
            </Row>
          </Card>
          <Collapse accordion style={{ borderRadius: 8, marginTop: 16 }}>
            <Collapse.Panel header="Notas fiscais" key="1">
              <Table columns={columns} dataSource={data} />
            </Collapse.Panel>
          </Collapse>
        </Card>
      </Row>
      <Modal
        title="Alterar plano"
        open={isChangePlanModalOpen}
        onOk={(e) => setIsChangePlanModalOpen(false)}
        okText="Alterar"
        onCancel={(e) => setIsChangePlanModalOpen(false)}
        zIndex={1001}
      >
        <Form
          name="change_plan"
          layout={"vertical"}
          initialValues={{
            nome: "John Brown",
            email: "johnbrown@gmail.com",
            cargo: "rh",
          }}
          onFinish={(e) => {}}
          onFinishFailed={(e) => {}}
          autoComplete="off"
        >
          <Form.Item name="plano">
            <Radio.Group
              onChange={(e) => {}}
              defaultValue="base"
              style={{ width: "100%" }}
              className="plan-radio-group"
            >
              <Space direction="vertical" style={{ width: "100%" }}>
                <Radio.Button className="plan-radio-button" value="base">
                  <div>Plano base</div>
                  <div style={{ marginLeft: "auto" }}>Grátis</div>
                </Radio.Button>
                <Radio.Button className="plan-radio-button" value="startup">
                  <div>Plano startup</div>
                  <div style={{ marginLeft: "auto" }}>R$120</div>
                </Radio.Button>
                <Radio.Button disabled className="plan-radio-button" value="personalizado">
                  <div>Plano personalizado</div>
                  <div style={{ marginLeft: "auto" }}>
                    <a href="#" style={{textDecoration: "underline"}}>Entrar em contato</a>
                  </div>
                </Radio.Button>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FormaDePagamento;
