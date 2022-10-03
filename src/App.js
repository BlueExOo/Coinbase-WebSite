import React from "react";

import {
  Navbar,
  Home,
  DailyPrices,
  About,
  Services,
  SignUp,
  RoadMap,
  NewsLetter,
  Footer,
  ScrollToTop,
} from "../src/components";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <DailyPrices />
      <About />
      <Services />
      <SignUp />
      <RoadMap />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
