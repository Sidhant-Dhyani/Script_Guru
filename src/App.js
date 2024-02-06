import './App.css';
import Carousel from './components/Carousel/CarouselComponent';
import Dropdown from './components/Dropdown/DropdownComp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Dropdown />
      <Carousel />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;