export interface User {
    name:string;
    userName:string;
    email:string;
}

export interface Post {
    tittle:string;
    imageUrl:string;
    user:User; 
}

export interface PostComment {
    content:string;
    likes:number;
    user:User;
}

export interface Company {
    name:string;
    cnpj:string;
    website:string;
}