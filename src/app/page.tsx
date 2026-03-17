export default function Home() {
  return (
    <section>
      <h1 className="font-medium pt-[10vh] mb-0 text-2xl">Derek McEwen</h1>
      <p className="text-zinc-400 leading-snug mt-2">
        Software Engineer. Building things on the web. Currently looking for new opportunities.
      </p>
      <p className="mt-6 text-zinc-300 leading-relaxed">
        Find me on{" "}
        <a
          href="https://github.com/derekmcq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:text-zinc-300 transition-colors"
        >
          GitHub
        </a>
        {" "}and{" "}
        <a
          href="https://www.linkedin.com/in/dereklmcewen/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:text-zinc-300 transition-colors"
        >
          LinkedIn
        </a>
        , or check out my{" "}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:text-zinc-300 transition-colors"
        >
          resume
        </a>
        .
      </p>
    </section>
  );
}
