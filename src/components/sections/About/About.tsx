const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 lg:py-32"
    >
      {/* Section Intro */}
      <div className="border-t border-neutral-200 pt-8">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          About WebZone India
        </p>

        <h2 className="mt-5 max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
          We turn ideas into digital experiences that people remember.
        </h2>
      </div>

      {/* About Content */}
      <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-2 md:gap-16">
        <p className="max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl">
          WebZone India is a digital studio focused on creating modern
          websites, applications and digital products for businesses
          that want to grow online.
        </p>

        <p className="max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl">
          We combine thoughtful design, modern technology and practical
          development to create digital experiences that are simple,
          useful and built around real business goals.
        </p>
      </div>

      {/* Approach */}
      <div className="mt-16 border-t border-neutral-200 md:mt-24">
        <div className="grid md:grid-cols-3">
          <div className="border-b border-neutral-200 py-8 md:border-b-0 md:border-r md:pr-8">
            <span className="text-sm text-neutral-500">
              01
            </span>

            <h3 className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
              Think
            </h3>

            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Understand the idea, audience and goals before building.
            </p>
          </div>

          <div className="border-b border-neutral-200 py-8 md:border-b-0 md:border-r md:px-8">
            <span className="text-sm text-neutral-500">
              02
            </span>

            <h3 className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
              Design
            </h3>

            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Create clear and engaging experiences that feel natural to use.
            </p>
          </div>

          <div className="py-8 md:pl-8">
            <span className="text-sm text-neutral-500">
              03
            </span>

            <h3 className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
              Build
            </h3>

            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Turn the design into fast, reliable and scalable digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;