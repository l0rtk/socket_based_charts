import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import OrderBook from "./components/OrderBook";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order-book" element={<OrderBook />} />
        </Routes>
      </header>
    </div>
  </Router>
);

export default App;
