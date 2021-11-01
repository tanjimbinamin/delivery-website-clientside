import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from '../ServiceDetails/Services';
import './Service.css'

const Service = () => {

    const [datas,setDatas]=useState([])

    useEffect(()=>{
        fetch('https://obscure-wave-24380.herokuapp.com/allServices')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])

    console.log(datas);
    return (
        <div className="pb-5 mb-5">
            <div className="text-center mt-5 mb-5">
                <h3 style={{color:"lightcoral"}}>Our Menu</h3>
                <h3 style={{fontSize:"3rem",fontFamily: 'Russo One'}}>Today's speciality</h3>
            </div>
            <Container>
                <Row xs={1} md={3} className="g-5">
                    {
                        datas.map(data=> <Services key={data._id} data={data}></Services>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;