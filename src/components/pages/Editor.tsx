import React from "react";
import styled from "styled-components";
import html from "sources/html";

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IframeWrap = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid #ddd;
  background-color: #fff;
`;

const Editor: React.FC = () => {
  return (
    <Container>
      <IframeWrap>
        <iframe
          title="iframe"
          id="iframe"
          srcDoc={html}
          width="100%"
          height="100%"
        />
      </IframeWrap>
    </Container>
  );
};

export default Editor;
