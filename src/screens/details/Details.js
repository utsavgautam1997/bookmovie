import React, { useState } from "react";
import "./Details.css";
import Typography from "@material-ui/core/Typography";
import data from "../../assets/movietile.json";
import ReactPlayer from 'react-player';
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

function Details() {
  return (
    <div>
      <Typography className="back" onClick={() => alert("Going back to home.........")}>
        &#60; Back to Home
      </Typography>
      <div class="abc">
        <div>
          <img src={data[1].poster_url} alt={data[1].title} style={{ height: "60%", width: "90%" }} />
        </div>
        <div>
          <Typography variant="headline" component="h2">
            {data[1].title}
          </Typography>
          <Typography style={{ fontWeight: 600 }}>
            Genre: {data[1].genre}
          </Typography>
          <Typography style={{ fontWeight: 600 }}>
            Duration:{data[1].duration}
          </Typography>
          <Typography style={{ fontWeight: 600 }}>
            Release Date:{data[1].release_date}
          </Typography>
          <Typography style={{ fontWeight: 600 }}>
            Rating:{data[1].crtics_rating}
          </Typography>
          <br />
          <Typography style={{ fontWeight: 600 }}>
            Plot:{data[1].story_line}
          </Typography>
          <br />

          <Typography style={{ fontWeight: 600 }}>Trailer:</Typography>
          <ReactPlayer url={data[1].trailer_url} />
        </div>
        <div>
          <Typography style={{ fontWeight: 600 }}>Rate this movie</Typography>
          <br />
          <div class="box">
            <StarBorderOutlinedIcon ></StarBorderOutlinedIcon>
            <StarBorderOutlinedIcon ></StarBorderOutlinedIcon>
            <StarBorderOutlinedIcon ></StarBorderOutlinedIcon>
            <StarBorderOutlinedIcon ></StarBorderOutlinedIcon>
            <StarBorderOutlinedIcon ></StarBorderOutlinedIcon>
          </div>
          <Typography style={{ fontWeight: 600 }}>Artists</Typography>
          <div class="artistGrid">
            <GridListTile>
              <img
                src={data[1].profile_url}
                cellHeight={250}
                style={{ height: "100%", width: "100%" }}
                alt={data[1].first_name + " " + data[1].last_name}
              />
              <GridListTileBar title={data[1].first_name + " " + data[1].last_name} />
            </GridListTile>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
