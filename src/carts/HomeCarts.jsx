import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import './homecart.css'

function HomeCarts() {
  return (
    <CardGroup className="cardgroup">
      <Card className="card">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1583577612013-4fecf7bf8f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80"
        />
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1612882514163-c9b0045b621c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1517241165176-52610c81d064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
        />
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1600841909485-03146c24b014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </Card>
    </CardGroup>
  );
}

export default HomeCarts;
