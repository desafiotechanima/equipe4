import React from 'react';
import { Background, Content, FormLogin, Input, TitleForm, Button, Title } from './styled';

function Login(props) {
  return (
    <Background>
      <Title>
        Anima Kids
      </Title>
      <Content sm={10} xs={12}>
        <FormLogin>
          <TitleForm>
            Entrar
          </TitleForm>
          <Input type="text" placeholder="Digite o seu email"/>
          <Input type="password" placeholder="Digite o seu password"/>
          <Button>
            Acessar
          </Button>
        </FormLogin>
      </Content>
    </Background>
  );
}

export default Login;