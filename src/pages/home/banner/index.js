import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../statics/pic1.jpg';
import pic2 from '../../../statics/pic2.jpg';
import pic3 from '../../../statics/pic3.jpg';

class Banner extends Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        src={pic1}
                        width="100%"
                        alt="幸运手杖"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={pic2}
                        width="100%"
                        alt="幸运手杖"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={pic3}
                        width="100%"
                        alt="幸运手杖"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Banner;