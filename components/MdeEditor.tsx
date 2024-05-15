"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { buttonStyle } from "./Button";
import {
  MdOutlineZoomOutMap,
  MdOutlineZoomInMap,
  MdArrowBack,
} from "react-icons/md";

import Codeblock from "./Codeblock";

export default function MdeEditor({ isScaleFull }: { isScaleFull?: boolean }) {
  const route = useRouter();

  const [isTextAreaFocused, setTextAreaFocused] = useState<boolean>(false);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [isScale, setScale] = useState<boolean | undefined>(isScaleFull);
  const [markdown, setMarkdown] = useState<string>("");
  const [resizeX, setResize] = useState<number>(50);

  const handleResize = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); // Parse the value as an integer
    if (!isNaN(value)) {
      if (value <= 10) {
        setResize(10);
      } else if (value >= 90) {
        setResize(90);
      } else {
        setResize(value);
      }
    }
  };

  const onScale: React.CSSProperties = {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: 0,
    borderRadius: 0,
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (markdown.length > 0) {
        event.preventDefault();
        event.returnValue = ""; // Required for Chrome to show the confirmation dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [markdown]); // Depend on markdown length

  return (
    <section
      className={`w-[90%] md:w-[80%] aspect-video mx-auto rounded-xl border-2 border-slate-800 shadow-2xl shadow-slate-500/50 relative z-50`}
      style={isScale ? onScale : {}}
    >
      <nav
        className={`p-1 bg-slate-900 border-b border-slate-800 relative z-40 w-full flex items-center justify-between pr-3 ${
          isScale ? "rounded-none" : "rounded-t-xl"
        }`}
      >
        <div className="flex items-center gap-1">
          {isScaleFull && (
            <button
              onClick={() => route.back()}
              className={`${buttonStyle} flex items-center gap-1 !p-1  !bg-slate-800`}
            >
              <MdArrowBack />
            </button>
          )}
          <p
            className={`px-3 p-1 rounded-lg ${
              isTextAreaFocused && "bg-slate-800"
            }`}
          >
            FCCMde.md
          </p>
        </div>

        {/* editor zoomin - out button */}
        {!isScaleFull ? (
          <button
            className={`opacity-50 hover:opacity-100 group`}
            onClick={() => setScale((prev) => !prev)}
            title={isScale ? "Zoom out" : "Zoom in"}
          >
            {isScale ? (
              <MdOutlineZoomInMap className={`group-hover:scale-125`} />
            ) : (
              <MdOutlineZoomOutMap className={`group-hover:scale-125`} />
            )}
          </button>
        ) : (
          ""
        )}
      </nav>
      <div className="bg-slate-800 h-full w-full relative overflow-hidden rounded-b-xl">
        {/* Markdown editor panel */}
        <div
          className="h-full absolute left-[-2px] origin-left z-10 bg-slate-950"
          style={{ width: `${resizeX}%` }}
        >
          <Codeblock
            markdown={markdown}
            setMarkdown={setMarkdown}
            setHtmlContent={setHtmlContent}
            isTextAreaFocused={isTextAreaFocused}
            setTextAreaFocused={setTextAreaFocused}
            isScale={isScale}
          />
        </div>

        {/* Preview Panel */}
        <section
          className={`h-full absolute right-[-2px] origin-right z-10 bg-slate-950 p-5 overflow-auto`}
          style={{ width: `${100 - resizeX}%` }}
        >
          {htmlContent.length === 0 && (
            <p className="opacity-50">Markdown Preview...</p>
          )}
          <div className="prose max-w-none prose-invert prose-sm sm:prose-md md:prose-lg">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </section>

        {/* panel resizer */}
        <input
          type="range"
          name="resize"
          id=""
          min={0}
          value={resizeX}
          max={100}
          onChange={(e: any) => handleResize(e)}
          className="w-full h-screen border-5 bg-green-300 absolute top-0 left-0 cursor-w-resize opacity-0"
        />
      </div>
    </section>
  );
}
