import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full px-5 py-5 md:px-8 md:py-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-semibold tracking-[-0.04em] md:text-2xl"
        >
          WEBZONE INDIA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#work"
            className="text-sm transition-colors duration-300 hover:text-neutral-500 lg:text-base"
          >
            Work
          </a>

          <a
            href="#services"
            className="text-sm transition-colors duration-300 hover:text-neutral-500 lg:text-base"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm transition-colors duration-300 hover:text-neutral-500 lg:text-base"
          >
            About
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-black px-5 py-2.5 text-sm transition-all duration-300 hover:bg-black hover:text-white md:block"
        >
          Start a Project
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-px w-7 bg-black" />
          <span className="h-px w-7 bg-black" />
          <span className="h-px w-7 bg-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex min-h-screen flex-col bg-white px-5 py-5 md:hidden">
          
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between">
            <a
              href="/"
              onClick={closeMenu}
              className="text-xl font-semibold tracking-[-0.04em]"
            >
              WEBZONE INDIA
            </a>
            
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="relative flex h-8 w-8 items-center justify-center"
            >
              <span className="absolute h-px w-7 rotate-45 bg-black" />
              <span className="absolute h-px w-7 -rotate-45 bg-black" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="mt-24 flex flex-col">
            <a
              href="#work"
              onClick={closeMenu}
              className="border-b border-neutral-200 py-5 text-4xl font-medium tracking-[-0.04em] transition-colors duration-300 hover:text-neutral-500"
            >
              Work
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="border-b border-neutral-200 py-5 text-4xl font-medium tracking-[-0.04em] transition-colors duration-300 hover:text-neutral-500"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-neutral-200 py-5 text-4xl font-medium tracking-[-0.04em] transition-colors duration-300 hover:text-neutral-500"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-neutral-200 py-5 text-4xl font-medium tracking-[-0.04em] transition-colors duration-300 hover:text-neutral-500"
            >
              Start a Project
            </a>
          </nav>

          {/* Small Mobile Footer Text */}
          <div className="mt-auto flex items-end justify-between pb-2 text-xs text-neutral-500">
            <span>WebZone India</span>
            <span>Digital Experiences</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;