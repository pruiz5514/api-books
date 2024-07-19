import { Home } from './components/Home/Home'
import { BooksView } from './components/BooksView/BooksView'
import { Header } from './components/Header/Header'

export const Router = () => {
    let { hash } = location;

    const divRoot = document.querySelector("#root") as HTMLElement;

    divRoot.innerHTML = ` `;

    if (hash === "" || hash === "#/") {
        divRoot.append(Home());
    }
    if (hash === "#/libros") {
        divRoot.append(Header(), BooksView())
    }
};