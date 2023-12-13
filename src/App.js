import './App.css';
import { Client } from './Component/Clientcard';
import { Faqs } from './Component/FAQ/Faq';
import { Foot } from './Component/Footer';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Intro from './Component/IntroductionC';
import { News } from './Component/Newsletter';
import PracticeA from './Component/Practice';
import Teamguys from './Component/Teamdata';

function App() {
  return (
   <div className='App'>
    <Header/>
    <Hero/>
     <Intro/>
     <PracticeA/>
     <Client/>
     <Teamguys/>
     <Faqs/>
     <News/>
     <Foot/>
   </div>
   )
}

export default App;
