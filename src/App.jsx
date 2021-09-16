import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Pricing } from "./components/pricing";
import { Privacy } from "./components/privacy";
import { Refund } from "./components/refund";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  if (window.location.pathname === "/privacy-policy") {
    return(
      <div>
        <Navigation actions={false} />
        <Privacy />
        <Contact data={landingPageData.Contact} />
      </div>
    )
  };
  
  if (window.location.pathname === "/refund-policy") {
    return(
      <div>
        <Navigation actions={false} />
        <Refund />
        <Contact data={landingPageData.Contact} />
      </div>
    )
  };

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Pricing />
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
