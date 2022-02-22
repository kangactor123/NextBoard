import { useViewportScroll } from "framer-motion";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  position: absolute;
  width: 30vw;
  height: 50vh;
  background-color: ${(props) => props.theme.white.lighter};
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

interface IPostProps {
  toggleModal: () => void;
  modal: boolean;
}

function PostBoard({ toggleModal, modal }: IPostProps) {
  const { scrollY } = useViewportScroll();
  const { handleSubmit, register } = useForm();
  const onValid = () => {};
  return (
    <Container style={{ top: scrollY.get() + 150 }}>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("name", {
            required: "작성하신 분의 이름을 알려주세요!",
            minLength: {
              value: 3,
              message: "3글자 이상 입력해주세요!",
            },
          })}
          placeholder="글쓴이는 누구인가요?"
        />
      </Form>
      <button onClick={() => toggleModal()}>나가기</button>
    </Container>
  );
}
export default PostBoard;
