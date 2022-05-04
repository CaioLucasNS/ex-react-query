import React, { useContext } from "react";
import api from "../services";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Context } from "../context";

const TextCard = ({ children }) => (
  <Typography variant="body2" color="text.secondary">
    {children}
  </Typography>
);

export function Home() {
  const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useContext(Context);

  console.log({
    name: books.name,
    author: books.author,
    serialNumber: books.serialNumber,
  });

  useEffect(() => {
    api
      .get("character")
      .then((response) => response.data)
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Container>
      <Grid container>
        {characters &&
          characters.map((char) => (
            <Grid item xs={6}>
              <Card
                key={char.id}
                sx={{
                  padding: 2,
                  margin: 2,
                  border: "1px solid gray",
                  borderRadius: 4,
                }}
              >
                <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 120, width: 120 }}
                    image={char.image}
                    alt={`${char.name} image`}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {char.name}
                    </Typography>

                    <TextCard>{char.status && char.status}</TextCard>
                    <TextCard>{char.species && char.species}</TextCard>
                    <TextCard>{char.type && char.type}</TextCard>
                    <TextCard>{char.status && char.status}</TextCard>
                    <TextCard>{char.gender && char.gender}</TextCard>
                    <TextCard>
                      {char.location.name && char.location.name}
                    </TextCard>
                  </CardContent>

                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
