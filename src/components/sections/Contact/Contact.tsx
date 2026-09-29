const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 lg:py-32"
    >
      {/* Section Intro */}
      <div className="border-t border-neutral-200 pt-8">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Start a Project
        </p>

        <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[7.5rem]">
          Have an idea?
          <br />
          Let&apos;s build it.
        </h2>
      </div>

      {/* Contact Content */}
      <div className="mt-12 flex flex-col gap-8 border-t border-neutral-200 pt-8 md:mt-20 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Tell us about your project, your goals and what you want to
          build. We&apos;ll get back to you and discuss how we can bring
          your idea to life.
        </p>

        <a
          href="mailto:hello@webzoneindia.com"
          className="group flex w-fit items-center gap-4 rounded-full bg-black px-6 py-3 text-base text-white transition-all duration-300 hover:scale-[1.03] sm:px-7 sm:py-3.5 sm:text-lg md:px-8 md:py-4"
        >
          <span>Let&apos;s Talk</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Contact Details */}
      <div className="mt-16 grid gap-8 border-t border-neutral-200 pt-8 md:mt-24 md:grid-cols-3">
        <div>
          <p className="text-sm text-neutral-500">
            Email
          </p>

          <a
            href="mailto:hello@webzoneindia.com"
            className="mt-3 inline-block text-lg font-medium transition-colors duration-300 hover:text-neutral-500"
          >
            hello@webzoneindia.com
          </a>
        </div>

        <div>
          <p className="text-sm text-neutral-500">
            Location
          </p>

          <p className="mt-3 text-lg font-medium">
            India
          </p>
        </div>

        <div>
          <p className="text-sm text-neutral-500">
            Availability
          </p>

          <p className="mt-3 text-lg font-medium">
            Open for new projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;