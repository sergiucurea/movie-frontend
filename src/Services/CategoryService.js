import {server} from "./serverInfo.js"

const CategoryService= {
    getCategories:()=>{
        const url=`http://${server.url}:${server.port}/category`;  
        return fetch(url)
            .then(response=>response.json())
            .catch(error => console.error(error))
    }
}
export {CategoryService};