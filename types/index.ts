export interface CharacterProps {
    id: number;
    name:string;
    dateOfBirth: number; 
}

export interface detailsProps{
    name: string;
    role: string;
    house: string;
    wand: string;
    id: any;
    image: string;
    actor: string;
    wizard: string;
    ancestry: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface FilterProps {
    house:string; 
}

export interface ParamsProps{
    id: any
}
