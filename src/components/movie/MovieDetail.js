import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import Home from "../../images/home.png"
import "../../style.css"

export default function MovieDetail(props) {
  const params = useParams();
  const { id } = params;
  const [movieslist, setMovieslist] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4fad5a3d6ae0c2e56603adb6b238ebe4&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        let obj = [data];
        console.log({obj})
        setMovieslist(
          obj.map(item => {
            return (
              <div key={item.id}>
                <Row >
                  <Col sm={2}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${
                        item.poster_path
                      }`}
                      className="img-thumbnail mb-3"
                      alt={item.title}
                    />
                  </Col><Col>
                  <Col sm={10} className="mt-auto mb-auto text-center" >
                    <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
                    <h1 className="text-center">{item.title}</h1>
                    <span className="mr-3">
                          <b>( Rating :</b>{item.vote_average} <b>)</b>
                        </span>
                        </div>
                      <Col sm={12}>
                        <span><b>Year : </b>{item.release_date}    </span><span>|</span>
                        <span><b> Length : </b>{item.runtime}min  </span><span>|</span>
                        <span className="mr-3">
                          <b> Popularity :</b>  {item.popularity}
                        </span>
                      </Col>
                      </Col>
                    <p className=" mt-3">{item.overview}</p>
                  </Col>
                </Row>
              </div>
            );
          })
        ); 
      });
  }, []);
  return (
    <>
      {/* <Breadcrumb className="bg-success mt-3"> */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:"center",padding:"20 0 20 0"}} className="box">
          <h4>Movie Details</h4>
          <br/>
          <span style={{marginLeft:'50vw'}} className="breadcrumb-item">
            <Link to="/"><img style={{width:30}} src={Home} alt="img"/></Link>
          </span>
        </div>
      {/* </Breadcrumb> */}
      {movieslist}
    </>
  );
}
