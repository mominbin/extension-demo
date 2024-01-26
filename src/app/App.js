import Header from './components/Header';
import Banner from './containers/Banner';
import Features from './containers/Features';
import CallToAction from './containers/CallToAction';
import ScreenShots from './containers/ScreenShots';
import TestCarousel from './containers/TestCarousel';

function App() {
  return (
    <div className="body-wrap">
      <Header />
      <Banner />
      <Features />
      <CallToAction />
      <ScreenShots />
      <TestCarousel />
    </div>
  );
}
export default App;
