import {request as https} from './request';


export const GetPost = ({limit}) => {
    return https.get(`https://dummyapi.io/data/v1/post?page=1&limit=${limit}`)
}

export const GetUser = ({limit}) => {
    return https.get(`https://dummyapi.io/data/v1/user?page=1&limit=${limit}`)
}