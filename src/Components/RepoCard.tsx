import moment from "moment";
import React, { FC } from "react";
import styled from "styled-components";
import { IRepo } from "../interfaces";
import { Col, Row } from "../Styled/Flex";

interface Props {
  repo: IRepo;
  img?: string;
}

const CardWrapper = styled(Col)`
  background: linear-gradient(
    90deg,
    rgba(150, 145, 145, 0.7),
    rgba(0, 0, 0, 0) 70%
  );
  transition: 0.3s all;
  border-radius: 20px;

  & button {
    border-radius: 20px;
    color: black;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
      transform: scale(1.1);
    }
  }

  /* & :hover {
    transform: rotateZ(30deg);
  } */
`;

const RepoCard: FC<Props> = ({ repo, img }) => {
  const { name, created_at, html_url, description } = repo;
  return (
    <CardWrapper w="100%" p="10px" m="10px">
      <Row w="100%" m="10px" justifyContent="space-between">
        <h2>{name}</h2>
        <span>{moment(created_at).format("DD.MM.YYYY")}</span>
      </Row>
      <Col w="100%">
        <p>{description}</p>
      </Col>
      {img && <img src={img} alt={name} />}
      <Row
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
        m="10px 0 0 0">
        <button onClick={() => (window.location.href = html_url)}>
          View repo
        </button>
      </Row>
    </CardWrapper>
  );
};

export default RepoCard;
