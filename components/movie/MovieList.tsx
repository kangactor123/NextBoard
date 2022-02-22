import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { IGetMovie } from "../../interface";
import { getMovie } from "../../pages/api/movieApi";
import { nowMovieTab } from "../../recoil/store";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

function MovieList() {
  const nowTab = useRecoilValue(nowMovieTab);
  const { data } = useQuery<IGetMovie>(["movieList", nowTab], () => {
    return getMovie(nowTab);
  });
  return (
    <Wrapper>
      {data?.results.map((movie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </Wrapper>
  );
}
export default MovieList;
