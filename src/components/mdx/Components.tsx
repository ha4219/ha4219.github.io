import React, { useCallback } from "react";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import { useMemo } from "react";
import theme from "prism-react-renderer/themes/vsDark";

import type { Language } from "prism-react-renderer";
import type { MDXComponents } from "mdx/types";

interface Props {
  className?: string;
  children: string;
}
const Code: React.FC<Props> = ({ children, className, ...rest }) => {
  const lang = useMemo(
    () => (className ? (className.replace(/language-/gm, "") as Language) : ("bash" as Language)),
    [className],
  );

  const onClick = useCallback(() => {
    navigator.clipboard.writeText(children);
  }, [children, navigator.clipboard]);

  return (
    <div className="relative">
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
      <Highlight {...defaultProps} code={children} language={lang} theme={theme}>
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

export default {
  code: Code,
} as MDXComponents | undefined;
