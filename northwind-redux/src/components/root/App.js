import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <div >

      <Container fluid>
        <Navi />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route payh="/saveproduct/:productId" element={<AddOrUpdateProduct />} />
        </Routes>


      </Container>
    </div>
  );
}

export default App;
