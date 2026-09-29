const Work = () => {
  return (
    <section id="work">
      {/* Section Header */}
      <div className="flex flex-col gap-6 border-t border-neutral-200 pt-8 md:flex-row md:items-start md:justify-between">
        <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
          Selected Work
        </h2>

        <p className="max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
          A selection of digital experiences we've designed and built
          for ambitious brands and growing businesses.
        </p>
      </div>

      {/* Project 1 */}
      <div className="mt-16 md:mt-24">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden"
        >
          <div className="aspect-[4/3] w-full bg-neutral-100 md:aspect-[16/9]">
            {/* Image yahan aayegi */}
          </div>
        </a>

        {/* Project Information */}
        <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
            NOVA
          </h3>

          <p className="text-sm text-neutral-500 md:text-base">
            E-commerce · Web Design · Development
          </p>
        </div>
      </div>
      {/* Project 2 */}
      <div className="mt-16 md:mt-24">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden"
        >
          <div className="aspect-[4/3] w-full bg-neutral-100 md:aspect-[16/9]">
            {/* Image yahan aayegi */}
          </div>
        </a>

        {/* Project Information */}
        <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
            MOON STORE
          </h3>

          <p className="text-sm text-neutral-500 md:text-base">
            E-commerce · Web Design · Development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;