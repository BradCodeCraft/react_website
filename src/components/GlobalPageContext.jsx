import { createContext } from "react";

const PageContext = createContext({
  page: "home",
  setPage: () => { }
})

export default PageContext;