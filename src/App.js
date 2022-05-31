import "./App.css";
import { Routers } from "./route/routers";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="main">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;
