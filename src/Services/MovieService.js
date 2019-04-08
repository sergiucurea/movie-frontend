import {server} from "./serverInfo.js"
const MovieService={
    getMovies:(page,limit)=>{
        const url=`http://${server.url}:${server.port}/?page=${page}&limit=${limit}`;  
        return fetch(url)
            .then(response=>response.json())
            .catch(error => console.error(error))
    },
    getFilteredMovies:(page,limit,categoriesArray)=>{
        let categories=categoriesArray.toString();
        const url=`http://${server.url}:${server.port}/?page=${page}&limit=${limit}&category=${categories}`;  
        return fetch(url)
            .then(response=>response.json())
            .catch(error => console.error(error))
    }
}
export {MovieService};