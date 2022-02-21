import type { NextPage } from "next";
import styled from "styled-components";
import SEO from "./SEO";

const Wrapper = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  background-color: beige;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO title="Home" />
      <h1>this is initial setting</h1>
    </Wrapper>
  );
};

export default Home;
