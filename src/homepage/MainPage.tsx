import React from 'react';
import './MainPage.css';
import Header from "./Header";
import Notification from "./Notification";
import PlaceholderConnect from "./PlaceholderConnect";
import {texts} from "../texts/texts"


function MainPage() {


    return (
      <React.Fragment>
          <Header/>
          <Notification/>
          <div className='main_page'>
              <div className='first_part'>
                  <div className='text_comp'>
                      <p id='exploreText'>{texts.explore}</p>
                      <p id='main_text'>
                          {texts.in}
                          <span className='highlight'>{texts.our} </span> {texts.metaverse}

                      </p>
                      <div className='elipse5'/>
                      <div className='elipse4'/>
                      <div className='elipse'/>
                      <div className='elipse2'/>
                      <div className='elipse3'/>
                      <img className='dot_main1' src={'dot.svg'} alt='dot'/>
                      <img className='dot_main2' src={'dot.svg'} alt='dot'/>
                      <img className='dataFrame' src={'dataFrame.svg'} alt='data'/>
                      <div className="circle__box">
                          <div className="circle__wrapper circle__wrapper--right">
                              <div className="circle__whole circle__right "></div>
                          </div>
                      </div>
                      <img id='planet' src={'Planet.svg'} alt='planet'/>
                  </div>
                  <div className='roadmap_stats'>
                  <p className='right_part'>{texts.roadmap}</p>
                      <p className='numbers'> {texts.number}</p>
                      <p className='text_under_numbers'> {texts.textUnderNumbers} </p>
                      <div className='line'></div>
                      <p className='numbers'> {texts.number}</p>
                      <p className='text_under_numbers'> {texts.textUnderNumbers} </p>
                      <div className='line'></div>
                      <p className='numbers'> {texts.number}</p>
                      <p className='text_under_numbers'> {texts.textUnderNumbers} </p>
                  </div>
              </div>
              <p className='text_under_first_part'> {texts.mainText} </p>

              <div className='second_part'>
                  <PlaceholderConnect/>
              </div>
          </div>


      </React.Fragment>
    );
}

export default MainPage;
