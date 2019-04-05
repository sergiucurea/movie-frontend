import { server } from "./serverInfo.js"
class SearchService {
    getSearchSuggestion(query, page = 1, limit = 5) {
        const url = `http://${server.url}:${server.port}/search?page=${page}&limit=${limit}&query=${query}`;
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error))
    }
}
export default new SearchService();