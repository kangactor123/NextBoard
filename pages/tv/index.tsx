import { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Tag from "../../components/common/Tag";
import { TagList } from "../../components/common/TagList";
import { Wrapper } from "../../components/common/Wrapper";
import TvList from "../../components/tv/TvList";
import { nowTvTab } from "../../recoil/store";
import SEO from "../SEO";

const TvIndex: NextPage = () => {
  const setTab = useSetRecoilState(nowTvTab);
  const changeTab = (clickTab: string) => {
    setTab(clickTab);
  };
  return (
    <Wrapper>
      <SEO title="tv" />
      <TagList>
        <Tag contents="#요즘_인기있는" onClick={() => changeTab("popular")} />
        <Tag
          contents="#오늘_방영하는"
          onClick={() => changeTab("airing_today")}
        />
        <Tag contents="#모르면_간첩" onClick={() => changeTab("top_rated")} />
        <Tag contents="#on_the_air" onClick={() => changeTab("on_the_air")} />
      </TagList>
      <TvList />
    </Wrapper>
  );
};

export default TvIndex;
