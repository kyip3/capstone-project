import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";

const Shop = () => {
  return <div>I am shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
