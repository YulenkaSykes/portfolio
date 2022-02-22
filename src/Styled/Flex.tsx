import styled from "styled-components";

const Flex = styled.div<any>`
display: flex;
align-items: ${(props: any) => props.alignItems || "center"};
justify-content: ${(props: any) => props.justifyContent || "center"};
`

export const Row = styled(Flex)`

`;
export const Col = styled(Flex)`
flex-direction: column;
`;

