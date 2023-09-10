import Navbar from "../src/components/navbar";
import Home from "../src/components/Home";
import SocialLinks from "../src/components/social_links";
import About from "../src/components/about";
import Portfolio from "../src/components/expertise"
import Contact from "../src/components/contact"
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <SocialLinks/>
      
    </div>
  );
}

export default App;
