import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 10, offset: 1 }} sm='12'>
                        <h5>Links</h5>
                        <div className='footer-links'>
                            <Link to='/'>Home</Link>
                            <Link to='/directory'>Directory</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/contact'>Contact</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
