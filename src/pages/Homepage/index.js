import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css'

const HomePage = () => {
    return (
        <section>
            <div className='card-box'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="assets/first.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='card-box'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="assets/second.avif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></div>
            <div className='card-box'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="assets/third.avif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></div>
            <div className='card-box'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="assets/first.jpeg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></div>
        </section>
    );
}

export default HomePage;