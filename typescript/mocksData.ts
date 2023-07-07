import { Company, Post, PostComment, User } from "./interfaces";

export const Lucas:User = {
    name:"Lucas",
    userName:"LucasGar6",
    email:"lucasgar6@gmail.com"
}

export const vitor:User = {
    name:"Vitor",
    userName:"vitor_silva",
    email:"vitor@gmail.com"
}

export const post: Post = {
    tittle:"Tittle of post",
    imageUrl:"https://picsum.photos/200/200",
    user:Lucas
}

export const comment: PostComment = {
    content: "Conteudo do comentario",
    likes: 5,
    user:vitor
}

export const coffstack: Company = {
    name:"Coffstack",
    cnpj:"123456",
    website:"https://coffstack.com",
}