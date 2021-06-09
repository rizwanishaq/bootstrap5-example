import { BrowserRouter } from "react-router-dom";
import Boxes from "./components/Boxes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Instructors from "./components/Instructors";
import LearnSection from "./components/LearnSection";
import NewsLetter from "./components/NewsLetter";
import Questions from "./components/Questions";
import ShowCase from "./components/ShowCase";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ShowCase />
      <NewsLetter />
      <Boxes />
      <LearnSection />
      <Questions />
      <Instructors />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
