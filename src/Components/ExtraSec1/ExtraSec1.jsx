import React from 'react';
import './ExtraSec1.css'
import g1 from './images/g-1.jpg'
import g2 from './images/g-2.jpg'
import g3 from './images/g-3.jpg'
import g4 from './images/g-4.jpg'
import g5 from './images/g-5.jpg'
import g6 from './images/g-6.jpg'
import g7 from './images/g-7.jpg'
import g8 from './images/g-8.jpg'


const ExtraSec1 = () => {
    return (
        <div style={{backgroundColor:"#18222d",paddingBottom:"3rem"}}>
                <section className="gallery container" id="gallery" style={{zIndex:"1",position:"relative"}}>

                <h1 className="heading text-center pt-5 pb-4" style={{fontFamily: 'Russo One',color:"lightgrey"}}> our food <span> gallery </span> </h1>

                <div className="box-container">

                    <div className="boxer">
                        <img src={g1} alt=""/>
                        <div className="content">
                            <h3>tasty food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                            <a href="#" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="boxer">
                        <img src={g2} alt=""/>
                        <div className="content">
                            <h3>tasty food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                            <a href="#" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="boxer">
                        <img src={g3} alt=""/>
                        <div className="content">
                            <h3>tasty food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                            <a href="#" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="boxer">
                        <img src={g4} alt=""/>
                        <div className="content">
                            <h3>tasty food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                            <a href="#" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="boxer">
                        <img src={g5} alt=""/>
                        <div className="content">
                            <h3>tasty food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                            <a href="#" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="boxer">
                        <img src={g6} alt=""/>
                        <div className="content">
                            <h3>tasty food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                            <a href="#" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="boxer">
                        <img src={g7} alt=""/>
                        <div className="content">
                            <h3>tasty food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                            <a href="#" className="btn">ordern now</a>
                        </div>
                    </div>
                    <div className="boxer">
                        <img src={g8} alt=""/>
                        <div className="content">
                            <h3>tasty food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                            <a href="#" className="btn">ordern now</a>
                        </div>
                    </div>
                

                </div>

                </section>
        </div>
        
    );
};

export default ExtraSec1;