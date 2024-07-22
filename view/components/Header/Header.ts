import './Header.scss'

// Component of header
export const Header = (): HTMLElement => {

    const header = document.createElement("header") as HTMLElement;
    const section = document.createElement("section") as HTMLElement;
    section.className = "leftSection-header";

    const h1 = document.createElement("h1") as HTMLHeadingElement;
    h1.innerText = "Riwi books";
    h1.className = "header-title";

    const nav = document.createElement("nav") as HTMLElement;

    const ul = document.createElement("ul") as HTMLUListElement;
    ul.className = "nav-list"
    const booksLi = document.createElement("li") as HTMLLIElement;
    const booksAnchor = document.createElement("a") as HTMLAnchorElement;
    booksAnchor.href = "#/libros"
    booksAnchor.innerText = "Libros";
    booksLi.append(booksAnchor);

    const addBooksLi = document.createElement("li") as HTMLLIElement;
    const addBooksAnchor = document.createElement("a") as HTMLAnchorElement;
    addBooksAnchor.href = "#/agregarLibros";
    addBooksAnchor.innerText = "Agregar libros"
    addBooksLi.append(addBooksAnchor);

    const signOutLi = document.createElement("li") as HTMLLIElement;
    const signOutAnchor = document.createElement("a") as HTMLAnchorElement;
    signOutAnchor.innerText = "Cerrar sesión";
    signOutAnchor.href = "/"
    signOutAnchor.className = "signout";
    signOutLi.append(signOutAnchor);

    ul.append(booksLi, addBooksLi, signOutLi);
    nav.append(ul);
    section.append(h1);
    header.append(section, nav)


    signOutAnchor.addEventListener("click", () => {
        localStorage.removeItem("token");
    })

    return header
}