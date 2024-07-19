import './BooksView.scss';
import { BooksController } from '../../../controller/Books.controllers';
import { BooksCard } from '../BooksCard/BooksCard';


export const BooksView = (): HTMLElement => {
    const main = document.createElement("main") as HTMLElement;
    main.className = "booksView-main";

    const h1 = document.createElement("h1") as HTMLHeadingElement;
    h1.innerText = "Nuestros libros";
    h1.className = "booksView-title";

    const section = document.createElement("section") as HTMLElement;
    section.className = "cards-container";

    showBooks().then((books) => {
        books?.map(book => {
            section.append(BooksCard(book));
        })
    }).catch((error) => {
        console.log(error);
    })

    main.append(h1, section);
    return main;
}

const showBooks = async () => {

    const booksController = new BooksController('http://190.147.64.47:5155/');

    try {
        const getBooks = await booksController.getBooks();
        return getBooks.data
    } catch (e) {
        console.log(e);
        alert("No se pudo acceder a los libros, intente de nuevo")
    }
}