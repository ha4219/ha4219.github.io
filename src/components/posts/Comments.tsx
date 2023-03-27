import React, { useEffect } from "react";

const Comments = () => {
  const divRef = React.createRef<HTMLDivElement>();
  useEffect(() => {
    if (divRef.current?.children.length === 0) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://utteranc.es/client.js");
      script.setAttribute("repo", "ha4219/managing-blog-comments");
      script.setAttribute("async", "true");
      script.setAttribute("label", "comments");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("theme", "github-light");
      divRef.current.appendChild(script);
    }
  }, [divRef]);
  return (
    <div className="">
      <div ref={divRef} />
    </div>
  );
};

export default Comments;
