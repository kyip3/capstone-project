import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>i am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};
const Shop = () => {
  return <div>I am shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
