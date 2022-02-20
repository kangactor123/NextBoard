import type { NextPage } from "next";
import styled from "styled-components";
import SEO from "./SEO";

const Wrapper = styled.div`
  width: 100vw;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO title="hi" />
      <h1>this is initial setting</h1>
    </Wrapper>
  );
};

export default Home;
