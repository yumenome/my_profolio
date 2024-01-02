import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar';
import HeroBanner from './components/HeroBanner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <HeroBanner id='intro'/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
