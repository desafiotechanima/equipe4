import styled from "styled-components";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Background = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
  max-width: 0;
  margin: 0;
  padding-top: 60px;
`;

export const NavBar = styled(Col)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #5D9EEB;
  color: white;
  z-index: 11;
`;

export const Title = styled.h1`
  font-family: arial;
  font-weight: bold;
  font-size: 30px;
  margin-left: 40px;
`;

export const Content = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Item = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 200px;
background-color: #5D9EEB;
color: white;
border-radius: 5px;
margin: 10px 0;
transition: all 0.1s linear;

&:hover{
  cursor: pointer;
  transform: scale(1.1);
  background-color: #83b6f2;
  color: white;
}
`;

export const LinkPage = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 100%;
  height: 100%;

  &:hover{
    color: white;
  }
`;

export const CardTitle = styled.h1`
  font-size: 20px;
  font-family: bahnschrift;
  font-weight: bold;
  margin: 0 20px;
`;

export const FormLogin = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5D9EEB;
  border: none;
  border-radius: 10px;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 10px;
`;

export const TitleForm = styled.h1`
  font-family: arial;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

export const Input = styled.input`
  border:none;
  background: transparent;
  outline: none;
  border-radius: 5px;
  background-color: white;
  padding: 5px 10px;;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-family: arial;
  font-weight: bold;
  padding: 5px 30px;
  margin-top: 40px;
`;