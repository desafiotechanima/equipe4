import React from 'react';
import { Background, NavBar, Content, Item, LinkPage, CardTitle, Title } from './styled';

function Menu(props) {
  return (
    <Background>
      <NavBar sm={12} xs={12}>
        <Title>
          Anima Kids
        </Title>
      </NavBar>
      <Content>
        <Item sm={3} xs={10}>
          <LinkPage
            to={"/responsavel"}
            replace
            reloadDocument
          >
            <CardTitle>
              Responsavel
            </CardTitle>
          </LinkPage>
        </Item>
        <Item sm={3} xs={10}>
          <LinkPage
            to={"/filho"}
            replace
            reloadDocument
          >
            <CardTitle>
              Filho
            </CardTitle>
          </LinkPage>
        </Item>
      </Content>
    </Background>
  );
}

export default Menu;