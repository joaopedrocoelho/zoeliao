import { createContext } from "react";

interface NavLinksContext {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const navLinksContext = createContext<NavLinksContext>({
  isOpen: false,
  setIsOpen: (value: boolean) => {},
});
