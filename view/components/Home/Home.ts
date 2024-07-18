import './Home.scss'

export const Home = () => {
    const main = document.createElement("main") as HTMLElement;

    const formSection = document.createElement("section") as HTMLElement;
    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.innerText = 'Riwi Books';

    const form = document.createElement("form") as HTMLFormElement;
    const emailInput = document.createElement("input") as HTMLInputElement;
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "correo electronico");
    const passwordInput = document.createElement("input") as HTMLInputElement;
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Contraseña");
    const submitButton = document.createElement("button") as HTMLButtonElement;
    submitButton.innerText = "Iniciar sesión";

    formSection.append(h1, form);

    form.append(emailInput, passwordInput, submitButton);

    main.append(formSection);


    return main;
}

