import React from "react";
import { Row, Col, Typography, Card, Table, Radio, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import CircleStat from "../../components/CircleStat/CircleStat";
import FilterButtonsContainer from "../../components/FilterButtonsContainer/FilterButtonsContainer";

const AdmDashboard = (props) => {
  const columns = [
    {
      title: "Empresa",
      dataIndex: "empresa",
      key: "empresa",
      render: (text) => <>{text}</>,
    },
    {
      title: "Funcionarios",
      dataIndex: "funcionarios",
      key: "funcionarios",
    },
    {
      title: "CNPJ",
      dataIndex: "cnpj",
      key: "cnpj",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Plano",
      dataIndex: "plano",
      key: "plano",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Button shape="circle" icon={<CloseCircleOutlined />} />
      ),
    },
  ];
  const data = [
    {
      key: "1",
      empresa: "Facebook",
      funcionarios: "68.743",
      cnpj: "12.345.678/0001-00",
      email: "fb_inc@fb.com",
      plano: "Personalizado",
    },
    {
      key: "2",
      empresa: "Microsoft",
      funcionarios: "132.547",
      cnpj: "75.436.715/0001-03",
      email: "microsoft@outlook.com",
      plano: "Personalizado",
    },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <Typography.Title level={2} style={{ marginBottom: 0 }}>
            Bem-vindo CEO João! 👋
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: 32 }}>
            Confira uma visualização geral de todos os usuários do Vagas TI 
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card bordered={false} className="circle-stat-card">
            <CircleStat
              value={587}
              color={"red"}
              description={"Total de Processos seletivos realizados"}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card bordered={false} className="circle-stat-card">
            <CircleStat
              value={20}
              color={"orange"}
              description={"Total de Desenvolvedores Cadastrados"}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card bordered={false} className="circle-stat-card">
            <CircleStat
              value={2}
              color={"green"}
              description={"Total de Empresas Cadastradas"}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Typography.Title level={3} style={{ marginTop: 32, marginBottom: 0 }}>
          Informações Gerais
        </Typography.Title>
      </Row>
      <Row>
        <FilterButtonsContainer>
          <Radio.Group value={"empresas"}>
            <Radio.Button value="empresas">Empresas</Radio.Button>
            <Radio.Button value="devs">Desenvolvedores</Radio.Button>
          </Radio.Group>
        </FilterButtonsContainer>
      </Row>
      <Row>
        <Card
          className="card-table-container"
          bordered={false}
          style={{ width: "100%", marginTop: 12 }}
        >
          <Table columns={columns} dataSource={data} />
        </Card>
      </Row>
    </>
  );
};

export default AdmDashboard;
