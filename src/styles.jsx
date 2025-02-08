const styles = {
    container: {
        textAlign: "center",
        marginTop: "0", // Remove the default margin
        padding: "0", // Remove default padding
        backgroundColor: "#000", // Full black background
        minHeight: "100vh", // Ensure the background covers the entire screen
        display: "flex",
        justifyContent: "center", // Center the Paper horizontally
        alignItems: "center", // Center the Paper vertically
    },
    paper: {
        padding: "2rem",
        borderRadius: "20px",
        backgroundColor: "#1a1a2e", // Dark box color
        width: "80%", // Set a max width for the Paper
        maxWidth: "600px", // Limit width for responsiveness
    },
    title: {
        fontWeight: "bold",
        color: "#BB86FC", // Neon purple for title
    },
    button: {
        marginTop: "1rem",
        borderRadius: "30px",
        padding: "10px 24px",
        textTransform: "none",
        backgroundColor: "#BB86FC", // Button matches title color
        color: "#FFF", // White text on button
        "&:hover": { backgroundColor: "#9a5dcd" }, // Slightly darker purple on hover
    },
    ideaText: {
        marginTop: "1.5rem",
        fontStyle: "italic",
        color: "#FFF", // White text for the generated idea
    },
};

export default styles;
