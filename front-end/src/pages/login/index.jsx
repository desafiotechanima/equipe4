import React, { useState } from 'react';
import { Background, Content, FormLogin, Input, TitleForm, Button, Title, NavBar, LinkPage } from './styled';

function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background>
      <NavBar sm={12} xs={12}>
        <Title>
          Anima Kids
        </Title>
      </NavBar>
      <Content sm={4} xs={12}>
        <FormLogin
        >
          <TitleForm>
            Entrar
          </TitleForm>
          <Input type="text" placeholder="Digite o seu email" onChange={(e) => setUsername(e.target.value)}/>
          <Input type="password" placeholder="Digite o seu password" onChange={(e) => setPassword(e.target.value)}/>
          <Button>
            <LinkPage
              to={"/menu"}
              replace
              reloadDocument
            >
              Acessar
            </LinkPage>
          </Button>
        </FormLogin>
      </Content>
    </Background>
  );
}

export default Login;