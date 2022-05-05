import React, { useContext } from "react";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// import { Context } from "../context";
// import { useCharacters } from "../hooks/useCharacters";
import api from "../services/api";
import axios from "axios";

const TextCard = ({ children }) => (
  <Typography variant="body2" color="text.secondary">
    {children}
  </Typography>
);

export function Home() {
  // const [books, setBooks] = useContext(Context);

  // 1 param - uma chave de cache | um id
  // 2 param - fn que faz a chamada API
  const { data, isFetching } = useQuery("character", async () => {
    const response = await api.get("character");

    return response.data.results;
  });

  // const { data: characters, isFetching } = useCharacters("character");

  // console.log({
  //   name: books.name,
  //   author: books.author,
  //   serialNumber: books.serialNumber,
  // });

  return (
    <Container>
      <Grid container>
        {isFetching && (
          <Box
            sx={{
              display: "flex",
              height: "100vh",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {data?.map((char) => (
          <Grid key={char.id} item xs={6}>
            <Card
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
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => console.log("Share")}
                  >
                    Share
                  </Button>
                  <Button
                    size="small"
                    variant="text"
                    onClick={() => console.log("Learn More")}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
