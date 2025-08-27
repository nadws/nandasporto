import Head from "next/head";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
// Tambahkan About jika mau (mirip Hero tapi dengan deskripsi lebih panjang)

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio Saya</title>
        <meta name="description" content="Portofolio developer" />
      </Head>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
