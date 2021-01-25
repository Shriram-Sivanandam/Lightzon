import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import ImageSlider from './components/ImageSlider';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Form />
      <Services />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
