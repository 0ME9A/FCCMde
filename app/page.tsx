import ContributionSection from "@/components/ContributionSection";
import MdeEditor from "@/components/MdeEditor";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main
      className={`w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-950  pt-32 pb-10`}
    >
      <Intro />
      <MdeEditor isScaleFull={false} />
      <ContributionSection />
      <Footer />
    </main>
  );
}
