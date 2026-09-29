const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20 md:py-28 lg:py-32"
    >
      {/* Section Intro */}
      <div className="flex flex-col gap-6 border-t border-neutral-200 pt-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Technologies
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Built with modern
            <br />
            technologies.
          </h2>
        </div>

        <p className="max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
          We choose reliable and modern technologies to create
          fast, scalable and maintainable digital products.
        </p>
      </div>

      {/* Technology Categories */}
      <div className="mt-16 md:mt-24">

        {/* Frontend */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <p className="text-sm text-neutral-500">
              Frontend
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-2xl font-medium tracking-tight md:gap-x-10 md:text-4xl">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <p className="text-sm text-neutral-500">
              Backend
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-2xl font-medium tracking-tight md:gap-x-10 md:text-4xl">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <p className="text-sm text-neutral-500">
              Mobile
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-2xl font-medium tracking-tight md:gap-x-10 md:text-4xl">
              <span>React Native</span>
              <span>Expo</span>
            </div>
          </div>
        </div>

        {/* Animation */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <p className="text-sm text-neutral-500">
              Animation
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-2xl font-medium tracking-tight md:gap-x-10 md:text-4xl">
              <span>GSAP</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <p className="text-sm text-neutral-500">
              Tools
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-2xl font-medium tracking-tight md:gap-x-10 md:text-4xl">
              <span>Git</span>
              <span>GitHub</span>
              <span>Figma</span>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-neutral-200" />
      </div>
    </section>
  );
};

export default Technologies;