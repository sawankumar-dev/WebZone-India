const Services = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-28 lg:py-32"
    >
      {/* Section Intro */}
      <div className="flex flex-col gap-6 border-t border-neutral-200 pt-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Services
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            We build digital products
            <br />
            for modern businesses.
          </h2>
        </div>

        <p className="max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
          From websites and mobile apps to custom digital products,
          we design and build experiences around your business goals.
        </p>
      </div>

      {/* Services List */}
      <div className="mt-16 md:mt-24">

        {/* Websites */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[80px_1fr_40px] md:items-start md:gap-8">
            <span className="text-sm text-neutral-500">
              01
            </span>

            <div className="max-w-3xl">
              <h3 className="text-3xl font-medium tracking-tight md:text-5xl">
                Websites
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Business websites, e-commerce stores, landing pages
                and custom web applications built around your goals.
              </p>
            </div>

            <span className="text-2xl">
              →
            </span>
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[80px_1fr_40px] md:items-start md:gap-8">
            <span className="text-sm text-neutral-500">
              02
            </span>

            <div className="max-w-3xl">
              <h3 className="text-3xl font-medium tracking-tight md:text-5xl">
                Mobile Apps
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Modern mobile applications for Android, iOS and
                cross-platform experiences.
              </p>
            </div>

            <span className="text-2xl">
              →
            </span>
          </div>
        </div>

        {/* Desktop Applications */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[80px_1fr_40px] md:items-start md:gap-8">
            <span className="text-sm text-neutral-500">
              03
            </span>

            <div className="max-w-3xl">
              <h3 className="text-3xl font-medium tracking-tight md:text-5xl">
                Desktop Applications
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Custom desktop software and business tools designed
                around specific workflows and requirements.
              </p>
            </div>

            <span className="text-2xl">
              →
            </span>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[80px_1fr_40px] md:items-start md:gap-8">
            <span className="text-sm text-neutral-500">
              04
            </span>

            <div className="max-w-3xl">
              <h3 className="text-3xl font-medium tracking-tight md:text-5xl">
                UI/UX Design
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Clean, intuitive interfaces and thoughtful user
                experiences for websites, apps and digital products.
              </p>
            </div>

            <span className="text-2xl">
              →
            </span>
          </div>
        </div>

        {/* Development */}
        <div className="border-t border-neutral-200 py-8 md:py-10">
          <div className="grid gap-5 md:grid-cols-[80px_1fr_40px] md:items-start md:gap-8">
            <span className="text-sm text-neutral-500">
              05
            </span>

            <div className="max-w-3xl">
              <h3 className="text-3xl font-medium tracking-tight md:text-5xl">
                Development
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Frontend, backend, APIs, databases and complete
                digital products built with modern technologies.
              </p>
            </div>

            <span className="text-2xl">
              →
            </span>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-neutral-200" />
      </div>
    </section>
  );
};

export default Services;