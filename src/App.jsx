import Navbar from './sharred/navbar/Navbar';
import HeroBanner from './components/heroBanner/HeroBanner';
import Card from './components/card/Card';
import Fixit from './components/fixit/Fixit';
import ProfessionalRepair from './components/professionalRepair/ProfessionalRepair';
import VedioPart from './components/vedioPart/VedioPart';
import MobileRepair from './components/mobileRepair/MobileRepair';
import Tab1 from './components/tab1/Tab1';
import MostDiscounted from './components/mostDiscounted/MostDisCounted';
import BestFeature from './components/bestFeature/BestFeature';
import HowWorks from './components/howWorks/HowWorks';
import WhycChoose from './components/whyChoose/WhycChoose';
import Footer from './sharred/footer/Footer';




const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            {/* <HeroBanner /> */}
            {/* <Card /> */}
            {/* <Fixit /> */}
            {/* <ProfessionalRepair /> */}
            {/* <VedioPart /> */}
            {/* <MobileRepair /> */}
            <Tab1 />
            <MostDiscounted />
            {/* <BestFeature /> */}
            {/* <HowWorks /> */}
            {/* <WhycChoose /> */}
            {/* <Footer/> */}
         

        </div>
    );
};

export default App;