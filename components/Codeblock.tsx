"use client";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkHighlight from "remark-highlight.js";
import copyToClipboard from "@/utils/copyToClipboard";
import "highlight.js/styles/github-dark.css";

type t_codeblock = {
  markdown: string;
  setMarkdown: Dispatch<SetStateAction<string>>;
  setHtmlContent: Dispatch<SetStateAction<string>>;
  isTextAreaFocused: boolean;
  setTextAreaFocused: Dispatch<SetStateAction<boolean>>;
  isScale: boolean | undefined;
};

function Codeblock({
  markdown,
  setMarkdown,
  setHtmlContent,
  isTextAreaFocused,
  setTextAreaFocused,
  isScale,
}: t_codeblock) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isCopy, setCopy] = useState(false);

  const handleClipboard = async () => {
    await copyToClipboard(markdown);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  const handleMarkdownChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
    remark()
      .use(remarkHtml)
      .use(remarkHighlight)
      .process(event.target.value)
      .then((file) => {
        setHtmlContent(String(file));
      });
  };

  const handleTextAreaFocus = () => {
    setTextAreaFocused(true);
  };

  const handleTextAreaBlur = () => {
    setTextAreaFocused(false);
  };

  useEffect(() => {
    if (textareaRef.current && isScale) {
      textareaRef.current.focus();
    }
  }, [isScale]);

  useEffect(() => {
    const textarea: HTMLTextAreaElement | null = textareaRef.current;

    if (textarea) {
      textarea.addEventListener("focus", handleTextAreaFocus);
      textarea.addEventListener("blur", handleTextAreaBlur);

      return () => {
        textarea.removeEventListener("focus", handleTextAreaFocus);
        textarea.removeEventListener("blur", handleTextAreaBlur);
      };
    }
  }, []);

  return (
    <section className="w-full h-full">
      <button
        className={`p-1 px-2 absolute right-2 top-2 rounded-lg hover:ring-2 hover:ring-green-500/30 text-sm ${
          isCopy ? "bg-green-500/30" : "bg-green-500/10"
        }`}
        onClick={handleClipboard}
      >
        {isCopy ? "copied" : "copy"}
      </button>
      <textarea
        ref={textareaRef}
        className={`w-full h-full text-xs sm:text-sm md:text-base resize-none p-5 bg-transparent focus:outline-none ${
          isTextAreaFocused && "bg-slate-800"
        }`}
        placeholder="Write Markdown here..."
        value={markdown}
        onChange={handleMarkdownChange}
      ></textarea>
      <div
        className="preview mt-4"
        dangerouslySetInnerHTML={{ __html: setHtmlContent }}
      ></div>
    </section>
  );
}

export default Codeblock;
