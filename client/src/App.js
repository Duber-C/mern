import "./App.css";
import Login from "./auth/login";

function App() {
  return (
    <main
      className="App"
      style={{
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Login />
    </main>
  );
}

export default App;
