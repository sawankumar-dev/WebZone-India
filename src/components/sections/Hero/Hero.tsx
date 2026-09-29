const Hero = () => {
  return (
    <section className="pb-20 pt-20 md:pb-28 md:pt-28 lg:min-h-[calc(100vh-88px)] lg:pb-16 lg:pt-32">
        <h1 className="max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-[7.5rem]">We build <br />digital experiences <br /> for ambitious brands.</h1>
        <div className="mt-10 flex flex-col gap-8 border-t border-neutral-200 pt-6 md:mt-14 md:flex-row md:items-end md:justify-between md:gap-12">
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            We design and build thoughtful websites and digital experiences
            that help ambitious brands stand out, connect with their audience,
            and turn ideas into memorable digital experiences.
        </p>

        <a
            href="#contact"
            className="group flex w-fit shrink-0 items-center gap-4 rounded-full px-6 py-3 text-base border transition-all duration-300  sm:px-7 sm:py-3.5 sm:text-lg md:px-8 md:py-4 md:text-xl"
        >
            <span>Start a Project</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
            </span>
        </a>
        </div>
    </section>
  )
}

export default Hero