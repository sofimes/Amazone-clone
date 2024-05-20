import "./App.css";
import Header from "./components/Header/Header.jsx";
import Carousel1 from "./components/carousel/Carousel1.jsx";
import Category from "./components/category/Category.jsx";
import Product from "./components/product/Product.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel1 />
      <Category />
      <Product />
    </div>
  );
}

export default App;
