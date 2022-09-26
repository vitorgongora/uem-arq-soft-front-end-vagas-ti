import React from "react";
import { Row, Col, Typography, Card, Button, Collapse, Space, Table } from "antd";
import { CreditCardOutlined, DownloadOutlined } from "@ant-design/icons";

const FormaDePagamento = (props) => {
  const columns = [
    {
      title: "Data de emissão",
      dataIndex: "data",
      key: "data"
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
                <Button type="primary" style={{ width: "100%" }}>
                  Alterar plano
                </Button>
                <Button type="primary" style={{ width: "100%", marginTop: 6 }}>
                  Alterar cartão
                </Button>
                <Button type="danger" style={{ width: "100%", marginTop: 6 }}>
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
    </>
  );
};

export default FormaDePagamento;
