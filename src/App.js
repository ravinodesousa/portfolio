import "./App.scss";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Resume />
      <MyWork />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
