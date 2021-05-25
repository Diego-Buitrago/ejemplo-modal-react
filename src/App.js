import React, {createRef, useState} from 'react'
import {Modal, Button, Form, Input} from 'antd'

function App() {

  const [modal, setModal] = useState(false)
  const [futbolista,  setFutbolisata] = useState({
    nombre: '',
    edad: '',
    posicion,
    club
  })

  const abrirModal = () => {
    setModal(true);
  }

  const cerrarModal = () => {
    setModal(false);
  }

  const accion = () => {
    alert('Se presiono el ok del modal');
    cerrarModal();
  }

  const handerleChange = (e) =>{
    const {name, value} = e.targe;
    setFutbolisata({...futbolista,
    [name]: value});
  }

  const layout = {
    labelCol:{
      span: 8,
    },
    wrapperCol: {
      span: 5,
    }
  }

  return (
    <div>
      <Button onClick={abrirModal} type="primary">Abrir modal</Button> 
      <Modal
        title="Futbolistas"
        visible={modal}
        onCansel={cerrarModal}
        onOk={accion}
        centered
        footer={[
          <Button onClick={cerrarModal}>Cancelar</Button>,
          <Button onClick={accion}>Enviar</Button>
        ]}
      >
        <Form {...layout}>
          <Item label="nombre">
            <Input onChange={handerleChange} name="nombre"></Input>
          </Item>

          <Item label="edad">
            <Input onChange={handerleChange} name="edad"></Input>
          </Item> 

          <Item label="posicion">
            <Input onChange={handerleChange} name="posicion"></Input>
          </Item> 

          <Item label="club">
            <Input onChange={handerleChange} name="club"></Input>
          </Item> 
        </Form>
      </Modal>
    </div>
  );
}

export default App;
