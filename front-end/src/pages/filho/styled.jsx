import styled from "styled-components";
import { Container, Row, Col, Modal } from "react-bootstrap";
import YouTube from "react-youtube";

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
  width: 100%;
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

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #5D9EEB;
  color: white;
  font-family: arial;
  font-weight: bold;
  width: 100px;
  height: 100px;
`;

export const Confirmation = styled(Modal)``;

export const YouTubePlayer = styled(YouTube)`
`;