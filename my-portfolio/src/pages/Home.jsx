import React from "react";
import { Container, Typography } from "@mui/material";
import BasicCard from "../components/BasicCard";

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Welcome</Typography>
      <Typography>
        Todo:
        <ul>
            <li>Make a component to add an exercise</li>
            <li>Make a component to add a workout</li>
        </ul>
        Cool idea:
        <ul>
            <li>Button when making exercise that will use AI or API to generate list of muscles that exercise works</li>
        </ul>
        <BasicCard />
      </Typography>
    </Container>
  );
}

export default Home;