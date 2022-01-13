import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  background-color: black;
  height: 100vh;
`;
export const SectionTitle = styled.h2`
  font-weight: 800;
  padding-top:5.8rem;
  font-size: 65px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  color: white;

`;

export const LeftSection = styled.div`
  width: 100%;
  // background-color: blue;
`;
export const SectionText = styled.p`
max-width: 600px;
font-size: 24px;
line-height: 40px;
font-weight: 300;
text-align: left;
padding-bottom: 3.6rem;
// background-color: grey;
color: rgba(255, 255, 255, 0.5);
`;
