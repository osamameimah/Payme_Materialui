import Brand from "./components/Brand";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
 import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Support from "./components/Support";
 import UseMobile from "./components/UseMobile";
import WhyChoose from "./components/WhyChoose";
 
let App = () => {
  return (
    <>
       <Hero />
      <WhyChoose />
      <Steps/>
      <Feature/>
      <UseMobile/>
      <Support/>
      <Brand/>
      <Footer/>
      </>
  );
};

export default App;
