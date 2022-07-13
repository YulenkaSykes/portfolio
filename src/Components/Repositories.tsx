import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { IRepo } from "../interfaces";
import { Col, Row } from "../Styled/Flex";
import RepoCard from "./RepoCard";

export default function Repositories() {
  const nickname = "YulenkaSykes";

  const repos = useFetch<IRepo[]>(
    `https://api.github.com/users/${nickname}/repos`
  );
  const { data, error } = repos;

  // useEffect(()=>{

  // },[]);

  const deployedRepos = data?.filter((repo: IRepo) => repo.has_pages);

  console.log(repos, "!", deployedRepos);

  if (error) return <p>Opps! Please try later</p>;
  if (!data && !error) return <p>Loading...</p>;

  return (
    <Row
      w="90"
      h="90vh"
      alignItems="flex-start"
      flexWrap="wrap"
      className="overflow">
      {deployedRepos?.map((repo: IRepo) => (
        <Row w="50%">
          <RepoCard repo={repo} />
        </Row>
      ))}
    </Row>
  );
}
