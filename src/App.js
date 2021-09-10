import DribbleSections from "./components/DribbleSection";
import EtsySections from "./components/EstySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InstaSections from "./components/InstaSections";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div className="App">
      <Header />
      <InstaSections />
      <EtsySections />
      <DribbleSections />
      <Footer />
    </div>
  );
}

export default App;
