import Navbar from './components/navbar';
import './App.css';
import Normalheading from './components/mainHeading';
import Productsdetails from './components/productdetails';
import Footer from './components/footer';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Appscrip</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navbar />
        <Normalheading />
        <Productsdetails />
        <Footer />
      </div>

    </div>
  );
}

export default App;
