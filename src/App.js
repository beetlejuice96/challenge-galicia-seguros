import logo from "./logo.svg";
import "./App.css";
import Routes from "./router";
import AuthProvider from "./providers/authProvider/authProvider";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
