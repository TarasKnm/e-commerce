import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
function App() {
  const [token, setToken] = useState('');

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
