import { Home } from './components/Home/Home'
import { BooksView } from './components/BooksView/BooksView'
import { Header } from './components/Header/Header'
import { AddBook } from './components/AddBook/AddBook'
import { BookInfo } from './components/BookInfo/BookInfo';

// Path file, according to the path each component is rendered.

export const Router = async () => {
    let { hash } = location;

    const divRoot = document.querySelector("#root") as HTMLElement;

    divRoot.innerHTML = ` `;

    if (hash === "" || hash === "#/") {
        divRoot.append(Home());
    }
    else if (hash === "#/libros") {
        divRoot.append(Header(), BooksView())
    }
    else if (hash == "#/agregarLibros") {
        divRoot.append(Header(), AddBook())
    }
    else {
        divRoot.append(Header(), await BookInfo())
    }
};