import React, { useCallback } from "react";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import { useMemo } from "react";
import theme from "prism-react-renderer/themes/vsDark";

import type { Language } from "prism-react-renderer";
import type { MDXComponents } from "mdx/types";

const Code: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
  children,
  className,
  ...rest
}) => {
  const lang = useMemo(
    () => (className ? (className.replace(/language-/gm, "") as Language) : ("bash" as Language)),
    [className],
  );

  const onClick = useCallback(() => {
    navigator.clipboard.writeText(children as string);
  }, [children]);

  if (!className) {
    return <span className="rounded-md bg-gray-200 px-2 text-blue-500">{children}</span>;
  }

  return (
    <div className="relative my-4">
      <div className="h-[28px] rounded-t-lg bg-gray-300 px-2 pt-1.5">
        <button className="float-right ml-1 h-[16px] w-[16px] rounded-full bg-[#FF5F57] hover:opacity-70" />
        <button className="float-right ml-1 h-[16px] w-[16px] rounded-full bg-[#FDBB2F] hover:opacity-70" />
        <button className="float-right ml-1 h-[16px] w-[16px] rounded-full bg-[#74AE59] hover:opacity-70" />
      </div>
      <button className="absolute right-2 top-[32px] text-white hover:opacity-70" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
      <Highlight {...defaultProps} code={children as string} language={lang} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} overflow-x-scroll rounded-b-lg p-4 pt-8`} style={style}>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

const Aside: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
  children,
  ...rest
}) => {
  return <aside className="my-4 rounded-sm bg-[#f1f1ef] p-4">{children}</aside>;
};

const Components: MDXComponents = {
  code: Code,
  Callout: Aside,
  p: (props) => <p {...props} className="py-4" />,
  a: (props) => (
    <a {...props} className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800" />
  ),
  ul: (props) => <ul {...props} className="my-4 list-inside list-disc space-y-4 pl-2 sm:pl-4" />,
  ol: (props) => <ol {...props} className="my-4 list-inside list-decimal space-y-4 pl-2 sm:pl-4" />,
  li: (props) => <li {...props} className="pl-4" />,
  h1: (props) => <h1 {...props} className="py-4 font-bold" />,
  h2: (props) => <h2 {...props} className="py-4 font-bold" />,
  h3: (props) => <h3 {...props} className="py-4 font-bold" />,
  h4: (props) => <h4 {...props} className="py-4 font-bold" />,
  h5: (props) => <h5 {...props} className="py-4 font-bold" />,
  h6: (props) => <h6 {...props} className="py-4 font-bold" />,
  img: (props) => <img {...props} className="py-4" />,
};

export default Components;
