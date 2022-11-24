import axios from "axios";

export abstract class ApiController {

    private static BASE_URL: string  = "https://pokeapi.co/api/v2/pokemon/"

    get<T>(endpoint: string) {
        return new Promise((resolve, reject) => {
            axios.get(
                ApiController.BASE_URL +
                endpoint
            ).then((response) => {
                resolve(response as T)
            }).catch(error => {
                reject(error)
            })
        })
    }

    post(endpoint: string, body: any, header?: any) {
        return new Promise((resolve, reject) => {
            axios.post(
                ApiController.BASE_URL +
                endpoint, 
                body, 
                { 
                    headers: header 
                }
            ).then(response => {
                resolve(response)
            }).catch( (error) => {
                reject(error.response)
            })
        })
    }

}