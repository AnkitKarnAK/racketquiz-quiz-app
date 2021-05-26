import "./App.css";
import { Button } from "@material-ui/core";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button variant="contained" color="primary">
        Test
      </Button>
    </div>
  );
}

export default App;
