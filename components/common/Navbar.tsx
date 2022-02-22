import Link from "next/link";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.nav`
  padding: 10px;
  max-width: 660px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.theme.white.lighter};
  gap: 10%;
`;
const Tab = styled.a<{ isActive: boolean }>`
  font-size: 1em;
  color: ${(props) => (props.isActive ? "blue" : "gray")};
  font-family: "Times New Roman", Times, serif;
  &:hover {
    color: pink;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 1.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <Wrapper>
      <Link href="/movie">
        <Tab isActive={router.pathname === "/movie" ? true : false}>영화</Tab>
      </Link>
      <Link href="/tv">
        <Tab isActive={router.pathname === "/tv" ? true : false}>시리즈</Tab>
      </Link>
      <div>
        <Logo onClick={goHome} src="/resource/img/logo.png" alt="로고" />
      </div>
      <Link href="/content">
        <Tab isActive={router.pathname === "/content" ? true : false}>
          컨텐츠
        </Tab>
      </Link>
      <Link href="/community">
        <Tab isActive={router.pathname === "/community" ? true : false}>
          커뮤니티
        </Tab>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
