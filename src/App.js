import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import styled from "styled-components";

// import Footer from "./components/Footer";
import data from "./data";

function App() {
  const dataElement = data.map((item) => {
    return (
      <Footer
        key={item.id}
        number={item.number}
        img={item.img}
        title={item.title}
        description={item.description}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section>{dataElement}</section>
    </div>
  );
}

export default App;
