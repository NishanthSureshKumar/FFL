import React, { Component } from 'react';
import { ArrowRight, ArrowRightCircleFill, CaretRightFill, Search } from "react-bootstrap-icons";
import { Carousel, Container, Row, Col, Button, Figure, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css';
import img from './logo.jpg';
import img1 from './media/FRL-circle-logo.png'


class Home extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm " id='navbar'>
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Company</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Global Presense</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-sm " id='goat'>
                    <img src={img} alt='logo' />
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">What We Do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sectors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Applications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Industry</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Insights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Reference Projects</a>
                            </li>
                        </ul>
                        <Search />
                    </div>
                </nav>
                <div class="container" id="empty">
                    <p>p</p>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.foodresearchlab.com/wp-content/uploads/2022/08/Food-Research-Lab-Home-Banner.webp"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.foodresearchlab.com/wp-content/uploads/2022/06/Food-Research-Image-Banner.webp"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container" id="para">
                    <h2>Our expertise provides food companies a leg up on the competition by helping them to better their products
                        and services for their customers.</h2>
                </div>
                <div className="homeban">
                    <img src={img1} width={76} height={76} alt='logo' />;
                </div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <img src="https://www.foodresearchlab.com/wp-content/uploads/2022/04/About-FRL.png" width={48} height={48} />
                            <h4>About FRL</h4>
                            <p>We pride ourselves on delivering high-quality products that truly make a difference. We've worked on so
                                many exciting projects for companies across the globe, each one as unique as the next. For every
                                project, we always focus on the individual needs of our clients and strive to achieve something that
                                we're proud to put our name to.</p>
                            <h6>If you want to know more about our process, please click <b>here</b>.</h6>
                            <Button variant="primary">About Us   <ArrowRight /></Button>{' '}
                        </Col>
                        <Col md={4}>
                            <img src="https://www.foodresearchlab.com/wp-content/uploads/2022/04/Our-Team.png" width={48} height={48}/>
                            <h4>Our Team</h4>
                            <p>Food & Nutraceutical Contract Research Lab is a pilot R&D Lab with our diverse background and expertise.
                                Our team of industry experts have over 50+ years of combined experience in the food and nutraceutical
                                industry. We blend culinary (chefs) and scientific expertise (product developers that include food
                                technologists, nutritionists, organic chemists, microbiologists &, and researchers) to drive food
                                forward.</p>

                            <ArrowRight />
                        </Col>
                        <Col md={4}>
                            <img src="https://www.foodresearchlab.com/wp-content/uploads/2022/04/Our-Facility.png" width={48} height={48} />
                            <h4>Our Facility</h4>
                            <p>Our contract lab facility is equipped with a formulation kitchen, nutraceutical lab, ingredient & product
                                analyses lab, microbiology, sensory booths, packaging, pilot plant, conference & presentation room,
                                photography studio, clinical trial & regulatory room and plenty of desk space. Our clients are welcome
                                to visit our facilities or remotely watch live streaming.</p>
                            <ArrowRight />
                        </Col>
                    </Row>
                </Container>
                <div className="container" id="foodr">
                    <h1>Discover Pepgra’s Food Research Lab 360° Solutions</h1>
                    <p>Our Food & Nutraceuticals contract research lab offers a range of solutions providing custom formulating,
                        testing, blending and packaging of a large variety of food and nutritional products. Our goal is to ignite
                        ideas that ultimately propel our customer</p>
                </div>
                <Container>
                    <Row>
                        <Col lg='4' md='12' className='mb-4'>
                            <img src='https://www.foodresearchlab.com/wp-content/uploads/2022/08/Food-Product-Development.webp'
                                className='img-fluid rounded' alt='' />
                            <Figure.Caption>
                                <h5>Food Product Development</h5>
                                <p>Using scientific discipline, Food Research Lab’s experienced food…</p>
                            </Figure.Caption>
                            <ArrowRight />
                        </Col>

                        <Col lg='4' md='6' className='mb-4'>
                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/08/Beverages-Formulation.webp'
                                className='img-fluid rounded'
                                alt='' />
                            <Figure.Caption>
                                <h5>Beverages Formulation</h5>
                                <p>At Pepgra’s Food Research Lab, we take your drink concept into…</p>
                            </Figure.Caption>
                            <ArrowRight />
                        </Col>

                        <Col lg='4' md='6' className='mb-4'>
                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/08/Nutraceutical-Formulations.webp'
                                className='img-fluid rounded'
                                alt='' />
                            <Figure.Caption>
                                <h5>Nutraceutical-Formulation</h5>
                                <p>Health promotion and illness risk reduction require functional food...</p>
                            </Figure.Caption>
                            <ArrowRight />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='4' md='12' className='mb-4'>
                            <img src='https://www.foodresearchlab.com/wp-content/uploads/2022/08/Microbiome-Solutions.webp'
                                className='img-fluid rounded' alt='' />
                            <Figure.Caption>
                                <h5>Microbiome Solutions</h5>
                                <p>Pepgra’s Food Research Lab assists with end-to-end innovation and value…</p>
                            </Figure.Caption>
                            <ArrowRight />
                        </Col>

                        <Col lg='4' md='6' className='mb-4'>
                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/08/Cosmeceutical-Product-Development.webp'
                                className='img-fluid rounded'
                                alt='' />
                            <Figure.Caption>
                                <h5>Cosmeceutical Product Development</h5>
                                <p>Cosmeceuticals are skin care products that have both aesthetic and therapeutic…</p>
                            </Figure.Caption>
                            <ArrowRight />
                        </Col>

                        <Col lg='4' md='6' className='mb-4'>
                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/08/Flavour-Fragrance-Development.webp'
                                className='img-fluid rounded'
                                alt='' />
                            <Figure.Caption>
                                <h5>Flavour & Fragrance Development</h5>
                                <p>Pepgra’s FRL in-house flavour and fragrance development team can…</p>
                            </Figure.Caption>
                            <ArrowRight />
                        </Col>
                    </Row>
                    <Button variant="primary">View More   <ArrowRight /></Button>{' '}
                </Container>
                <Container>
                    <h2>The Pepgra’s Food Research Lab Legacy around the World</h2>
                    <p>At Food Researcher Lab, we leverage over 50 years of scientific and entrepreneurial expertise to answer food
                        and nutraceutical industry needs</p>

                    <Row>
                        <Col md='6'>
                            <p>We collaborate with food and ingredient manufacturing companies, nutrition companies, hotels, hospitals,
                                and wellness centres and from small start-ups to global corporations, either as an advisor or external
                                contract research and development.<br />
                                By drawing on the latest scientific evidence-based research, our food scientists work directly with you
                                to develop, engineer and refine proprietary products for optimal ingredient functionality and high
                                consumer acceptance.<br />
                                Today, we offer comprehensive solutions to support our clients, from product development to market
                                suitability, while contributing to consumers’ health worldwide. Our partnered periphery contract labs
                                are located across the globe and managed from India.<br />
                                We always believe that together, we can create solutions to offer our planet:
                            </p>
                        </Col>
                        <Col md='6'>
                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Concept-Innovation.png'
                                className='img-fluid rounded-circle'
                                alt='' /><span>Concept & Innovation</span>

                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Pilot-Scale.png'
                                className='img-fluid rounded-circle'
                                alt='' /><span>Concept & Innovation</span><br />

                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Product-Development.png'
                                className='img-fluid rounded-circle'
                                alt='' /><span>Concept & Innovation</span>

                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Commercial.png'
                                className='img-fluid rounded-circle'
                                alt='' /><span>Concept & Innovation</span><br />

                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Marketing-Communication.png'
                                className='img-fluid rounded-circle'
                                alt='' /><span>Concept & Innovation</span>
                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Regulatory.png'
                                className='img-fluid rounded-circle'
                                alt='' /><span>Concept & Innovation</span>
                        </Col>
                    </Row>
                </Container >
                <Container>
                    <h2>Food Certifications</h2>
                    <p>We help you to comply with guidelines and attain certifications that you need.</p>
                    <Row>
                        <Col md='3'><img
                            src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/ISO-Certified.png'
                            className='img-fluid rounded-circle'
                            alt='' />
                        </Col>
                        <Col md='3'><img
                            src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/Fsaai.png'
                            className='img-fluid rounded-circle'
                            alt='' />
                        </Col>
                        <Col md='3'><img
                            src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/Import.png'
                            className='img-fluid rounded-circle'
                            alt='' />
                        </Col>
                        <Col md='3'><img
                            src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/MSDS.png'
                            className='img-fluid rounded-circle'
                            alt='' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'><img
                            src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/HALAL.png'
                            className='img-fluid rounded-circle'
                            alt='' />
                        </Col>
                        <Col md='3'><img
                            src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/FSSC.png'
                            className='img-fluid rounded-circle'
                            alt='' />
                        </Col>
                        <Col md='3'><img
                            src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/Kosher.png'
                            className='img-fluid rounded-circle'
                            alt='' />
                        </Col>
                        <Col md='3'><img
                            src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/GMP.png'
                            className='img-fluid rounded-circle'
                            alt='' />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2>Sectors we serve</h2>
                    <Row>
                        <h2>Who we work for... <ArrowRight /></h2>
                        <Col>
                            <p><CaretRightFill />Manufacturers & Start-ups</p>
                            <p><CaretRightFill />Nutrition & Nutraceutical</p>
                            <p><CaretRightFill />Hospitals & Wellness centres</p>
                            <p><CaretRightFill />Sensory & Consumer Science</p>
                            <p><CaretRightFill />Industry & Market Research</p>
                            <p><CaretRightFill />Packaging Industry</p>
                            <p><CaretRightFill />Technology & Marketing</p>
                            <h5>Our Applications<ArrowRight /></h5>
                        </Col>

                        <Col>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Soft-Drinks-Water.jpg' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Soft Drink Industy  <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/06/Energy-Sports-Drink.png' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Sports Drinks  <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Chewing-gum.jpg' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Chewing gum   <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Juice-drinks.jpg' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Fruit Juice Industry   <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Shakes.jpg' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Snacking  <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Non-dairy-cheese.jpg' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Chocolate & Confectionery   <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Soups.jpg' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Soups  <ArrowRightCircleFill /></p>
                            <h5>Our Sectors<ArrowRight /></h5>
                        </Col>
                        <Col>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Chips-tortilla.jpg' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Chips, tortilla  <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Sauces-and-dips-1.png' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Sauces and dips   <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Preserves.png' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Preserves   <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Energy-Sports-Drinks-2.png' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Cider & Perry    <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Nutrition.png' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Savory & Culinary   <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Dairy-Icecream.png' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Dairy Industry   <ArrowRightCircleFill /></p>
                            <p><img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/05/Dry-beverage-powder.png' width={39} height={39}
                                className='img rounded-circle'
                                alt='' />Fruit Wine & Spirit Industry   <ArrowRightCircleFill /></p>
                            <h5>Our Deliverables in the form of <ArrowRight /></h5>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2>Food Certifications</h2>
                    <p>We help you to comply with guidelines and attain certifications that you need.</p>
                    <Row>
                        <Col lg='4' md='12' className='mb-4'>
                            <img src='https://www.foodresearchlab.com/wp-content/uploads/2022/01/Thumbnail-Image-Organic-Bueberry-Smoothie.jpg' 
                                className='img-fluid rounded' alt='' />
                            <Figure.Caption>
                                <h5>Organic Bueberry Smoothie<ArrowRightCircleFill /></h5>
                                <p>Food Research Lab formulated a smoothie powder that had fine…</p>
                            </Figure.Caption>

                        </Col>

                        <Col lg='4' md='6' className='mb-4'>
                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/01/Thumbnail-Image-Health-Drink-For-Children.jpg' 
                                className='img-fluid rounded'
                                alt='' />
                            <Figure.Caption>
                                <h5>Health Drink For Children<ArrowRightCircleFill /></h5>
                                <p>One of our clients consulted us to decide which type of product...</p>
                            </Figure.Caption>

                        </Col>

                        <Col lg='4' md='6' className='mb-4'>
                            <img
                                src='https://www.foodresearchlab.com/wp-content/uploads/2022/01/Thumbnail-Image-Vegan-Healthy-Meal-Replacement.jpg' 
                                className='img-fluid rounded'
                                alt='' />
                            <Figure.Caption>
                                <h5>Vegan Healthy Meal Replacement <ArrowRightCircleFill /></h5>
                                <p>A client from Mumbai, India, contacted Food Research Lab...</p>
                            </Figure.Caption>

                        </Col>
                    </Row>
                </Container>





            </>
        );
    }
}

export default Home;