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
    id: any
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface FilterProps {
    house:string; 
}