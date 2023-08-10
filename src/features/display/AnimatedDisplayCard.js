import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    const handleClick = () => {
        console.log(`Button clicked for item: ${name}`);
    };

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CardTitle>{name}</CardTitle>
                        <Link to={`/path/to/${item.id}`}>
                            <Button onClick={handleClick} style={{ marginLeft: '10px' }}>Click Me</Button>
                        </Link>
                    </div>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;
