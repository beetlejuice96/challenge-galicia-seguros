import logo from "./logo.svg";
import "./App.css";
import Routes from "./router";
import AuthProvider from "./providers/authProvider/authProvider";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f2f3ee" }}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
