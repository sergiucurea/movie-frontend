const SERVER_URL='localhost'
const PORT=4000;
class CategoryService {
    getCategories(){
        const url=`http://${SERVER_URL}:${PORT}/category`;  
        console.log(url);
        return fetch(url)
            .then(response=>response.json())
            .catch(error => console.error(error))
    }
}
export default new CategoryService();