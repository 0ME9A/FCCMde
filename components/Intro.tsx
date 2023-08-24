import PrimaryLink from "./Link";

export default function Intro() {
  return (
    <section
      className={`w-full text-center max-w-screen-lg mx-auto py-32 pb-52 space-y-4 px-5`}
    >
      <h1 className={`text-4xl lg:text-5xl font-extrabold`}>Welcome to FCC Mde</h1>
      <p className="pb-6">
        Simplify your Markdown editing experience with FCC Mde. Effortlessly
        create, preview, and customize your content in real time. Say goodbye to
        complex formatting and hello to intuitive editing. Try FCC Mde today and
        redefine your Markdown workflow.
      </p>
      <PrimaryLink
        href={"/editor"}
        title={"Editor Mode"}
        styles={""}
        target="_self"
      >
        Start Editing
      </PrimaryLink>
    </section>
  );
}
