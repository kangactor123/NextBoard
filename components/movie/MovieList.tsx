import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { IGetMovie } from "../../interface";
import { getMovie } from "../../pages/api/movieApi";
import { nowMovieTab } from "../../recoil/store";
import ContentCard from "../common/ContentCard";

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
        <ContentCard key={movie.id} data={movie}></ContentCard>
      ))}
    </Wrapper>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("popularMovie", () => {
    getMovie("popular");
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default MovieList;

/*




*/
