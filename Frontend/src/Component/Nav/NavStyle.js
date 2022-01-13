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

