import { Home } from './components/Home/Home'

export const Router = () => {
    let { hash } = location;

    const divRoot = document.querySelector("#root") as HTMLElement;

    divRoot.innerHTML = ` `;

    if (hash === "" || hash === "#/") {
        divRoot.append(Home());
    }
};