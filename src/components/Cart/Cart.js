import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Box, CardActions, Divider, Paper, Typography } from "@mui/material";
import emptyBag from "../../assets/empty.jpg"
import emptyBg from '../../assets/empty-background.jpg'

function Cart({cart, setCart, openLogin}) {

  const token = window.localStorage.getItem('token')

  const handleAddToCart = (pizza) => {
    const oldPizza = cart.find((e) => e.id === pizza.id);
    const obj = oldPizza ? { ...oldPizza, count: oldPizza.count + 1 } : { ...pizza, count: 1 };
    const newArr = cart.map((e) => (e.id === obj.id ? obj : e));
    if (!oldPizza) {
      newArr.push(obj);
    }
    setCart(newArr);
  };
  
  const handleRemoveFromCart = (pizza) => {
    const oldPizza = cart.find((e) => e.id === pizza.id);
    const obj = { ...oldPizza, count: oldPizza.count - 1 };
    const newArr = cart.map((e) => (e.id === obj.id ? obj : e));
    const filteredArr = newArr.filter((e) => e.count > 0);
    setCart(filteredArr);
  };
  

  const getPrice = (pizza) => {
    const base_price = pizza.price
    let added_price = 0
    pizza?.custom && Object.keys(pizza?.custom)?.forEach((key) => {
      return added_price += pizza?.custom?.[key]?.price
    })
    return (base_price + added_price) * pizza.count
  }

  const handleProceed = () => {
    if(!token){
      openLogin()
    }
  }

  return cart.length ? (
    <Grid container spacing={2} sx={{ padding: "120px 60px 0px" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={8}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="start"
        alignItems="center"
        marginTop={4}
        sx={{
          overflow: "scroll",
          backgroundColor: "#ff63471f",
          borderRadius: "5px",
        }}
        height="calc(100vh - 150px)"
      >
        {cart.map((pizza) => {
          return (
            <Grid m={2} key={pizza.id} item xs={6} sm={6} md={5} lg={5}>
              <Card sx={{ width: 350, height: 400 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={pizza.image}
                  alt={pizza.name}
                />
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    height: 50,
                  }}
                >
                  <>
                    <CardHeader title={pizza.name} />
                    {cart?.find((e) => e.id === pizza.id) ? (
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
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    textAlign="center"
                    color="text.secondary"
                  >
                    {`₹ ${getPrice(pizza)}`}
                  </Typography>
                  <br />
                  <Divider />
                  <Typography variant="caption">
                    Please note that the above cost includes all your
                    custom preferences if added any.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid m={2} item xs={12} sm={12} md={3} lg={3}>
        <Paper
          elevation={4}
          sx={{
            minWidth: 400,
            height: "calc(100vh - 150px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={emptyBag} alt="Bag" width={300} />
          <Typography variant="h6" textAlign="center" m={1}>
            Your cart looks amazing
          </Typography>
          <Typography variant="caption" textAlign="justify" m={3}>
            The price and availability of items are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price.
            time to pay.
          </Typography>
          <Typography fontWeight="bold" variant="h4" m={1}>
            ₹{" "}
            {cart
              .map((e) => getPrice(e))
              .reduce((a, b) => {
                return a + b;
              }, 0)}
          </Typography>
          <button className="add-cart-btn" onClick={handleProceed}>
            <b>Proceed to payment !</b>
          </button>
        </Paper>
      </Grid>
    </Grid>
  ) : (
    <Box
      sx={{ background: `url(${emptyBg})`, padding: "120px 60px 50px" }}
      height="calc(100vh - 175px)"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <img
        style={{ borderRadius: "50px 50px 0 0" }}
        src={emptyBag}
        alt="Empty"
        width={500}
        height={400}
      />
      <Typography
        textAlign="center"
        sx={{
          backgroundColor: "#fff",
          width: 500,
          borderRadius: "0 0 50px 50px",
        }}
        padding="10px 0 20px"
        variant="h3"
        color="tomato"
      >
        Your cart is empty
      </Typography>
    </Box>
  );
}

export default Cart;
