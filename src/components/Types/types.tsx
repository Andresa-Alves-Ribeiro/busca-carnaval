export interface CardTypes {
    id: string;
    img: string;
    title: string;
    description: string;
    location: string;
}

export interface Props {
    cardsList: CardTypes[];
}
