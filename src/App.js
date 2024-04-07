import Navbar from './components/navbar';
import './App.css';
import Normalheading from './components/mainHeading';
import Productsdetails from './components/productdetails';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Normalheading />
      <Productsdetails />
      <Footer />
    </div>
  );
}

export default App;
