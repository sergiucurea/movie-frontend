import {server} from "./serverInfo.js"
class CategoryService {
    getCategories(){
        const url=`http://${server.url}:${server.port}/category`;  
        return fetch(url)
            .then(response=>response.json())
            .catch(error => console.error(error))
    }
}
export default new CategoryService();