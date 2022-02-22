import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Tag from "../../components/common/Tag";
import { TagList } from "../../components/common/TagList";
import { Wrapper } from "../../components/common/Wrapper";
import MovieList from "../../components/movie/MovieList";
import { IGetMovie } from "../../interface";
import { nowMovieTab } from "../../recoil/store";
import { API_KEY, BASE_URL } from "../api/movieApi";
import SEO from "../SEO";

interface IMovieIndexProps {
  results: IGetMovie;
}

const MovieIndex = ({ results }: IMovieIndexProps) => {
  const setTab = useSetRecoilState(nowMovieTab);
  const changeTab = (clickTab: string) => {
    setTab(clickTab);
  };
  return (
    <Wrapper>
      <SEO title="Movie" />
      <TagList>
        <Tag
          contents="#현재_상영중인"
          onClick={() => changeTab("now_playing")}
        />
        <Tag contents="#요즘_인기있는" onClick={() => changeTab("popular")} />
        <Tag contents="#모르면_간첩" onClick={() => changeTab("top_rated")} />
        <Tag contents="#곧_개봉박두" onClick={() => changeTab("upcoming")} />
      </TagList>
      <MovieList />
    </Wrapper>
  );
};

//처음 로딩되는 페이지를 SSR, 그리고 태그가 바뀌면서는 CSR ?
/*
const queryClient = new QueryClient();
await queryClient.prefetchQuery("popularMovie", () => getPopularMovie());
dehydratedState: dehydrate(queryClient),
*/
export async function getServerSideProps() {
  const data = await (
    await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`)
  ).json();
  return {
    props: data,
  };
}

export default MovieIndex;
