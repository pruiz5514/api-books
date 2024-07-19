import { Router } from './Router'
export const App = () => {
    const divRoot: HTMLElement | null = document.querySelector("#root");

    if (divRoot) {
        Router();
    }
}

App()