import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './CarouselComponent.css'

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2c884c93466ca884.jpg?q=20" alt="" srcset="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2c884c93466ca884.jpg?q=20" alt="" srcset="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2c884c93466ca884.jpg?q=20" alt="" srcset="" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;