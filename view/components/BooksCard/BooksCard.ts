export const BooksCard = (): HTMLElement => {
    const card = document.createElement("article") as HTMLElement;

    const title = document.createElement("h3") as HTMLHeadingElement;
    const author = document.createElement("p") as HTMLParagraphElement;

    card.append(title, author);

    return card;
}