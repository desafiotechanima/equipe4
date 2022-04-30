import styled from "styled-components";
import {Container, Col, Form} from "react-bootstrap";
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
  gap: 20px;
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
  font-size: 32px;
  margin-left: 20px;
  color: white;
`;

export const Content = styled(Col)`
  display: flex;
  padding: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormLogin = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5D9EEB;
  border: none;
  border-radius: 10px;
  gap: 10px;
  width: 100%;
  padding: 60px 0;
`;

export const TitleForm = styled.h1`
  font-family: arial;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

export const Input = styled.input`
  border:none;
  outline: none;
  border-radius: 5px;
  background-color: white;
  padding: 5px 10px;
  width: 80%;
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
  width: 60%;
  transition: all 0.1s linear;

  &:hover{
    background-color: #555555;
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