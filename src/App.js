import Header from "./components/header";
import Intro from "./components/intro";
import Features from './components/features'
import Last from './components/last.jsx'
import Footer from "./components/Footer.jsx";
import Reviews from './components/reviews.jsx'
import Example from "./components/example.jsx";
import Adding from "./components/adding.jsx";
import TalkToSales from "./components/Talktosales.jsx";
function App() {
  return (
    <>
    <div>

    <Header/>
      </div>
    <div className="w-10/12 mt-20 mx-auto">
      <Intro/>
      <Features/>
      <Example/>
      <Adding/>
      <Reviews/>
      <TalkToSales/>
      <Last/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
