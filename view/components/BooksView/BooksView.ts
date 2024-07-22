import './BooksView.scss';
import { BooksController } from '../../../controller/Books.controllers';
import { BooksCard } from '../BooksCard/BooksCard';

// Component of where all the books are rendered
export const BooksView = (): HTMLElement => {

    // Guardian that identifies if there is an open session
    const token = localStorage.getItem("token");
    if (token === null) {
        window.location.hash = "/";
    }

    // Creation of the main container
    const main = document.createElement("main") as HTMLElement;
    main.className = "booksView-main";

    const h1 = document.createElement("h1") as HTMLHeadingElement;
    h1.innerText = "Nuestros libros";
    h1.className = "booksView-title";

    const section = document.createElement("section") as HTMLElement;
    section.className = "cards-container";

    // Function that renders all the books
    renderBooks(section);

    main.append(h1, section);

    // Add event listener that gets the id of the book to delete or to see more information about the book 
    document.addEventListener("click", async (event: Event) => {
        // The Books.controller class is instantiated 
        const booksController = new BooksController('http://190.147.64.47:5155/');
        const target = event.target as HTMLElement;
        const idBookToDelete = target.getAttribute("book-id");

        if (idBookToDelete) {
            try {
                //The “deleteBook” method is implemented to delete the selected book.
                await booksController.deteleBook(idBookToDelete);

                // All books are re-rendered
                await renderBooks(section);

            } catch (e) {
                console.log(e);
            }
        };

        // Get the id of the book you want to know more about and redirect to the book's information page.
        if (target.classList.contains("card-button")) {
            const idCard = target.getAttribute("card-id");
            if (idCard) {
                localStorage.setItem("card-id", idCard);
                window.location.hash = `#/${idCard}`
            }
        }
    })

    return main;
}

// Function that obtains all the books from the API
const showBooks = async () => {
    const booksController = new BooksController('http://190.147.64.47:5155/');

    try {
        const getBooks = await booksController.getBooks('api/v1/books?limit=1000');
        return getBooks.data
    } catch (e) {
        console.log(e);
        alert("No se pudo acceder a los libros, intente de nuevo")
    }
}

// Function that passes all the information of each book and inserts them to the cards to render them on the page. 
const renderBooks = async (section: HTMLElement): Promise<void> => {
    const books = await showBooks();
    section.innerHTML = ``;
    books?.forEach(book => {
        section.append(BooksCard(book))
    })
}
