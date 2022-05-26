import "./App.css";
import Header from "../src/HeaderComponent/HeaderComponent.js";
import Footer from "../src/FooterComponent/FooterComponent.js";
import Alert from "../src/AlertComponent/AlertComponent.js";
import IpadPro from "../src/IpadProComponent/IpadProComponent.js";
import MacBookAir from "../src/MacBookAirComponent/MacBookAirComponent.js";
import IphoneElevenPro from "../src/IphoneElevenProComponent/IphoneElevenProComponent.js";
import FourthSection from "../src/FourthSectionComponent/FourthSectionComponent.js";
import FivthSection from "../src/FivethSectionComponent/FivethSectionComponent.js";
import SixthSection from "../src/SixthComponent/SixthComponent.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <IpadPro />
      <MacBookAir />
      <IphoneElevenPro />
      <FourthSection />
      <FivthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}

export default App;
