import React from 'react';
import Header from '../../common/header/Header';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import './Details.css';
// import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const Details = (props) =>
{
// const colourItYellow = (starNumber) => {
//     if(starNumber === "firstStar"){
//         document.getElementById("firstStar").style.borderColor="Yellow";
//     }
// }


        const [movieDetails, setMovieDetails] = useState({});
        const [trailerURL, setTrailerURL] = useState("");
        const [artistsList, setArtistsList] = useState([]);

        // Godfather id : 009ae262-a234-11e8-b475-720006ceb890
        
        useEffect(() => {
        const url = props.baseUrl + "movies/" + props.match.params.id ;

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET"
                  });
                const res = await response.json();
                setMovieDetails(res);
                setTrailerURL(res["trailer_url"]);
                setArtistsList(res["artists"]);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return(

        <div>
            <Header enableButton="true" movieId={movieDetails["id"]}></Header>
            
            <Typography className="backToHome">
              <Link to="/" >  
                 {"< Back to Home"}
                 </Link>
            </Typography>

            <div className="flex-container">
                <div className="left">
                <img src={movieDetails["poster_url"]} alt={movieDetails["title"]} />
                </div>

                <div className="center">
                    <Typography variant="headline">
                            <h2>{movieDetails["title"]}</h2>
                    </Typography>
                    <Typography variant="bold" >
                            Genre: {movieDetails["genres"]}
                    </Typography>
                    <Typography variant="bold">
                            Duration: {movieDetails["duration"]}
                    </Typography>
                    <Typography variant="bold">
                            Release Date: {movieDetails["release_date"]}
                    </Typography>
                    <Typography variant="bold">
                            Rating: {movieDetails["rating"]}
                    </Typography>
                    <Typography style={{marginTop:'16px'}} variant="bold">
                            Plot: <a href={movieDetails["wiki_url"]}>(Wiki Link) </a> {movieDetails["storyline"]}
                    </Typography>
                    <Typography style={{marginTop:'16px'}} variant="bold">
                            Trailer: 
                            {/* Trailer:<a href={movieDetails["trailer_url"]}>Trailer</a> */}
                            <YouTube videoId={trailerURL.split("=").pop()} />
                    </Typography>
                </div>

                <div className="right">
                    <Typography variant="bold" >
                            Rate this movie:
                    </Typography>

                    <StarBorderIcon id="firstStar" fontSize="inherit" color="black" onClick={this.color="Yellow"} />
                    <StarBorderIcon id="secondStar" fontSize="inherit" color="black" />
                    <StarBorderIcon id="thirdStar" fontSize="inherit" color="black" />
                    <StarBorderIcon id="fourthStar" fontSize="inherit" color="black" />
                    <StarBorderIcon id="fifthStar" fontSize="inherit" color="black" />

                    <Typography style={{marginTop:'16px', margineBottom:'16px'}} variant="bold">
                            Artists:
                    </Typography>

                <ImageList rowHeight={250} cols={2}>
                    {
                        artistsList.map((item) => (
                            <ImageListItem >
                                <img src={item["profile_url"]} alt=""/>
                                <ImageListItemBar title={item["first_name"]+" "+item["last_name"]}  /> 
                            </ImageListItem>
                        ))
                    }
                
             </ImageList>
                </div>
            </div>
        </div>
    );
}

export default Details;

