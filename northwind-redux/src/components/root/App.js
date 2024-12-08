import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div >

      <Container fluid>
        <Navi />
        <Dashboard />

      </Container>
    </div>
  );
}

export default App;
