import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
    return (
    <div className="listmovie">
{props.movie.map((el,i)=><Link key={i} to={`/description/${el.id}`}>
    <div>
<Card style={{ width: '16rem' }}>
<Card.Img variant="top" src={el.posterURL} width={254} height={380} />
<Card.Body>
    <Card.Title className="title">{el.title}</Card.Title>
    
    <ReactStars  value={el.rating} >
</ReactStars>     
    
</Card.Body>
</Card>
</div>
</Link>)}  </div>
    );
};
export default MovieList;