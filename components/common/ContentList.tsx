import { dehydrate, QueryClient, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { getPopularMovie } from "../../pages/api/movieApi";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

function ContentList() {
  const { data } = useQuery("popularMovies", getPopularMovie);
  console.log(data?.results);
  return <Wrapper></Wrapper>;
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("popularMovie", getPopularMovie);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default ContentList;
