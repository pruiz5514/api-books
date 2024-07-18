import { BodyRequestLoginBooks, BodyResponseLoginBooks } from "../model/Login.models";
import { Books } from "../model/Books.model";

export class BooksController {
    urlApi: string;
    token: string | null

    constructor(urlApi: string) {
        this.urlApi = urlApi;
        this.token = null
    };

    async postLogin(data: BodyRequestLoginBooks) {
        let endpoint = "api/v1/auth/login";

        // Record<string,string> significa un objeto clave valor
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        }

        const regOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }

        const url = this.urlApi + endpoint;
        const result = await fetch(url, regOptions);

        console.log(`Statud code: ${result.status}`);

        if (result.status !== 201) {
            console.log(`Response body: ${(await result.json()).message}`);

            throw new Error('No authenticated')
        }
        const responseBodyLogin: BodyResponseLoginBooks = await result.json();
        console.log(`Result token: ${responseBodyLogin.data.token}`);
        this.token = responseBodyLogin.data.token;
        return responseBodyLogin;
    };

    async getBooks(): Promise<Books[]> {
        let endpoint = 'api/v1/books';

        const response = await fetch(this.urlApi + endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        });

        if (response.status !== 201) {
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error('No authenticated')
        };

        const books:Books[] = await response.json();
        return books;
    }

}