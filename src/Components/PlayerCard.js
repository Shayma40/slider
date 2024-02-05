import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PlayerCard = ({ name, team, nationality, age, image, jerseyNumber }) => {
    const handleClick = () => alert
        (`${name} love to play in ${team}`);
return (

    <Card style={{ 
        width: '18rem',
        border: '1px solid black',
        margin: '0.5rem',
        borderRadius: '2rem',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        border: 'none',
        backgroundColor: 'lightgrey',
        }}>
    <Card.Img style={{
        width: '10rem',
        height: '10rem',
        margin: '1rem', 
        marginLeft: '4rem',
        marginRight: '1.5rem',
        borderRadius: '50%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }} 
        variant= "top" src= {image} />
    <Card.Body style={{
        marginLeft: '1rem',
        marginRight: '1rem',
    }}>
    <Card.Title style={{
        textAlign: 'center',
        color: 'purple',
        fontSize:'1.1vw',
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif'
    }}
    >{name}</Card.Title>
    <Card.Text style={{
        textAlign: 'center', 
        fontSize:'1vw',
        fontFamily: 'cursive',
        color: 'violet'
    }}>
        Team: {team} <br/>
        Nationality: {nationality} <br/>
        Age: {age} <br/>
        Jersey Number: {jerseyNumber} <br/>
    </Card.Text>
    <Button style= {{
        width: '100%',
        backgroundColor: 'darkviolet',
        color: 'white',
        fontFamily: 'cursive',
        fontSize: '1vw',
        fontWeight: 'bold',
        borderRadius: '15rem',
        border: 'none',
        margin: '0.5rem',
        padding: '.25rem .75rem',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }} 
    onClick={handleClick}>Click Here</Button>
    </Card.Body>
</Card>
);
}

export default PlayerCard