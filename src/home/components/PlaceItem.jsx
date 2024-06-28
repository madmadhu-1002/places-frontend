import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

const PlaceItem = ({
  id,
  image,
  title,
  description,
  onEdit,
  onDelete,
}) => {
  
  return (
    <div id={id} key={id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {title.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia component="img" height="194" image={image} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Button variant="contained" color="success" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={() => onDelete(id)}>
          Delete
        </Button>
        <Button variant="contained" color="primary">
          Book
        </Button>
      </Card>
      <br />
    </div>
  );
};

export default PlaceItem;
