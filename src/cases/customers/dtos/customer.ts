export interface stateDTO {
    id?: string;
    name: string;
    ibge: string;
    acronym: string;
    
}
export interface cityDTO {
    id?: string;
    name: string;
    ibge: string;
    steate: string;
}

export interface CustomerDTO {
    id?: string;
    name: string;
    address: string;
    zipcode: string;
    city: string;
}