import { BodyRequestLoginBooks, BodyResponseLoginBooks } from "../model/Login.models";
import { Books, BooksInfo } from "../model/Books.model";

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

        console.log(`Statud code postLogin: ${result.status}`);

        if (result.status !== 201) {
            console.log(`Response body: ${(await result.json()).message}`);

            throw new Error('No authenticated')
        }
        const responseBodyLogin: BodyResponseLoginBooks = await result.json();
        console.log(`Result token: ${responseBodyLogin.data.token}`);
        this.token = responseBodyLogin.data.token;
        return responseBodyLogin;
    };

    async getBooks(endpoint: String): Promise<Books> {
        const response = await fetch(this.urlApi + endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });

        console.log(`Statud code get: ${response.status}`);
        if (response.status !== 200) {
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error('No authenticated')
        };

        const books: Books = await response.json();
        return books;
    }

    async postBooks(bookData: BooksInfo): Promise<Books> {
        let endpoint = 'api/v1/books';

        const response = await fetch(this.urlApi + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(bookData)
        })

        console.log(`Statud code postBook: ${response.status}`);

        if (response.status !== 201) {
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error('No authenticated')
        };

        const bookAdded: Books = await response.json();
        return bookAdded;
    }

    async deteleBook(id: string): Promise<Books> {
        let endpoint = `api/v1/books/${id}`;

        const response = await fetch(this.urlApi + endpoint, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })

        console.log(`Statud code delete: ${response.status}`);
        if (response.status !== 200) {
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error('No authenticated')
        }
        const bookDeleted: Books = await response.json();
        return bookDeleted;
    }

    async updateBook(id: string, bookData: BooksInfo) {
        let endpoint = `api/v1/books/${id}`;

        const response = await fetch(this.urlApi + endpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(bookData)
        })

        console.log(`Statud code updateBook: ${response.status}`);

        if (response.status !== 200) {
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error('No authenticated')
        };

        const bookUpdated: Books = await response.json();
        return bookUpdated;
    }

}