"use client";
import { createFile, deleteFile } from "@/RTK/slice/mdxfilesSlice";
import { useDispatch, useSelector } from "react-redux";
import { focusTab } from "@/RTK/slice/activeTabSlice";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { RootState } from "@/RTK/store";
import Button, { buttonStyle } from "./Button";
import randomId from "@/utils/randomId";

type t_nav = {
  isScaleFull: boolean;
};

function Nav({ isScaleFull }: t_nav) {
  const route = useRouter();
  const mdxfiles = useSelector((state: RootState) => state.mdxfiles);
  const activeTabId = useSelector((state: RootState) => state.activeTab);
  const dispatch = useDispatch();

  const handleNewFile = () => {
    const id = randomId();
    const maxIndex =
      mdxfiles.reduce((max, file) => Math.max(max, file.index), -1) + 1;

    dispatch(
      createFile({
        id,
        index: maxIndex,
        title: `new file ${maxIndex + 1}`,
        content: ``,
      })
    );
    dispatch(focusTab(id));
  };

  const handleDelete = (id: string) => {
    const fileIndex = mdxfiles.findIndex((file) => file.id === id);

    if (mdxfiles.length > 1) {
      // Dispatch delete file action
      dispatch(deleteFile(id));

      // If the deleted file was the focused tab
      if (activeTabId === id) {
        if (mdxfiles.length === 1) {
          // If it was the only file, clear the focus
          dispatch(focusTab(""));
        } else if (fileIndex > 0) {
          // If it wasn't the first file, focus on the previous file
          dispatch(focusTab(mdxfiles[fileIndex - 1].id));
        } else {
          // If it was the first file, focus on the next file (which will now be at index 0)
          dispatch(focusTab(mdxfiles[1].id));
        }
      }
    }
  };
  return (
    <nav
      className={`p-1 bg-slate-900 border-b border-slate-800 relative z-40 w-full flex items-center justify-between pr-3 ${
        isScaleFull ? "rounded-none" : "rounded-t-xl"
      }`}
    >
      <div className="flex gap-1">
        {isScaleFull && (
          <button
            onClick={() => route.back()}
            className={`${buttonStyle} flex items-center gap-1 !p-1 !text-md !rounded-lg !bg-slate-800 !w-fit`}
          >
            <GoHomeFill />
          </button>
        )}
        <div
          className="flex items-center gap-1 overflow-auto cs-1"
          style={{ maxWidth: "calc(100vw - 4.7rem)" }}
        >
          {mdxfiles.map((item) => (
            <div
              key={item.id}
              className={`flex items-center rounded-lg hover:bg-slate-800 px-1 whitespace-nowrap ${
                item.id === activeTabId ? "bg-slate-800" : ""
              }`}
            >
              <button
                title={item.title}
                className="p-1 text-sm"
                onClick={() => dispatch(focusTab(item.id))}
              >
                {item.title}
              </button>
              <button
                title={`kill ${item.title}`}
                className="p-1 !rounded-md opacity-50 hover:opacity-100"
                onClick={() => handleDelete(item.id)}
              >
                <IoMdClose />
              </button>
            </div>
          ))}
        </div>
        <Button
          title={"New file"}
          setValue={handleNewFile}
          styles="!p-1 bg-slate-800/50 hover:bg-slate-800 !text-md"
        >
          <IoAddOutline />
        </Button>
      </div>

      {/* editor zoom in - out button */}
      {!isScaleFull ? (
        <button
          className={`opacity-50 hover:opacity-100 group`}
          onClick={() => route.push("/editor")}
          title={isScaleFull ? "Zoom out" : "Zoom in"}
        >
          <MdOutlineZoomOutMap className={`group-hover:scale-125`} />
        </button>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Nav;
