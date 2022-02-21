import Navbar from "./common/Navbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
