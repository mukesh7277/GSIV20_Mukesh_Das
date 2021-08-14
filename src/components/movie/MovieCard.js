import React from "react";
import "../../style.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function MovieCard(props) {
  return (
    <Card>
      <Link style={{textDecoration:'none'}} to={`/movie/${props.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.imgSrc}`}
        className="card-img-top"
        alt="..."
      />
      <Card.Body>
        <Row>
          <Col xs={6}>
            <b style={{fontSize:12}}>{props.title}</b>
          </Col>
          <Col>
            <span className="text-dark float-right">
              <b style={{fontSize:10}}>IMDB Rating : {props.imdb}</b>
            </span>
          </Col>
        </Row>
        <p className="card-text detail text-dark mt-3 textflow">{props.detail}</p> 
      </Card.Body>
        </Link>
    </Card>
  );
}
