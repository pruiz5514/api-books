import './BookInfo.scss'
import { BooksController } from "../../../controller/Books.controllers";
import { BooksInfo } from "../../../model/Books.model";

export const BookInfo = async (): Promise<HTMLElement> => {

    const currentBook = await getCurrentBook();
    console.log(currentBook);


    const main = document.createElement("main") as HTMLElement;
    main.className = "bookInfo-main";

    const section = document.createElement("section") as HTMLElement;
    section.className = "bookInfo-container";

    const imgContainer = document.createElement("div") as HTMLElement;
    imgContainer.className = "imgInfo-contaiener";
    const img = document.createElement("img") as HTMLImageElement;
    img.className = "bookInfo-img";
    img.setAttribute("src", "data:image/jpeg;base64,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");
    imgContainer.append(img);

    const article = document.createElement("article") as HTMLElement;
    article.className = "bookDesc-container";
    const bookTilte = document.createElement("h1") as HTMLHeadingElement;
    bookTilte.innerText = currentBook?.title;

    const author = document.createElement("p") as HTMLParagraphElement;
    author.innerText = currentBook?.author;

    const descTitle = document.createElement("h3") as HTMLHeadingElement;
    descTitle.innerText = "Descripción";
    const description = document.createElement("p") as HTMLParagraphElement;
    description.innerText = currentBook?.description;

    const summTitle = document.createElement("h3") as HTMLHeadingElement;
    summTitle.innerText = "Resumen";
    const summary = document.createElement("p") as HTMLParagraphElement;
    summary.innerText = currentBook?.summary;

    article.append(bookTilte, author, descTitle, description, summTitle, summary);
    section.append(imgContainer, article)




    const sectionForm = document.createElement("section") as HTMLElement;
    sectionForm.className = "addBook-form-container"

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.className = "addBook-title"
    h1.innerText = "Editar el libro";

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
    addBookButton.innerText = "Editar";
    addBookButton.className = "addBook-button";
    addBookButton.type = "submit";


    form.append(titleInput, authorInput, descriptionInput, summaryInput, addBookButton);
    sectionForm.append(h1, form)

    main.append(section, sectionForm);

    form.addEventListener("submit", async (event: Event) => {
        event.preventDefault();

        const booksController = new BooksController('http://190.147.64.47:5155/');
        const idBookToUpdate = localStorage.getItem("card-id")

        const bookUpdate: BooksInfo = {
            title: titleInput.value,
            author: authorInput.value,
            description: descriptionInput.value,
            summary: summaryInput.value,
        }

        try {
            const resultUpdateBook = await booksController.updateBook(`${idBookToUpdate}`, bookUpdate);
            console.log(resultUpdateBook);
            form.reset();
            alert("Se actualizo el libro exitosamente");
            window.location.href = "#/libros";
        } catch (e) {
            console.log(e);
        }

    })

    return main;
};

async function getCurrentBook() {
    const bookId = localStorage.getItem("card-id");

    const booksController = new BooksController('http://190.147.64.47:5155/');
    try {
        const book = await booksController.getBooks(`api/v1/books/${bookId}`);
        return book.data;
    } catch (e) {
        console.log(e);
        alert("No se puede mostrar el libro, intente de nuevo");
    }
}