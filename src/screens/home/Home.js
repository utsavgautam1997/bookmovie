import React, { Component, useState } from 'react';
import './Home.css';
import GenreFilter from './GenreFilter';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme, withStyles, createTheme } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import data from "../../assets/movietile.json";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import {Modal} from "react-responsive-modal";
import BookShow from "../../screens/bookshow/BookShow";
import Modal from 'react-modal';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import Details from '../details/Details';
import { Route, Switch } from 'react-router-dom';

function Home() {

    const [open, setOpen] = useState(false);
    const [register, setRegister] = useState(false);
    const handleOpen = e => {
        setOpen(true);
    }
    const handleClose = e => {
        setOpen(false);

    }
    const openRegisterForm = e => {
        setRegister(true);
    }
    const openLoginForm = () => setRegister(register => false);

    const StylesGridList = withStyles(() =>
        createStyles({
            root: {

                flexWrap: 'nowrap'
            }

        })
    )(GridList);

    const useStyles = () => ({
        root: {
            display: 'flex',
            justifyContent: "space-between",
            width: '100%',

        }
    });

    const classes = useStyles();

    const doSwitch = () => {
        <Switch >
            <Route path="/" component={Home} />
            <Route path="/details" component={Details} />
        </Switch>
    }

    return (
        <div>

            <div className="heading">
                Upcoming Movies
            </div>
            <div >
                <StylesGridList cellHeight={250} cols={6} width="100%" >
                    {data.map((data) => (
                        <GridListTile key={data.id}>
                            <img src={data.poster_url} onClick={Details} cellHeight={250} style={{ height: '100%', width: '100%' }} alt={data.title} />
                            <GridListTileBar title={data.title} />
                        </GridListTile>
                    ))}
                </StylesGridList>
            </div>
            <div className="filter-movie-container">
                <div className="releasedmovies classes.root">
                    <GridList className={classes.gridlist} cellHeight={350} cols={4} style={{ height: 350 }}>

                        {data.map((data) => (

                            <GridListTile key={data.id}>
                                <img className="imagehover" src={data.poster_url} alt={data.title} />
                                <GridListTileBar title={data.title} subtitle={data.release_date} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="filter-card">
                    <Card >
                        <CardHeader title="FIND MOVIES BY:" />
                        <CardContent>
                            <FormControl>
                                <TextField required id="standard-required" label="Movie Name" />
                                <GenreFilter />
                                <TextField
                                    id="date"
                                    label="Relase Date Start"
                                    type="date"

                                    style={{ width: '200' }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="date"
                                    label="Relase Date End"
                                    type="date"

                                    style={{ width: '200' }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <Button variant="contained" color="primary" type="submit" size="small">Apply</Button>
                            </FormControl>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div >
    );
}

export default Home;