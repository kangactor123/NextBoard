import { NextPage } from "next";
import styled from "styled-components";
import ContentList from "../../components/common/ContentList";
import { Wrapper } from "../../components/common/Wrapper";
import SEO from "../SEO";

const TagList = styled.div`
  width: 45%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
`;
const Tag = styled.span`
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const MovieIndex: NextPage = () => {
  return (
    <Wrapper>
      <SEO title="Movie" />
      <TagList>
        <Tag>#요즘_인기있는</Tag>
        <Tag>#최신_영화</Tag>
        <Tag>#모르면_간첩</Tag>
        <Tag>#현재_상영중인</Tag>
        <Tag>#곧_개봉박두</Tag>
      </TagList>
      <ContentList />
    </Wrapper>
  );
};

export default MovieIndex;
