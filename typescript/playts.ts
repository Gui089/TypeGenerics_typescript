import {Post, PostComment, User, Company} from "./interfaces";
import {Lucas, vitor, post, comment, coffstack} from "./mocksData";


interface Page<Data> {
    data:Data[];
    count:number;
    nextPage: number | null;
    previusPage:number | null; 
}

function getUserList():Page<User> {
    return {
        count: 5,
        data:[Lucas, vitor],
        nextPage: 2,
        previusPage: null,
    };
}

const users = getUserList();

users.data[0];