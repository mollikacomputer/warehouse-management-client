import Products from "../Products/Products";

const Inventory = () => {

  return (
    <div >
      <Products></Products>
    </div>
  );
};

export default Inventory;

/**
<Row xs={1} md={2} lg={3} className="g-4">
        
          <Col>
            {
              products.map( product => <Card>
                <Card.Img variant="top" src={product.picture} />
                <Card.Body>
                <Card.Title>
                  {product.name}
                </Card.Title>
                <Card.Text>
                  {product.price}
                </Card.Text>
                </Card.Body>
              </Card> ,[])
            }
          </Col>
        
      </Row>
 */
