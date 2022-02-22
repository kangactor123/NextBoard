import styled from "styled-components";
import { IMovie } from "../../interface";
import { makeImagePath } from "../../utils/util";

const Wrapper = styled.div`
  width: 320px;
  height: 470px;
  background-color: ${(props) => props.theme.black.lighter};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03) translateY(-2px);
    transform-origin: center;
    transition: all 1s;
  }
`;

const ImgWrap = styled.div<{ img_path: string }>`
  height: 420px;
  background: url(${(props) => props.img_path});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const TitleWrap = styled.div`
  font-size: 1.1em;
  font-weight: 600;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white.lighter};
`;

interface ContentCardProps {
  data: IMovie;
}

function ContentCard({ data }: ContentCardProps) {
  return (
    <Wrapper>
      <ImgWrap img_path={makeImagePath(data.poster_path, "w500")} />
      <TitleWrap>{data.title}</TitleWrap>
    </Wrapper>
  );
}
export default ContentCard;
