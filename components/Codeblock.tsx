"use client";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { editFile } from "@/RTK/slice/mdxfilesSlice";
import { RootState } from "@/RTK/store";
import { remark } from "remark";
import copyToClipboard from "@/utils/copyToClipboard";
import remarkHighlight from "remark-highlight.js";
import remarkHtml from "remark-html";
import "highlight.js/styles/github-dark.css";

type t_codeblock = {
  setHtmlContent: Dispatch<SetStateAction<string>>;
  isTextAreaFocused: boolean;
  setTextAreaFocused: Dispatch<SetStateAction<boolean>>;
  isScaleFull: boolean;
};

function Codeblock({
  setHtmlContent,
  isTextAreaFocused,
  isScaleFull,
}: t_codeblock) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isCopy, setCopy] = useState(false);
  const activeTabId = useSelector((state: RootState) => state.activeTab);
  const mdxfiles = useSelector((state: RootState) => state.mdxfiles);
  const dispatch = useDispatch();

  const activeTab = mdxfiles.find((item) => item.id === activeTabId);

  const handleClipboard = async () => {
    if (activeTab?.content) {
      await copyToClipboard(activeTab?.content);
      setCopy(true);
    }
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  const handleMarkdownChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    activeTab &&
      dispatch(editFile({ ...activeTab, content: event.target.value }));

    remark()
      .use(remarkHtml)
      .use(remarkHighlight)
      .process(event.target.value)
      .then((file) => {
        setHtmlContent(String(file));
      });
  };

  useEffect(() => {
    if (textareaRef.current && isScaleFull) {
      textareaRef.current.focus();
    }
  }, [isScaleFull]);

  useEffect(() => {
    remark()
      .use(remarkHtml)
      .use(remarkHighlight)
      .process(activeTab?.content || "")
      .then((file) => {
        setHtmlContent(String(file));
      });
  }, [activeTab?.content, activeTabId, setHtmlContent]);

  // useEffect(() => {
  //   const handleTextAreaFocus = () => {
  //     setTextAreaFocused(true);
  //   };

  //   const handleTextAreaBlur = () => {
  //     setTextAreaFocused(false);
  //   };
  //   const textarea: HTMLTextAreaElement | null = textareaRef.current;

  //   if (textarea) {
  //     textarea.addEventListener("focus", handleTextAreaFocus);
  //     textarea.addEventListener("blur", handleTextAreaBlur);

  //     return () => {
  //       textarea.removeEventListener("focus", handleTextAreaFocus);
  //       textarea.removeEventListener("blur", handleTextAreaBlur);
  //     };
  //   }
  // }, [setTextAreaFocused]);

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
        value={activeTab?.content}
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
