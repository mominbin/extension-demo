import Header from './containers/Header';
import Banner from './containers/Banner';
import Features from './containers/Features';
import CallToAction from './containers/CallToAction';
import ScreenShots from './containers/ScreenShots';
import Faq from './containers/Faq';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="body-wrap">
      <Header />
      <Banner />
      <Features />
      <CallToAction />
      <ScreenShots />
      <Faq />
      <Footer />
    </div>
  );
}
export default App;
