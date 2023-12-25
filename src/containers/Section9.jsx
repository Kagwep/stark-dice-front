import { Container, Grid } from "@mui/material";
import React from "react";
import ServiceCard from "../components/Cards/ServiceCard";
import Title from "../components/Title";
import { section9Content } from "../utils/content";

const { title } = section9Content;

const Section9 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 10, lg: 10 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>
        
      </Title>

    </Container>
  );
};

export default Section9;
