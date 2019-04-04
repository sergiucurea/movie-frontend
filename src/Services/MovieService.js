const SERVER_URL='localhost'
const PORT=4000;
class MovieService {
    getMovies(page,limit){
        const url=`http://${SERVER_URL}:${PORT}/?page=${page}&limit=${limit}`;  
        return fetch(url)
            .then(response=>response.json())
            .catch(error => console.error(error))
    }

    getFilteredMovies(page,limit,categoriesArray){
        console.log(categoriesArray)
        let categories=categoriesArray.toString();
        const url=`http://${SERVER_URL}:${PORT}/?page=${page}&limit=${limit}&category=${categories}`;  
        console.log(url);
        return fetch(url)
            .then(response=>response.json())
            .catch(error => console.error(error))
    }
}
export default new MovieService();