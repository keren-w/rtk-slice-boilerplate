
/*** mock api server responses - change any time ***/

// import { IResponseData } from './users.types';
// import responseData from './data.json';

export const getInitialData = async ()/*: Promise<IResponseData[]>*/ => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({}/*responseData*/);
        }, 1000);
    })
};
