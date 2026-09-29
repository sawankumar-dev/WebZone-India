import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import About from "./components/sections/About/About"
import Contact from "./components/sections/Contact/Contact"
import Hero from "./components/sections/Hero/Hero"
import Services from "./components/sections/Services/Services"
import Technologies from "./components/sections/Technologies/Technologies"
import Work from "./components/sections/Work/Work"

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Header/>
      <main className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <Hero/>
        <Work/>
        <Services/>
        <Technologies/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App