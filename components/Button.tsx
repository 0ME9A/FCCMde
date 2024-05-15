import { Dispatch, SetStateAction } from "react";

const buttonStyle = `px-5 py-2 border-2 rounded-lg font-light bg-slate-900 border-transparent hover:border-slate-800 shadow-2xl shadow-slate-500/70`;

type buttonType = {
  title: string;
  value?: unknown;
  setValue: Dispatch<SetStateAction<unknown>>;
  styles?: string;
  children: React.ReactNode;
};

function Button({ title, value, setValue, styles, children }: buttonType) {
  return (
    <button
      onClick={() => setValue(value)}
      title={title}
      className={`${buttonStyle} ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;
export { buttonStyle };
