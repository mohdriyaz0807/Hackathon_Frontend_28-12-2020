
import { Checkbox, Divider, FormControlLabel, Grid, IconButton, Modal, Paper, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import regular from "../../assets/regular.svg"
import medium from "../../assets/medium.svg"
import large from "../../assets/large.svg"

const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: color === 'tomato' ? '#fff' : theme.palette.text.secondary,
  cursor: 'pointer',
  minWidth: 150,
  border: color === 'tomato' ? 'none' : '1px solid tomato'
}));

export const CustomizePizza = ({ modal, setModal, cart, setCart }) => {

  const closeModal = () => setModal({ ...modal, open: false, id: "" });

  const [customValues, setCustomValues] = useState({
    ...cart.find(e => e.id === modal.id)?.custom
  })

  const sizes = [{img:regular,label:"Regular",price: 100}, {img:medium,label:"Medium",price:150}, {img:large,label:"Large",price:200}];
  const crusts = [
    {label:"New Hand Tossed", price: 200},
    {label:"100% Wheel Thin Crust",price: 110},
    {label:"Cheese Burst", price: 130},
    {label:"Fresh Pan Pizza", price: 250},
  ];
  const meat = [
    { label: "Pepperoni", price: 70 },
    { label: "Hot Soppressata", price: 50 },
    { label: "Sausage", price: 75 },
    { label: "Bacon", price: 75 },
    { label: "Prosciutto", price: 50 },
    { label: "Meatballs", price: 80 },
    { label: "Buffalo Chicken", price: 90 },
  ];
  const veggies = [
    { label: "Spinach", price: 50 },
    { label: "Mushrooms", price: 40 },
    { label: "Onions", price: 60 },
    { label: "Fresh tomatoes", price: 55 },
    { label: "Zucchini", price: 40 },
    { label: "Artichoke hearts", price: 60 },
    { label: "Garlic", price: 30 },
  ];

  const selectCustom = (item, key) => {
    setCustomValues({...customValues,[key]: item})
    const oldPizza = cart.find(e => e.id === modal.id)
    const obj = {
      ...oldPizza,
      custom: {
        ...oldPizza.custom,
        [key]: item,
      },
    };
    const  arr = [...cart.filter(e => e.id !== obj.id), obj];
    setCart(arr);
  };

  return (
    <Modal
      open={modal.open}
      onClose={closeModal}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper className="modal-paper">
        <IconButton
          onClick={closeModal}
          sx={{ float: "right", margin: "5px 5px 0 0" }}
        >
          <Close />
        </IconButton>
        <Typography fontWeight="bold" variant="h4" textAlign="center">
          Pick you prefrences
        </Typography>
        <h2>Select Size</h2>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {sizes.map((row, i) => (
            <Item
              key={i}
              color={
                row?.label === customValues.size?.label ? "tomato" : "#fff"
              }
              onClick={() => selectCustom(row, "size")}
            >
              <Grid container alignItems="center">
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img src={row.img} alt={row.label} />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography fontWeight="bold">{row?.label}</Typography>
                  <Typography
                    fontWeight="bold"
                    variant="body"
                    color={
                      row?.label === customValues.size?.label
                        ? "#fff"
                        : "primary"
                    }
                  >
                    ₹ {row.price}
                  </Typography>
                </Grid>
              </Grid>
            </Item>
          ))}
        </Stack>
        <h2>Select Crust</h2>
        <Stack
          direction="row"
          spacing={2}
          paddingBottom={2}
          sx={{ overflowX: "scroll" }}
        >
          {crusts.map((row, i) => (
            <Item
              key={i}
              color={
                row?.label === customValues?.crust?.label ? "tomato" : "#fff"
              }
              onClick={() => selectCustom(row, "crust")}
            >
              <Typography fontWeight="bold">{row?.label}</Typography>
              <Typography
                fontWeight="bold"
                variant="body"
                color={
                  row?.label === customValues.crust?.label ? "#fff" : "primary"
                }
              >
                ₹ {row.price}
              </Typography>
            </Item>
          ))}
        </Stack>
        <h2>Extra Cheese</h2>
        <FormControlLabel
          onChange={(e) => {
            selectCustom(
              { value: e.target.checked, price: e.target.checked ? 75 : 0 },
              "extraCheese"
            );
          }}
          value={customValues?.extraCheese?.value}
          control={<Checkbox style={{ color: "tomato" }} />}
          label={
            <>
              I want to add extra cheese
              <span style={{ color: "#1976d2", fontWeight: 'bold' }}> - ₹ 75</span>
            </>
          }
        />
        <h2>Add Toppings</h2>
        <Divider />
        <br />
        <h3>Veg Toppings</h3>
        <Stack
          direction="row"
          spacing={2}
          paddingBottom={2}
          sx={{ overflowX: "scroll" }}
        >
          {veggies.map((row, i) => (
            <Item
              key={i}
              color={
                row?.label === customValues?.veggies?.label ? "tomato" : "#fff"
              }
              onClick={() => selectCustom(row, "veggies")}
            >
              <Typography fontWeight="bold">{row?.label}</Typography>
              <Typography
                fontWeight="bold"
                variant="body"
                color={
                  row?.label === customValues.veggies?.label
                    ? "#fff"
                    : "primary"
                }
              >
                ₹ {row.price}
              </Typography>
            </Item>
          ))}
        </Stack>
        <br />
        <Divider />
        <h3>Non-Veg Toppings</h3>
        <Stack
          direction="row"
          spacing={2}
          paddingBottom={2}
          sx={{ overflowX: "scroll" }}
        >
          {meat.map((row, i) => (
            <Item
              key={i}
              color={
                row?.label === customValues?.meat?.label ? "tomato" : "#fff"
              }
              onClick={() => selectCustom(row, "meat")}
            >
              <Typography fontWeight="bold">{row?.label}</Typography>
              <Typography
                fontWeight="bold"
                variant="body"
                color={
                  row?.label === customValues.meat?.label ? "#fff" : "primary"
                }
              >
                ₹ {row.price}
              </Typography>
            </Item>
          ))}
        </Stack>
      </Paper>
    </Modal>
  );
};