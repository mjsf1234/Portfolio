import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 1.5rem;
  background-color: black;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  flex-direction: row;
  align-items: start;
  align-content: center;
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background-color: black;
  height: 100vh;
`;
export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  color: white;
  // background-color: green;
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
