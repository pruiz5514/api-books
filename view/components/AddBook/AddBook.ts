import './AddBook.scss';

export const AddBook = (): HTMLElement => {
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
    titleInput.placeholder = "Titulo del libro";

    const authorInput = document.createElement("input") as HTMLInputElement;
    authorInput.className = "addBook-imput";
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

    return main;
}