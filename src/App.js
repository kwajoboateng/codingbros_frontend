import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./common/home.js";
import Shop from './features/shop/shop.js';
// import Blog from './features/blog/blog.js';
import NavBar from "./common/navbar/navbar.js";
// import Footer from "./common/footer/footer.js";
import './common/common.css';


function App() {
  return(
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          {/* <Route path="/blog" element={<Blog/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
