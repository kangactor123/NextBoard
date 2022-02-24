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

const InputBox = styled.div`
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
`;

const Btn = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  background-color: #808080;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #4068bf;
    color: white;
  }
`;

interface IPostProps {
  toggleModal: () => void;
  modal: boolean;
  nowTag: string;
}

interface IForm {
  name: string;
  contents: string;
}

class Posting {
  tag: string;
  name: string;
  contents: string;

  constructor(tag: string, name: string, contents: string) {
    this.tag = tag;
    this.name = name;
    this.contents = contents;
  }
}

function saveInLocalStorage(post: Posting) {
  localStorage.setItem("POST", JSON.stringify(post));
}

function PostBoard({ nowTag, toggleModal, modal }: IPostProps) {
  const { scrollY } = useViewportScroll();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    if (data.contents === "" && data.contents.length < 10) {
      setError(
        "contents",
        { message: "10자 이하의 글은 작성하실 수 없습니다." },
        { shouldFocus: true }
      );
    } else {
      /* 나중에 Toast.UI 만들어도 괜찮을듯 */
      saveInLocalStorage(new Posting(nowTag, data.name, data.contents));
      alert("글 작성 완료!");
      console.log(localStorage.getItem("POST"));
      toggleModal();
      /* 에러가 없을 시 localStorage에 저장하자 */
    }
  };
  return (
    <Container style={{ top: scrollY.get() + 150 }}>
      <Form onSubmit={handleSubmit(onValid)}>
        <InputBox>
          <Input
            {...register("name", {
              required: "작성하신 분의 이름을 알려주세요!",
              minLength: {
                value: 3,
                message: "3글자 이상 입력해주세요!",
              },
            })}
            placeholder="글쓴이는 누구인가요?"
          />
          {errors?.name?.message}
        </InputBox>
        <InputBox>
          <Input
            {...register("contents", {
              required: "한 글자 이상 작성해주세요!",
              minLength: {
                value: 10,
                message: "최소 10 글자 이상 입력할 수 있답니다!",
              },
            })}
            style={{ height: 180, paddingTop: "-50%" }}
            placeholder="글을 남겨주세요!"
          />
          {errors?.contents?.message}
        </InputBox>
        <InputBox>
          <Btn>작성하기</Btn>
        </InputBox>
      </Form>
      <InputBox style={{ paddingTop: 0 }}>
        <Btn onClick={() => toggleModal()}>나가기</Btn>
      </InputBox>
    </Container>
  );
}
export default PostBoard;
