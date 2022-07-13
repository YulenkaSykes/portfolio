import styled from "styled-components";

const Element = styled.div<{ w?: string; h?: string; m?: string; p?: string }>`
  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};
  margin: ${(props) => props.m || "none"};
  padding: ${(props) => props.p || "none"};
`;

const Flex = styled(Element)<{ alignItems?: string; justifyContent?: string }>`
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;

export const Row = styled(Flex)<{ flexWrap?: string }>`
  flex-wrap: ${(props) => props.flexWrap || "none"};
`;
export const Col = styled(Flex)`
  flex-direction: column;
`;
