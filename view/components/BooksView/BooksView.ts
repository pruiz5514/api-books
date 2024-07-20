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

    renderBooks(section);

    main.append(h1, section);

    document.addEventListener("click", async (event: Event) => {
        const booksController = new BooksController('http://190.147.64.47:5155/');
        const target = event.target as HTMLElement;
        const idBookToDelete = target.getAttribute("book-id");

        if (idBookToDelete) {
            try {
                await booksController.deteleBook(idBookToDelete);
                await renderBooks(section);

            } catch (e) {
                console.log(e);
                alert("No se pudo eleminar el libro");
            }
        };

        if (target.classList.contains("card-button")) {
            const idCard = target.getAttribute("card-id");
            if (idCard) {
                localStorage.setItem("card-id", idCard);
                window.location.href = `#/${idCard}`
            }
        }
    })

    return main;
}

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

const renderBooks = async (section: HTMLElement): Promise<void> => {
    const books = await showBooks();
    section.innerHTML = ``;
    books?.forEach(book => {
        section.append(BooksCard(book))
    })
}
