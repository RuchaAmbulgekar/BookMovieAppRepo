import React from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import { TextField } from '@material-ui/core';
import { createMuiTheme }  from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
// import { makeStyles } from "@material-ui/core/styles";

const Home = () =>{

    const [state, setState] = React.useState({});

    const theme = createMuiTheme({
        palette: {
          primary: { main: "#467fcf" },
        },
      })
      

      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };


    return(
        <div>
            <Header></Header>

            <div className="heading">Upcoming Movies</div>

            <div>
            <ImageList rowHeight={250} variant="standard" cols={6}>
                <ImageListItem >
                    <img src="../../assets/logo.svg" alt="Image title" />
                    <ImageListItemBar title="Title" subtitle="Subtitle"  /> 
                </ImageListItem>
                    {/* <ImageListItem>
                    <img src="../../assets/logo.svg" alt="Image title" />
                    <ImageListItemBar title="Title1" subtitle="Subtitle"  /> 
                    </ImageListItem>
                    <ImageListItem>
                    <img src="../../assets/logo.svg" alt="Image title" />
                    <ImageListItemBar title="Title2" subtitle="Subtitle"  /> 
                </ImageListItem>
                <ImageListItem>
                    <img src="../../assets/logo.svg" alt="Image title" />
                    <ImageListItemBar title="Title3" subtitle="Subtitle"  /> 
                </ImageListItem> */}
             </ImageList>
            </div>

            <div className="flex-container">

                <div className="releasedMovies">
                    <ImageList rowHeight={350} variant="standard" cols={4}>
                        <ImageListItem >
                            <a href="../details/Details.js">
                                <img src="../../assets/logo.svg" alt="Image title" />
                            </a>
                            <ImageListItemBar title="Title" subtitle="Subtitle"  /> 
                        </ImageListItem>
                    </ImageList>
                </div>

                <div className="movieFilters">
                <Card >
                    <CardContent>
                    {/* <ThemeProvider theme={theme}> */}
                        <Typography className="theme">
                            FIND MOVIES BY:
                        </Typography>
                        {/* </ThemeProvider> */}
                        <br />

                <FormControl required className="formControl">
                    <TextField id="standard-basic" label="Movie Name" variant="standard" />
                </FormControl> 
                <br></br>
                <br></br>

                <FormControl >
                <InputLabel htmlFor="genre">Genres</InputLabel> 
                    <Select value={"Genres"} onChange={handleChange} label="Genre" variant="standard" >
                       
                        <MenuItem >
                        <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange} name="Genre1" />
                                }
                                label="Genre1"
                            />
                        </MenuItem>
                       
                    </Select>
                </FormControl>
                <br></br>
                <br></br>
                <FormControl >
                    <InputLabel htmlFor="artists">Artists</InputLabel>
                    <Select value={"Artists"} onChange={handleChange}>
                        
                        <MenuItem >
                        <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange} name="Artist1" />
                                }
                                label="Artist1"
                            />
                        </MenuItem>
                       
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