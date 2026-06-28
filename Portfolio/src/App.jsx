import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from "./components"
import Footer from "./components/Footer"
import PageLoader from "./components/PageLoader"

const App = () => {
  return(
    <BrowserRouter>
      <PageLoader>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          {/* <Tech /> */}
          <Works />
          <Experience />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </PageLoader>
    </BrowserRouter>
  )
}
 
export default App