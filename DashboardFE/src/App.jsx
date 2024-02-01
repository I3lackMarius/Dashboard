import "./App.css";
import TopBar from "./components/01_TopBar/TopBar.jsx";
import LSideBar from "./components/02_LSideBar/LSideBar.jsx";
import Content from "./components/03_Content/Content.jsx";

function App() {
  return (
    <>
      <div className="app-container">
        <LSideBar />
        <div className="main-container">
          <TopBar />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
