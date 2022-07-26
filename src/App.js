import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Authentication from "./components/authentication/authentication.component";

const Shop = () => {
  return <div>I am shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
