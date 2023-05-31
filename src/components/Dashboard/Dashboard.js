import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import { pizzas } from "../pizza-json";
import { CustomizePizza } from "./CustomizePizza";

function Dashboard({cart, setCart}) {

  const [modal,setModal] = useState({open:false, id: ""})


  const handleAddToCart = (pizza) => {
    const oldPizza = cart.find(e => e.id === pizza.id)
    const obj = oldPizza ? {...oldPizza, count: oldPizza.count + 1} : {...pizza, count: 1}
    let arr = []
    if(cart.map(e => e.id).includes(obj.id)){
      arr = [...cart.filter(e => e.id !== obj.id), obj];
    } else {
      arr = [...cart, obj];
    }
    setCart(arr);
  };

  const handleRemoveFromCart = (pizza) => {
    const oldPizza = cart.find(e => e.id === pizza.id)
    const obj = {...oldPizza, count: oldPizza.count - 1}
    const arr =
      obj.count > 0
        ? [...cart.filter((e) => e.id !== obj.id), obj]
        : cart.filter((e) => e.id !== pizza.id);
    setCart(arr);
  };

  const handleCustomize =(id)=>{
    setModal({...modal, open: true, id})
  }

  return (
    <Grid container spacing={2} sx={{margin: '120px 60px 0 60px'}}>
      {pizzas.map((pizza) => {
        return (
          <Grid key={pizza.id} paddingBottom={4} item xs={12} sm={12} md={4} lg={4}>
            <Card sx={{ maxWidth: 350, height: 390 }}>
              <CardMedia
                component="img"
                height="194"
                image={pizza.image}
                alt={pizza.name}
              />
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between", alignItems: 'baseline' }}
              >
                <>
                  <CardHeader
                    title={pizza.name}
                    subheader={
                      <Typography variant="h6">
                        ₹{" "}{pizza.price}
                      </Typography>}
                  />
                  {cart?.find((e) => e.id === pizza.id) ? (
                    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Box
                      className="added-cart-btn"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="add"
                        onClick={() => handleRemoveFromCart(pizza)}
                      >
                        -
                      </span>
                      <span className="count">
                        {cart.find((e) => e.id === pizza.id)["count"]}
                      </span>
                      <span
                        className="remove"
                        onClick={() => handleAddToCart(pizza)}
                      >
                        +
                      </span>
                    </Box>
                    <Typography variant="overline">
                    {cart?.find((e) => e.id === pizza.id) ? <Link
                        className="customize"
                        onClick={() => handleCustomize(pizza.id)}
                      >
                        customize
                      </Link> : null}
                      </Typography>
                      </div>
                  ) : (
                    <button
                      className="add-cart-btn"
                      onClick={() => handleAddToCart(pizza)}
                    >
                      Add to Cart
                    </button>
                  )}
                </>
              </CardActions>
              <CardContent sx={{marginTop:'-10px'}}>
                <Typography variant="body2" color="text.secondary">
                  {pizza.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
      {
        modal.open && <CustomizePizza modal={modal} setModal={setModal} cart={cart} setCart={setCart}/>
      }
      <Box className="footer">
      <Typography variant="body1">
        All Rights Reserved. Copyright © mohdriyaz0807.
      </Typography>
      <Typography variant="caption">
        ALL PICTURES SHOWN ARE FOR ILLUSTRATION PURPOSE ONLY.ACTUAL PRODUCT MAY VARY DUE TO PRODUCT ENHANCEMENT.
      </Typography>
      </Box>
    </Grid>
  );
}

export default Dashboard;
