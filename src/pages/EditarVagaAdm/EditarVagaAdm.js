import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Form,
  Checkbox,
  Input,
  Divider,
  InputNumber,
  DatePicker,
  Modal,
} from "antd";
import { useLocation} from 'react-router-dom';
import { ArrowLeftOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const EditarVagaAdm = (props) => {
  let location = useLocation();
  let pageName = location.pathname.split("/")[3];
  pageName = pageName.replace(/%20/g, " ");


  const [isModalOpenReject, setIsModalOpenReject] = useState(false);
  const [isModalOpenAccept, setIsModalOpenAccept] = useState(false);

  const showModalReject = () => {
    setIsModalOpenReject(true);
  };
  const handleOkReject = () => {
    setIsModalOpenReject(false);
  };
  const handleCancelReject = () => {
    setIsModalOpenReject(false);
  };

  const showModalAccept = () => {
    setIsModalOpenAccept(true);
  };
  const handleOkAccept = () => {
    setIsModalOpenAccept(false);
  };
  const handleCancelAccept = () => {
    setIsModalOpenAccept(false);
  };


  return (
    <>
      <Row>
        <Button 
          icon={<ArrowLeftOutlined style={{color:"black"}}/>} 
          href="/adm/anunciosvagas" 
          style={{marginRight:"1%"}}
        />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          {pageName}
        </Typography.Title>
      </Row>
      <Row>
        <Card bordered={false} style={{ width: "100%", marginTop: 12 }}>
          <Typography.Text strong style={{marginRight:"2%"}}>Anúncio da vaga</Typography.Text>
          <Typography.Text style={{marginRight:"2%"}}>Etapas de contratação</Typography.Text>
          <Typography.Text style={{marginRight:"2%"}}>Template de aviso</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Form
            name="basic"
            layout={"vertical"}
            initialValues={{ remember: true }}
            onFinish={{}}
            onFinishFailed={{}}
            autoComplete="off"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Nome da vaga"
                  name="Nome da vaga"
                >
                  <Input defaultValue={pageName}/>
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item
                  label="Vagas Disponíveis"
                  name="Vagas Disponíveis"
                >
                  <InputNumber min={1} max={10} defaultValue={3} style={{width:"75%"}} align="right"/>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Numero máximo de aplicantes"
                  name="Numero máximo de aplicantes"
                >
                  <InputNumber min={1} max={100} defaultValue={50} style={{width:"60%"}}/>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} style={{marginTop:"2%"}}>
              <Col span={12}>
                <Form.Item label="Prazo para receber novas inscrições" name="prazo">
                  <RangePicker style={{width:"100%"}} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="" name="prazoTwo">
                  <Checkbox style={{marginTop:"8%"}}>Deixar anúncio aberto sem prazo</Checkbox>
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16} style={{marginTop:"2%"}}>
              <Col span={24}>
                <Form.Item label="Descrição da vaga" name="descricao">
                  <TextArea rows={5} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} style={{marginTop:"2%"}}>
              <Col span={24}>
                <Form.Item label="Requisitos da vaga" name="requisitos">
                  <TextArea rows={5} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} style={{marginTop:"2%"}}>
              <Col span={24}>
                <Form.Item label="Benefícios da vaga" name="beneficios">
                  <TextArea rows={5} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} style={{marginTop:"2%"}}>
              <Checkbox style={{marginLeft:"1%"}}>CLT</Checkbox>
              <Checkbox >PJ</Checkbox>
              <Checkbox >Vale refeição</Checkbox>
              <Checkbox >Vale alimentação</Checkbox>
              <Checkbox >Vale transporte</Checkbox>
            </Row>

            <Row align="end">
              <Form.Item style={{marginRight:"2%"}}>
                <Button
                  type="primary"
                  htmlType="submit"
                  danger
                  style={{ display: "block", marginLeft: "auto" }}
                  onClick={showModalReject}
                >
                  Reheitar publicação
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ display: "block", marginLeft: "auto" }}
                  onClick={showModalAccept}
                >
                  Aprovar publicação
                </Button>
              </Form.Item>
            </Row>
            
          </Form>
        </Card>
      </Row>

      <Modal 
        title="Rejeitar publicação" 
        open={isModalOpenReject} 
        onOk={handleOkReject} 
        onCancel={handleCancelReject}
        mask={false}
        footer={[
          <Button
            key="link"
            href="/adm/anunciosvagas"
            type="primary"
            onClick={handleOkReject}
          >
            Confirmar
          </Button>,
        ]}
      >
        <p>Motivo da rejeição</p>
        <TextArea rows={5} />
      </Modal>

      <Modal 
        title="Atenção" 
        open={isModalOpenAccept} 
        onOk={handleOkAccept} 
        onCancel={handleCancelAccept} 
        mask={false}
        footer={[
          <Button
            onClick={handleCancelAccept}
          >
            Cancelar
          </Button>,
          <Button
            key="link"
            href="/adm/anunciosvagas"
            type="primary"
            onClick={handleOkAccept}
          >
            Confirmar
          </Button>
        ]}
      >
        <p>Você tem certeza que deseja aprovar a publicação dessa vaga?</p>
      </Modal>
      
    </>
  );
};

export default EditarVagaAdm;