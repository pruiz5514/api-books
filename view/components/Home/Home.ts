import './Home.scss';
import { BooksController } from '../../../controller/Books.controllers';
import { BodyRequestLoginBooks } from '../../../model/Login.models';


// Component of the log in section
export const Home = (): HTMLElement => {
    // Creation of login section
    const main = document.createElement("main") as HTMLElement;
    main.className = "main-home";

    const formSection = document.createElement("section") as HTMLElement;
    formSection.className = "login-section"

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.className = "login-title"
    h1.innerText = 'Riwi Books';

    const form = document.createElement("form") as HTMLFormElement;
    form.className = "login-form"

    const emailInput = document.createElement("input") as HTMLInputElement;
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "correo electronico");
    emailInput.className = "login-input";

    const passwordInput = document.createElement("input") as HTMLInputElement;
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Contraseña");
    passwordInput.className = "login-input";

    const submitButton = document.createElement("button") as HTMLButtonElement;
    submitButton.innerText = "Iniciar sesión";
    submitButton.className = "login-button";

    formSection.append(h1, form);

    form.append(emailInput, passwordInput, submitButton);

    main.append(formSection);


    // Event to send the form and get the token
    form.addEventListener("submit", async (event: Event) => {
        event.preventDefault();

        const booksController = new BooksController('http://190.147.64.47:5155/');

        const dataToLogin: BodyRequestLoginBooks = {
            email: emailInput.value,
            password: passwordInput.value
        }

        try {
            const resultLogin = await booksController.postLogin(dataToLogin);
            if (resultLogin.data.token) {
                form.reset();
                localStorage.setItem("token", resultLogin.data.token);
                window.location.hash = "#/libros";
            }

        } catch (e) {
            console.log(e);
            alert("La contraseña o el correo no son correctos, intentelo nuevamente");
            form.reset()
        }
    })

    return main;
}



