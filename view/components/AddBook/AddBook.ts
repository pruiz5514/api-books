import { BooksController } from '../../../controller/Books.controllers';
import { BooksInfo } from '../../../model/Books.model';
import './AddBook.scss';


// Component of the form that creates books
export const AddBook = (): HTMLElement => {

    // Guardian that identifies if there is an open session
    const token = localStorage.getItem("token");
    if (token === null) {
        window.location.hash = "/";
    };

    const main = document.createElement("main") as HTMLElement;
    main.className = "addBook-main";

    const section = document.createElement("section") as HTMLElement;
    section.className = "addBook-form-container"

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.className = "addBook-title"
    h1.innerText = "Agrega un libro";

    const form = document.createElement("form") as HTMLFormElement;
    form.className = "addBook-form";

    const titleInput = document.createElement("input") as HTMLInputElement;
    titleInput.className = "addBook-imput";
    titleInput.type = "text";
    titleInput.placeholder = "Titulo del libro";

    const authorInput = document.createElement("input") as HTMLInputElement;
    authorInput.className = "addBook-imput";
    authorInput.type = "text";
    authorInput.placeholder = "Autor del libro";

    const descriptionInput = document.createElement("textarea") as HTMLTextAreaElement;
    descriptionInput.className = "addBook-textarea";
    descriptionInput.placeholder = "Descripcion del libro";

    const summaryInput = document.createElement("textarea") as HTMLTextAreaElement;
    summaryInput.className = "addBook-textarea";
    summaryInput.placeholder = "Resumen del libro";

    const addBookButton = document.createElement("button") as HTMLButtonElement;
    addBookButton.innerText = "Agregar libro";
    addBookButton.className = "addBook-button";
    addBookButton.type = "submit";


    form.append(titleInput, authorInput, descriptionInput, summaryInput, addBookButton);
    section.append(h1, form)
    main.append(section);

    form.addEventListener("submit", async (event: Event) => {
        event.preventDefault();

        const booksController = new BooksController('http://190.147.64.47:5155/');

        // Information of the book to post 
        const newBook: BooksInfo = {
            title: titleInput.value,
            author: authorInput.value,
            description: descriptionInput.value,
            summary: summaryInput.value,
        }

        try {
            // The class is instantiated and the method is executed to post the new books.
            const resultPostBook = await booksController.postBooks(newBook);
            console.log(resultPostBook);
            form.reset();
            alert("Se agrego el libro exitosamente");
        } catch (e) {
            console.log(e);

        }

    })

    return main;
}