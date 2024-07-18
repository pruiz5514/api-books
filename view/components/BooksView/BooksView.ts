import './BooksView.scss';

export const BooksView = (): HTMLElement => {
    const main = document.createElement("main") as HTMLElement;
    main.className = "booksView-main";

    const h1 = document.createElement("h1") as HTMLHeadingElement;
    h1.innerText = "Nuestros libros";
    h1.className = "booksView-title"

    main.append(h1)
    return main;
}