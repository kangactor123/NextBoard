import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { Overlay } from "../../components/common/Overlay";
import Tag from "../../components/common/Tag";
import { TagList } from "../../components/common/TagList";
import { Wrapper } from "../../components/common/Wrapper";
import PostBoard from "../../components/community/PostBoard";

const ContentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const Content = styled.div`
  width: 80%;
  height: 100px;
  border-radius: 15px;
  box-shadow: 1px -1px 15px 1px;
  background-color: beige;
`;

const BtnSection = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputText = styled.input`
  width: 100%;
  height: 100%;
  //border: 0;
  &:focus {
    outline: none;
  }
`;

const PostBtn = styled.button`
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: whitesmoke;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }
`;

const CommunityIndex: NextPage = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        {/* 해시 태그 게시판 */}
        <TagList>
          <Tag contents="#직장인들_다모여" />
          <Tag contents="#퇴근하고_술한잔_어때" />
          <Tag contents="#너와_나의_대나무숲" />
          <Tag contents="#고민있어" />
        </TagList>
        {/* 게시판 */}
        <BtnSection>
          <PostBtn onClick={toggleModal}>끄적끄적 하기</PostBtn>
        </BtnSection>
        <ContentsSection>
          <Content>First</Content>
          <Content>First</Content>
          <Content>First</Content>
          <Content>First</Content>
        </ContentsSection>
      </Wrapper>
      <AnimatePresence>
        {modal && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PostBoard toggleModal={toggleModal} modal={modal} />
            </Overlay>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommunityIndex;
