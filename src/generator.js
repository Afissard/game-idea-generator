
const game_theme = ["cyberpunk", "fantasy", "horror", "sci-fi", "steampunk"];
const game_genre = ["action", "adventure", "puzzle", "role-playing", "simulation"];



export class generate_ideas {
    generate() {
        const theme = game_theme[Math.floor(Math.random() * game_theme.length)];
        const genre = game_genre[Math.floor(Math.random() * game_genre.length)];
        return `A ${theme} ${genre} game where...`;
    }
}

export default generate_idea;