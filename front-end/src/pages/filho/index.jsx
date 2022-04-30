import React, { useState, useEffect } from 'react';
import { Background, NavBar, Content, Button, Title, Confirmation, YouTubePlayer } from './styled';
import api from "../../services/api";

function Filho() {

  const [player, setPlayer] = useState({});
  const [isPlayWarning, setIsPlayWarning] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setIsPlayWarning(false);
  }, []);

  useEffect(() => {
    if(isPlayWarning)
      setTimeout(() => {
        setShowConfirmation(true);
        setIsPlayWarning(false);
      }, 30000);
  }, [isPlayWarning]);

  function onPlay(e){
    setPlayer(e);
    if(!isPlayWarning)
      e.target.removeCueRange();
      setIsPlayWarning(true);
    const message = {
      title: e.target.playerInfo.videoData.title,
      state: "play"
    };
    api.post("/search", {
      text: JSON.stringify(message)
    });
  }

  function onPause(e){
    setPlayer(e);
    const message = {
      title: e.target.playerInfo.videoData.title,
      state: "pause"
    };
    api.post("/search", {
      text: JSON.stringify(message)
    });
  }

  return (
    <Background>
      <NavBar sm={12} xs={12}>
        <Title>
          Anima Kids
        </Title>
      </NavBar>
      <Content sm={12} xs={12}>
        <YouTubePlayer
          videoId="2g811Eo7K8U"
          onPause={onPause}
          onPlay={onPlay}
        />
      </Content>
      <Confirmation
        show={showConfirmation}
        size="sm"
        centered
      >
        <Confirmation.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            onClick={() => {
              setShowConfirmation(false);
              setIsPlayWarning(true);
              const message = {
                title: player.target.playerInfo.videoData.title,
                state: "confirmation"
              };
              console.log(message)
              api.post("/search", {
                text: JSON.stringify(message)
              });
            }}
          >OK</Button>
        </Confirmation.Body>
      </Confirmation>
    </Background>
  );
}

export default Filho;