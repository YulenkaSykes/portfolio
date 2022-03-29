import styled from "styled-components";

const Element = styled.div<{w?: string, h?:string, m?: string}>`
    width: ${(props) => props.w || "100%"};
    height: ${(props) => props.h || "100%"};
    margin: ${(props) => props.m || "none"};
`;


const Flex = styled(Element)<{alignItems?: string, justifyContent?: string}>`
display: flex;
align-items: ${(props) => props.alignItems || "center"};
justify-content: ${(props) => props.justifyContent || "center"};
`

export const Row = styled(Flex)<{flexWrap?: string }>`
    flex-wrap: ${(props) => props.flexWrap || "none"};
`;
export const Col = styled(Flex)`
flex-direction: column;
`;

