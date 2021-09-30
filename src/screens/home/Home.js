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
import { createTheme } from '@mui/material/styles';
import { light } from '@material-ui/core/styles/createPalette';


const Home = () =>{

    const [state, setState] = React.useState({});

    const styles = (theme) => ({
        close: {
          margin: theme.spacing.unit,
          minWidth: 240,
          maxWidth: 240,
        },
        pallete: {
          primary: light,
        },
      });

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
                        <Typography variant="headline" >
                            FIND MOVIES BY:
                        </Typography>
                        <br />

                <FormControl required className="formControl">
                    <TextField id="standard-basic" label="Movie Name" variant="standard" /><br></br>
                </FormControl> 

                <FormControl required className="formControl">
                    <InputLabel htmlFor="genre">Genres</InputLabel>
                    <Select value={"Genres"} onChange={handleChange}>
                        
                        <MenuItem >
                        <FormControlLabel
                                control={
                                <Checkbox onChange={handleChange} name="gilad" />
                                }
                                label="Gilad Gray"
                            />
                        </MenuItem>
                       
                    </Select>
                </FormControl>

          </CardContent>
        </Card>
                </div>
            </div>

           
        </div>
    );
}

export default Home;