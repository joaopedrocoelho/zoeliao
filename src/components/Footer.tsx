import React from "react";
import P from "./text/P";

const Footer = () => {
  return (
    <footer
      className="flex flex-col px-4 py-8 border-t-[1px]
     border-slate-200 bg-beige-darker
     lg:bg-transparent"
    >
      <P>© 2023 Zoeliao</P>
    </footer>
  );
};

export default Footer;
