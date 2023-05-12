import React from "react";
import styled, { css } from "styled-components";

const ContentBtnOne = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;

const one = css`
  box-shadow: 1px 1px 5px 1px black;
`;
const two = css`
  border: none;
`;
const ContentBtnTwo = styled(ContentBtnOne)`
  color: black;
  border-radius: 5px;
  border: none;
  ${one}
  ${two}
`;
const ContentBtnThree = styled(ContentBtnOne)`
  background-color: lime;
  border-radius: 50px;
  ${one}
  ${two}
`;

export { ContentBtnOne, ContentBtnTwo, ContentBtnThree };
