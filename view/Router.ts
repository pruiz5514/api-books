import { Home } from './components/Home/Home'
import { BooksView } from './components/BooksView/BooksView'

export const Router = () => {
    let { hash } = location;

    const divRoot = document.querySelector("#root") as HTMLElement;

    divRoot.innerHTML = ` `;

    if (hash === "" || hash === "#/") {
        divRoot.append(Home());
    }
    if (hash === "#/books") {
        divRoot.append(BooksView())
    }
};