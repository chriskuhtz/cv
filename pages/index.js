import Head from "next/head";
import Header from "../segments/Header";
import Skills from "../segments/Skills";
import WorkHistory from "../segments/WorkHistory";
import Projects from "../segments/Projects";
import HowWhyWhere from "../segments/HowWhyWhere";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Christopher Kühtz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Skills />
        <WorkHistory />
        <Projects />
        <HowWhyWhere />
      </main>
    </div>
  );
}
