const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 px-5 py-10 md:px-8 md:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-md">
            <a
              href="/"
              className="text-xl font-semibold tracking-[-0.04em]"
            >
              WEBZONE INDIA
            </a>

            <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              Building thoughtful digital experiences for ambitious
              brands and modern businesses.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            <a
              href="#work"
              className="w-fit text-sm transition-colors duration-300 hover:text-neutral-500 md:text-base"
            >
              Work
            </a>

            <a
              href="#services"
              className="w-fit text-sm transition-colors duration-300 hover:text-neutral-500 md:text-base"
            >
              Services
            </a>

            <a
              href="#about"
              className="w-fit text-sm transition-colors duration-300 hover:text-neutral-500 md:text-base"
            >
              About
            </a>

            <a
              href="#contact"
              className="w-fit text-sm transition-colors duration-300 hover:text-neutral-500 md:text-base"
            >
              Contact
            </a>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-sm text-neutral-500">
              Get in touch
            </p>

            <a
              href="mailto:hello@webzoneindia.com"
              className="mt-3 inline-block text-base font-medium transition-colors duration-300 hover:text-neutral-500 md:text-lg"
            >
              hello@webzoneindia.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-500 md:mt-24 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 WebZone India. All rights reserved.
          </p>

          <p>
            India
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;