
import Card from 'react-bootstrap/Card';

function WithHeaderExample() {
  return (
    <Card>
        <p>
      <Card.Header><h1><h1 style={{fontSize:'150%'}}><em>Espresso Yourself</em></h1></h1></Card.Header></p>
      <Card.Body>
        <Card.Title><h3 style={{textAlign:'left'}}> About us...</h3> </Card.Title>
        <Card.Text>
        <h3 style={{textAlign:'left'}}> This is the Right Place to Start your Day! in a Good Way!</h3> 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;