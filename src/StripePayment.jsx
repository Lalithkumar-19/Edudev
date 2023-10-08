import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function StripePayment() {


  const [products,setProducts]=useState([
    {
      name:"I phone xr",
      price:180000,
      quantity:2,
      
    },
    {
      name:"Asus laptop",
      price:80000,
      quantity:1,
      
    },
    {
      name:"Noise buds ",
      price:1900,
      quantity:2,
      
    },
    {
      name:"I pad",
      price:1000,
      quantity:1,
      
    }
  ])

  const stripePromise = loadStripe("pk_test_51N4GGJSJrxtg1wrdcivCgoggnax13XrIZ21VkbPZpudbnFWOTVc4abHF4buSLr7WXOJKJJFj1GP3LWhGi6Hmg1lC00LB4XKuCZ");

  const handlecheckout = async () => {
    const lineItems = products.map((item) => {
      return {
        price_data: {
          currency: "inr",
          unit_amount: item.price * 100,

          product_data: {
            name: item.name
          },

        },
        quantity:item.quantity
      }
    })
    
    const{data}=await axios.post('http://localhost:8000/checkout',{lineItems});
    const stripe=await stripePromise;
    await stripe.redirectToCheckout({sessionId:data.id});
 
  }

  



  return (
    <div style={{ margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
      <h1>Stripe payments practice </h1>
      <Card style={{ width: "20rem", margin: "0px auto" }}>
        <Card.Img
          variant="top" src="https://images.pexels.com/photos/12428359/pexels-photo-12428359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>Lalith kuamr reddy</Card.Title>
          <Card.Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ratione, harum veritatis et placeat libero quam totam nemo ad excepturi officiis accusantium eaque culpa, quod debitis beatae voluptatum id quidem! </Card.Text>
          <Button variant="primary" onClick={handlecheckout}>
            Buy Now for 300000
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default StripePayment; 