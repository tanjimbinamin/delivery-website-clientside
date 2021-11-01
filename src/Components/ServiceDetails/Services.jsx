import React from 'react';
import { Col,Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Services = (props) => {
    const {_id,title,price,description,image}=props.data

    const history=useHistory();

    const handleService=(_id)=>{
        const url=`/services/${_id}`
        history.push(url)
    }
    return (
       
<Col  >
        <Card style={{boxShadow:"5.4px 10.7px 10.7px hsl(0deg 0% 0% / 0.33)",border:"auto",}} className="text-center d-flex justify-content-center align-items-center pb-4 h-100">
            <div style={{width:"400px",borderRadius:"20px",height:"300px"}}>
                <Card.Img variant="top" className="text-center" src={image} style={{width:"100%",height:"100%",overflow:"auto"}}/>
            </div>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               {description}
            </Card.Text>
            <Card.Text>
               Price: ${price}
            </Card.Text>
            </Card.Body>
            <Button onClick={()=>handleService(_id)} variant="info">Place Order</Button>
        </Card>
</Col>

     
    );
};

export default Services;