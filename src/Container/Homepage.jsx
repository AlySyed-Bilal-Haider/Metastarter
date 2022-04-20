import React from 'react'
import Mainheader from './Mainheader/Mainheader';
import Gamenft from './GameNFT/Gamenft';
import Projects from './Activeproject/Projects';
import Aboutus from './Aboutsus/Aboutus';
import Lunchproject from './Lunchproject';
import Tokenlock from './Tokenlocker';
import Tokenmint from './Tokenminter';
import Tokendistribution from './Tokendistribution';
import Partner from './Partner';
import Newsmedia from './Newsmedia';
import Newsleterr from './Newsleterr';
import QuestionsASK from './Questions';
import Footer from './Footer';
import Footersocial from './Footersocial';
import MultipleItems from './Slickslider.jsx';
function Homepage() {
  return <>
    <Mainheader/>
    <Gamenft/>
    <Projects/>
    <Aboutus/>
    <Lunchproject/>
    <Tokenmint/>
    <Tokenlock/>
    <Tokendistribution/>
    <MultipleItems/>
    <Partner/>
    <Newsmedia/>
    <Newsleterr/>
    <QuestionsASK/>
    <Footer/>
    <Footersocial/> 
  </>
}

export default Homepage