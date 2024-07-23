import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import InvalidRoute from "./page/InvalidPage";
import Price from "./page/Price";
import ProductDesign from "./page/ProductDesign";
import ProductDiscovery from "./page/ProductDiscovery";
import ProductEngineering from "./page/ProductEngineering";

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/our_approach/">
            <Route index element={<ProductDesign />} />
            <Route path="design" element={<ProductDesign />} />
            <Route path="discovery" element={<ProductDiscovery />} />
            <Route path="Engineering" element={<ProductEngineering />} />
          </Route>
          <Route path="/price" element={<Price />} />
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
