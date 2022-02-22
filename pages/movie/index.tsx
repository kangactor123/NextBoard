import { NextPage } from "next";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Wrapper } from "../../components/common/Wrapper";
import MovieList from "../../components/movie/MovieList";
import { nowMovieTab } from "../../recoil/store";
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
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const MovieIndex: NextPage = () => {
  const setTab = useSetRecoilState(nowMovieTab);
  const changeTab = (clickTab: string) => {
    setTab(clickTab);
  };
  return (
    <Wrapper>
      <SEO title="Movie" />
      <TagList>
        <Tag onClick={() => changeTab("now_playing")}>#현재_상영중인</Tag>
        <Tag onClick={() => changeTab("popular")}>#요즘_인기있는</Tag>
        <Tag onClick={() => changeTab("top_rated")}>#모르면_간첩</Tag>
        <Tag onClick={() => changeTab("upcoming")}>#곧_개봉박두</Tag>
      </TagList>
      <MovieList />
    </Wrapper>
  );
};

export default MovieIndex;
