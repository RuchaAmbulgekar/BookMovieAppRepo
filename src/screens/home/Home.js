import React, {useState, useEffect} from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from '@material-ui/core';
import { Link } from "react-router-dom";
// import { createMuiTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
// import green from "@material-ui/core/colors/green";



// const theme = createMuiTheme({
//     palette: {
//       primary: purple,
//       secondary: green
//     }
//   });


const Home = (props) =>{

    const [state, setState] = React.useState({});


      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

      //Get movie data using fetch 

        const [movies, setMovies] = useState([]);

        useEffect(() => {
        const url = "http://localhost:8085/api/v1/movies?page=1&limit=10&status=RELEASED";

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET"
                  });
                const res = await response.json();
                setMovies(res.movies);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const [upcomingMovies, setUpcomingMovies] = useState([]);

        useEffect(() => {
        const url = "http://localhost:8085/api/v1/movies?page=1&limit=10&status=PUBLISHED";

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET"
                  });
                const res = await response.json();
                setUpcomingMovies(res.movies);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    

    return(
        <div>
            <Header></Header>

            <div className="heading">Upcoming Movies</div>

            <div className="upcomingMovies">
            {/* display:"flex", flexWrap: "nowrap", overflowX:"scroll" */}
            <ImageList sx={{display:"flex", flexWrap: "nowrap", overflowX:"scroll", width:1500}} rowHeight={250} variant="standard" cols={6} >
            {
                            upcomingMovies.map((movie) => (
                                <ImageListItem key={movie} sx={{display:"grid", columnCount:6}} >
                                    {/* <a href="/api/v1/Details/"> */}
                                        <img src={movie["poster_url"]} alt={movie["title"]} />
                                    {/* </a> */}
                                <ImageListItemBar title={movie["title"]}   /> 
                        </ImageListItem>
                            ))
             }
             </ImageList>
            </div>

            <div className="flex-container">

                <div className="releasedMovies" >
                    <ImageList rowHeight={350} variant="standard" cols={4}>
                        {
                            movies.map((movie) => (
                                <ImageListItem key={movie} style={{cursor:"pointer"}}>
                                    
                                    <Link to={"/movie/" + movie["id"]}>
                                    <a>
                                        <img src={movie["poster_url"]} alt={movie["title"]} /></a>
                                    </Link>
                                    
                            <ImageListItemBar title={movie["title"]}   /> 
                        </ImageListItem>
                            ))
                        }
                        
                    </ImageList>
                </div>

                <div className="movieFilters">
                {/* <ThemeProvider theme={theme}>    */}
                <Card >
                    <CardContent> 
                   
                        <Typography >
                            FIND MOVIES BY:
                        </Typography>
                      
                        <br />

                <FormControl required className="formControl">
                    <TextField id="standard-basic" label="Movie Name" variant="standard" />
                </FormControl> 
                <br></br>
                <br></br>

                <FormControl >
                <InputLabel htmlFor="genre">Genres</InputLabel> 
                
                    <Select value={"Genres"} onChange={handleChange} label="Genre" variant="standard" placeholder="Genres" >
                    {/* {movies.map((movie) => (
                        <MenuItem key={movie}>
                        <FormControlLabel control= { <Checkbox onChange={handleChange}  />}
                                label={movie["genres"][0]} />
                        </MenuItem>
                    ))}   */}
                    {movies.map((movie) => (
                        movie["genres"].map((item) => (

                        <MenuItem key={item} >
                            <FormControlLabel control= { <Checkbox onChange={handleChange}  />}
                                    label={item} />
                            </MenuItem>))
                         
                    ))}  
                    </Select>
                   
                </FormControl>
                <br></br>
                <br></br>
                <FormControl >
                    <InputLabel htmlFor="artists">Artists</InputLabel>
                    <Select value={"Artists"} onChange={handleChange}>

                    {movies.map((movie) => (
                        movie["artists"].map((item) => (

                        <MenuItem >
                        <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange} name="ArtistName" />
                                }
                                label={item["first_name"] + " " + item["last_name"]}
                            />
                        </MenuItem>))
                        ))}
                    </Select>
                </FormControl>
                <br></br>
                <br></br>

                <FormControl>
                    <InputLabel shrink="true">Release Date Start</InputLabel><br></br>
                    <TextField id="standard-basic" type="Date" variant="standard" />
                </FormControl>

                <br></br>
                <br></br>

                <FormControl>
                    <InputLabel shrink="true">Release Date End</InputLabel><br></br>
                    <TextField id="standard-basic" type="Date" variant="standard" />
                </FormControl>

                <br></br>
                <br></br>

                <Button variant="contained" color="primary" >APPLY</Button>

          </CardContent>
        </Card>
       
                </div>
            </div>

           
        </div>
    );
}

export default Home;