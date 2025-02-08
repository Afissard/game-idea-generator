import React, { useState } from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import styles from "./styles"; // Import dark theme styles
import {GenerateIdeas} from "./generator.js"; // Import the generateIdeas function

export default function App() {
    const [generatedIdea, setGeneratedIdea] = useState("");
    const generator = new GenerateIdeas();

    const generateIdea = () => {
        setGeneratedIdea(generator.idea);
    };

    return (
        <Container maxWidth="false" style={styles.container}>
            <Paper elevation={0} style={styles.paper}>
                <Typography variant="h4" sx={styles.title}>
                    Game Theme Idea Generator
                </Typography>
                <Button variant="contained" sx={styles.button} onClick={generateIdea}>
                    Generate Idea
                </Button>
                {generatedIdea && (
                    <Typography variant="h6" sx={styles.ideaText}>
                        {generatedIdea}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
}
