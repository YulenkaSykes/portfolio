import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { IRepo } from "../interfaces";
import { Col, Row } from "../Styled/Flex";

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
  if(!data && !error) return <p>Loading...</p>;

  return (
    <Row w="90" h="90vh" alignItems="flex-start" flexWrap="wrap" className="overflow">
      {deployedRepos?.map((repo: IRepo) => (
        <Col w="auto" h="auto" m="10px">
          <p>
            {repo.name} 
          </p>
          <span>Created at: {repo.created_at}</span>
          <a href={repo.html_url}>Visit on git</a>
          <a href={`https://yulenkasykes.github.io/${repo.name}/`}>Visit deploy</a>
        </Col>
      ))}
    </Row>
  );
}
