import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { IGetTv } from "../../interface";
import { getTv } from "../../pages/api/tvApi";
import { nowTvTab } from "../../recoil/store";
import TvCard from "./TvCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

function TvList() {
  const nowTab = useRecoilValue(nowTvTab);
  const { data } = useQuery<IGetTv>(["tvList", nowTab], () => {
    return getTv(nowTab);
  });
  return (
    <Wrapper>
      {data?.results.map((tv) => (
        <TvCard key={tv.id} data={tv}></TvCard>
      ))}
    </Wrapper>
  );
}

export default TvList;
