
const game_theme = ["cyberpunk", "fantasy", "horror", "sci-fi", "steampunk"];
const game_genre = ["action", "adventure", "puzzle", "role-playing", "simulation"];


export class GenerateIdeas {
    #idea = ""

    get idea() {
        const theme = game_theme[Math.floor(Math.random() * game_theme.length)];
        const genre = game_genre[Math.floor(Math.random() * game_genre.length)];
        this.idea = `A ${theme} ${genre} game where...`
        return this.#idea;
    }

    set idea(idea) {
        this.#idea = idea;
    }
}

export default GenerateIdeas;