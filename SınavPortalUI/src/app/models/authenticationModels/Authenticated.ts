export interface Authenticated{
    id:number;
    userFirstName:string;
    userLastName:string;
    userEmail:string;
    token:string;
    expiration:Date;
}