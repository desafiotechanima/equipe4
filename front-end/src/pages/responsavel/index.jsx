import React, { useState } from 'react';
import { Background, NavBar, Content, Input, Button, Title, Log } from './styled';
import api from "../../services/api";

function Responsavel(props) {

  const [log, setLog] = useState([
  ]);

  setInterval(() => {
    api.get("/search", {}).then((e) => {
      setLog(e.data);
    });
  }, 5000);

  return (
    <Background>
      <NavBar sm={12} xs={12}>
        <Title>
          Anima Kids
        </Title>
      </NavBar>
      <Content>
        <Input type="text" placeholder="Adicionar playlist"/>
        <Button>
          Adicionar
        </Button>
        <Log sm={12} xs={12}>
          {
            log.map((v, i) => {
              // console.log(JSON.parse(v));
              return (
                <div key={i}>
                  [{(new Date()).getDay()+"/"+(new Date()).getMonth()+"/"+(new Date()).getFullYear()+" - "+(new Date()).getHours()+":"+(new Date()).getMinutes()}]
                  <b>Titulo</b>{": "+JSON.parse(v)?.title+", "}
                  <b>Estado</b>{": "+JSON.parse(v)?.state}
                </div>
              );
            })
          }
        </Log>
      </Content>
    </Background>
  );
}

export default Responsavel;