import Header from "./components/header";
import Intro from "./components/intro";
import Features from './components/features';
import Last from './components/last.jsx';
import Footer from "./components/Footer.jsx";
import Reviews from './components/reviews.jsx';
import Example from "./components/example.jsx";
import Adding from "./components/adding.jsx";
import TalkToSales from "./components/Talktosales.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="w-full md:w-10/12 mt-5 mx-auto px-4">
          <Intro />
          <Features />
          <Example />
          <Adding />
          <Reviews />
          <TalkToSales />
          <Last />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
