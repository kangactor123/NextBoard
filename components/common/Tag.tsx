import styled from "styled-components";

const HashTag = styled.span`
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

interface TagProps {
  contents: string;
  onClick?: () => void;
}

function Tag({ contents, onClick = () => {} }: TagProps) {
  return <HashTag onClick={onClick}>{contents}</HashTag>;
}

export default Tag;
