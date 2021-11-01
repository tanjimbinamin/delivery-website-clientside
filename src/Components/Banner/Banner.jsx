import React from 'react';
import { Container ,Row, Col} from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{backgroundColor:"#f0e7cd",paddingBottom:"8rem",zIndex:"2"}} >
            <Container >
                <Row className=" pt-5">
                    <Col>
                        <div className="content mt-5 w-80 ms-5 " >
                            <span  style={{fontSize:"2rem"}}>our special dish</span>
                            <h3 className="mt-4 mb-5" style={{fontSize:"5rem",fontFamily: 'Fruktur'}}>hot <span style={{color:"coral"}}>pizza</span> </h3>
                            <b style={{color:"black"}}>If you think that developing a restaurant website is expensive and takes a lot of time, you are wrong. Check out the best pizza website templates, thanks to which your restaurant can launch a website quickly, easily, and start increasing sales, numbers of online orders, and your profits.</b>
                            <br />
                            <a href="#" className="btn btn-outline-success" style={{marginTop:"2rem"}}>order now</a>
                        </div>
                   </Col>
                    <Col >
                        <div style={{width:"400px", marginLeft:"auto",marginRight:"auto"}} className="text-center">
                            <img style={{width:"100%"}} src="https://i.ibb.co/2gSpNPs/home-img-3.png" alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;