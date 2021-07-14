import React from "react";
import { Container, Button, Box, Grid, TextField } from '@material-ui/core';
 
function ItemPage(props){


    console.log(props.currentItem)
    return (
        <div className="card">

          <Container>
          <Box
          mx="auto"
          // width={1 / 2}
          align="center"
          >
          <h1> Item</h1>
          <ul>
          <li>{props.currentItem.id}</li>
          <li>{props.currentItem.name}</li>
          <li>{props.currentItem.price}</li>
          </ul>
          <Button variant="contained" color="primary" type="submit">Add to Cart</Button>      
          /> 
          </Box>
          </Container>


          
        </div>
      )
}









export default ItemPage