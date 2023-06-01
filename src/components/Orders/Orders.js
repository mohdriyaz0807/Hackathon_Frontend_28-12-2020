import React, { useEffect, useState } from "react";
import { Schedule } from "@mui/icons-material";
import { Alert, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import { API_PATH } from "../utils/api";
import Loader from "../Loader";

function Orders() {
  const token = window.localStorage.getItem("token");
  const user = JSON.parse(window.localStorage.getItem("userdata"));
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formattedTime = (date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const getOrders = async () => {
    setLoading(true);
    const userId = user._id;
    try {
      const response = await fetch(API_PATH + "/orders/" + userId, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const result = await response.json();
      if (result.status === 200) {
        setOrders(result.orders);
      } else {
        setError(result.message)
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Container maxWidth="md" sx={{ minHeight: "calc(100vh - 100px)" }}>
      {loading && <Loader />}
      <Paper elevation={2} className="orders">
        <h1>My Orders</h1>
        <Grid container justifyContent="center" alignItems="center">
          {orders.map((order) => {
            const item = order.cart
              .map((s) => {
                return s.count + " - " + s.name;
              })
              .join(", ");

            return (
              <React.Fragment key={order.orderid}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <h2 style={{ marginBottom: "1%" }}>{item}</h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <Schedule fontSize="12px" />
                    &nbsp; {formattedDate(order.createdDate)}{" "}
                    {formattedTime(order.createdDate)}
                  </div>
                </Grid>
                <Grid
                  margin="5% 0"
                  className="order-cost"
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  lg={2}
                >
                  <Typography variant="h6" fontWeight="bold">
                    ₹ {order.amount}
                  </Typography>
                </Grid>
                <Grid
                  margin="5% 0"
                  textAlign="end"
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  lg={2}
                >
                  <Chip sx={{ fontSize: 14 }} color="success" label="Success" />
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      {error && (
        <Alert
          variant="standard"
          severity="error"
          closeText="close"
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}
      </Paper>
    </Container>
  );
}

export default Orders;
