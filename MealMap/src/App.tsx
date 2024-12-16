import './index.css';
import Home from "./Pages/home";
import TopBar from "./Pages/TopBar";

function App() {
  return (
      <>
    <div style={{ height: "100vh" }}>
      <TopBar />
      <Home/>
      
    </div>
    </>
  );
}

export default App;
