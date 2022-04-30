import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";

export const Background = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
  max-width: 0;
  margin: 0;
`;

export const Title = styled.h1`
  font-family: arial;
  font-weight: bold;
  font-size: 40px;
  color: black;
  margin-top: 20px;
  margin-bottom: auto;
`;

export const Content = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: 100px;
  margin-bottom: auto;
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