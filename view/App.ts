import { Router } from './Router'
export const App = () => {
    const divRoot: HTMLElement | null = document.querySelector("#root");

    // Function were the components are rendered
    if (divRoot) {
        Router();
    }
}

App()