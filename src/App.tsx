import { Footer, Logo, Nav } from "./components";
import { Routes } from "./routes";

export const App = () => {
  return (
    <div className="col-sm-12">
      <Nav />
      <Logo />
      <Routes />
      <Footer />
    </div>
  );
};
