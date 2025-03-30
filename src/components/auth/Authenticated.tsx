import useAuthSession from "../../hooks/useAuthSession";
import { ReactNode } from "react";

const Authenticated = ({ children }: { children: ReactNode }) => {
  const session = useAuthSession();

  return <>{session ? children : null }</>;
};

export default Authenticated;
