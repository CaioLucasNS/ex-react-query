import logo from "./logo.svg";
import "./App.css";
import api from "./services";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    CardActions,
    Button,
} from "@mui/material";

const TextCard = ({ children }) => (
    <Typography variant="body2" color="text.secondary">
        {children}
    </Typography>
);

function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        api.get("character")
            .then((response) => response.data)
            .then((data) => setCharacters(data.results));
    }, []);

    console.log({ characters });

    return (
        <div>
            <div>
                {/* {characters.map((character) => (
                    <div
                        key={character.id}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: "60px",
                            backgroundColor: "lightgray",
                            border: "1px solid #003",
                            borderRadius: 10,
                            margin: 40,
                            padding: 20,
                        }}
                    >
                        <div style={{ marginRight: 40 }}>
                            <img src={character.image} alt="character img" />
                        </div>
                        <div>
                            <h1>Nome: {character.name}</h1>
                            <h2>Status: {character.status || "-"}</h2>
                            <h2>Espécie: {character.species || "-"}</h2>
                            <h2>Tipo: {character.type || "-"}</h2>
                            <h2>Status: {character.status || "-"}</h2>
                            <h2>Gênero: {character.gender || "-"}</h2>
                            <h2>
                                Localização: {character.location.name || "-"}
                            </h2>
                        </div>
                    </div>
                ))} */}

                {characters &&
                    characters.map((char, idx) => (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 140, width: 140 }}
                                    image={char.image}
                                    alt={`${char.name} image`}
                                />

                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {char.name}
                                    </Typography>

                                    <TextCard>
                                        {char.status && char.status}
                                    </TextCard>
                                    <TextCard>
                                        {char.species && char.species}
                                    </TextCard>
                                    <TextCard>
                                        {char.type && char.type}
                                    </TextCard>
                                    <TextCard>
                                        {char.status && char.status}
                                    </TextCard>
                                    <TextCard>
                                        {char.gender && char.gender}
                                    </TextCard>
                                    <TextCard>
                                        {char.location.name &&
                                            char.location.name}
                                    </TextCard>
                                </CardContent>

                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    ))}
            </div>
        </div>
    );
}

export default App;
