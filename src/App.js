import logo from "./logo.svg";
import "./App.css";
import Routes from "./router";
import AuthProvider from "./providers/authProvider/authProvider";
import CssBaseline from "@mui/material/CssBaseline";
import ErrorProvider from "./providers/errorProvider/ErrorProvider";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ErrorProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ErrorProvider>
    </div>
  );
}

export default App;
