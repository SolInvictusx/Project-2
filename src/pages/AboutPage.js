import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                        We present a curated database of the best campsites in the
                        vast woods and backcountry of the American Wilderness.
                        We increase access to adventure for the public while
                        promoting safe and respectful use of resources. The expert
                        wilderness trekkers on our staff personally verify each
                        campsite to make sure that they are up to our standards. We
                        also present a platform for campers to share reviews on
                        campsites they have visited with each other.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>August 8, 2017</dd>
                                <dt className='col-6'>No. of Campsites in 2022</dt>
                                <dd className='col-6'>35</dd>
                                <dt className='col-6'>No. of Reviews in 2022</dt>
                                <dd className='col-6'>16</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>11</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                    Fortuna favet fortibus, "Fortune Favors the Bold"
                                </p>
                                <footer className='blockquote-footer'>
                                    Pliny the Elder,{' '}
                                    <cite title='Source Title'>
                                        Mt. Vesuvius eruption event
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Community Partners</h3>
                </Col>
                <PartnersList />
            </Row>
        </Container>
    )
}

export default AboutPage;