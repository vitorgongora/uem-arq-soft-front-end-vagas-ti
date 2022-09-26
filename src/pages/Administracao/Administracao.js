import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Table,
  Radio,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import FilterButtonsContainer from "../../components/FilterButtonsContainer/FilterButtonsContainer";

const Administracao = (props) => {
  const [isNewMemberModalOpen, setIsNewMemberModalOpen] = useState(false);

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "cargo",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space className="table-action-container">
          <Button shape="circle" icon={<EditOutlined />} />
          <Button shape="circle" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      nome: "John Brown",
      cargo: "RH",
    },
    {
      key: "2",
      nome: "Roberto da Silva",
      cargo: "Moderador",
    },
    {
      key: "3",
      nome: "Jefferson M.",
      cargo: "RH",
    },
    {
      key: "4",
      nome: "Silvia P.",
      cargo: "Administrador",
    },
  ];

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Membros da administração
        </Typography.Title>
      </Row>
      <Row align="middle">
        <FilterButtonsContainer>
          <Radio.Group value={"todos"}>
            <Radio.Button value="todos">RH</Radio.Button>
            <Radio.Button value="semana">Moderadores</Radio.Button>
            <Radio.Button value="hoje">Administrador</Radio.Button>
          </Radio.Group>
        </FilterButtonsContainer>
        <div style={{ marginLeft: "auto" }}>5/20 membros</div>
        <Button
          type="primary"
          style={{ marginLeft: "12px" }}
          onClick={(e) => setIsNewMemberModalOpen(true)}
        >
          Novo membro
        </Button>
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
      <Modal
        title="Novo membro"
        open={isNewMemberModalOpen}
        onOk={(e) => setIsNewMemberModalOpen(false)}
        onCancel={(e) => setIsNewMemberModalOpen(false)}
        zIndex={1001}
      >
        <Form
          name="basic"
          layout={"vertical"}
          initialValues={{ remember: true }}
          onFinish={(e) => {}}
          onFinishFailed={(e) => {}}
          autoComplete="off"
        >
          <Form.Item label="Nome completo" name="nome">
            <Input />
          </Form.Item>
          <Form.Item label="E-mail" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Senha" name="senha">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Confirmar senha" name="confirmar_senha">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Cargo" name="cargo">
            <Select placeholder="Selecione o cargo">
              <Select.Option value="rh">RH</Select.Option>
              <Select.Option value="moderador">Moderador</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Administracao;