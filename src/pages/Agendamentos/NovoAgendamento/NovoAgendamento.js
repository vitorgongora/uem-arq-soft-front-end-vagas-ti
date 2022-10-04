import React from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Table,
  Radio,
  Button,
  Space,
  Tabs,
  Form,
  Select,
  Checkbox,
  Divider,
  Skeleton,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CircleStat from "../../../components/CircleStat/CircleStat";
import FilterButtonsContainer from "../../../components/FilterButtonsContainer/FilterButtonsContainer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../../sass/tab.scss";
import RichTextInput from "components/layout/RichTextInput/RichTextInput";

const NovoAgendamento = (props) => {
  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (text) => <>{text}</>,
    },
    {
      title: "Vaga",
      dataIndex: "vaga",
      key: "vaga",
    },
    {
      title: "Etapa",
      dataIndex: "etapa",
      key: "etapa",
    },
    {
      title: "Score atual",
      dataIndex: "score_atual",
      key: "score_atual",
    },
    {
      title: "Horário agendado",
      dataIndex: "horario_agendado",
      key: "horario_agendado",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space className="table-action-container">
          <Button shape="circle" icon={<InfoCircleOutlined />} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      nome: "John Brown",
      vaga: "Desenvolvedor React",
      etapa: "Atividade em grupo",
      score_atual: "70/100",
      horario_agendado: "30/10/2021 09:42",
    },
    {
      key: "2",
      nome: "Roberto da Silva",
      vaga: "Desenvolvedor Angular",
      etapa: "Teste de programação",
      score_atual: "35/100",
      horario_agendado: "05/11/2021 16:50",
    },
    {
      key: "3",
      nome: "Jefferson M.",
      vaga: "Desenvolvedor Back-end",
      etapa: "Entrevista presencial",
      score_atual: "67/100",
      horario_agendado: "27/11/2021 09:53",
    },
    {
      key: "4",
      nome: "Silvia P.",
      vaga: "Desenvolvedor Back-end Java",
      etapa: "Entrevista remota",
      score_atual: "21/100",
      horario_agendado: "04/11/2021 15:30",
    },
  ];

  return (
    <>
      <Row>
        <Button
          className="back-button-nav"
          icon={<ArrowLeftOutlined style={{ color: "black" }} />}
          href="/rh/agendamentos"
          style={{ marginRight: "1%" }}
        />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Novo agendamento
        </Typography.Title>
      </Row>
      <Row>
        <Card
          className="card-with-tabs"
          bordered={false}
          style={{ width: "100%", marginTop: 12 }}
        >
          <Form
            name="novo_agendamento"
            layout={"vertical"}
            onFinish={(e) => {}}
            onFinishFailed={(e) => {}}
            autoComplete="off"
          >
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Criar agendamento manualmente" key="1">
                <Row wrap gutter={24}>
                  <Col span={12}>
                    <Form.Item label="Vaga" name="vaga">
                      <Select
                        placeholder="Selecione a vaga"
                        style={{ width: "100%" }}
                      >
                        <Select.Option value="dev_back">
                          Desenvolvedor back-end
                        </Select.Option>
                        <Select.Option value="dev_front">
                          Desenvolvedor front-end
                        </Select.Option>
                      </Select>
                    </Form.Item>
                    <div>
                      <div style={{ marginBottom: 8 }}>
                        Etapa do agendamento
                      </div>
                      Entrevista com RH
                    </div>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Aplicante" name="aplicante">
                      <Select
                        placeholder="Selecione o aplicante"
                        style={{ width: "100%" }}
                      >
                        <Select.Option value="joao">João</Select.Option>
                        <Select.Option value="maria">Maria</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Avisar por" name="avisar_por">
                      <Checkbox.Group style={{ width: "100%" }}>
                        <Checkbox value="email">E-mail</Checkbox>
                        <Checkbox value="sms">SMS</Checkbox>
                      </Checkbox.Group>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24} wrap style={{ marginTop: "16px" }}>
                  <Col span={24}>
                    <Typography.Text strong>
                      Visão geral do aplicante
                    </Typography.Text>
                    <Divider style={{ marginTop: "6px" }} />
                    <Skeleton avatar title={false} paragraph={{ rows: 3 }} />
                  </Col>
                  <Col span={24}>
                    <Typography.Text>Formação</Typography.Text>
                    <Divider style={{ marginTop: "6px" }} />
                    <Skeleton title={false} paragraph={{ rows: 2 }} />
                  </Col>
                  <Col span={24}>
                    <Typography.Text>Links</Typography.Text>
                    <Divider style={{ marginTop: "6px" }} />
                    <Skeleton title={false} paragraph={{ rows: 2 }} />
                  </Col>
                </Row>
              </Tabs.TabPane>
              <Tabs.TabPane style={{marginBottom: 16}} tab="Template de aviso" key="2">
                <RichTextInput />
              </Tabs.TabPane>
            </Tabs>
            <Button
              type="primary"
              htmlType="submit"
              style={{ display: "block", marginLeft: "auto" }}
            >
              Agendar
            </Button>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default NovoAgendamento;
