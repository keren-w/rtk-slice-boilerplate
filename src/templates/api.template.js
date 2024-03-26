const getApiTemplate = (sliceName) => {
    return `
/*** mock api server responses - change any time ***/

// import { IResponseData } from './${sliceName}.types';
// import responseData from './data.json';

export const getInitialData = async ()/*: Promise<IResponseData[]>*/ => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({}/*responseData*/);
        }, 1000);
    })
};
`;
}

module.exports = {getApiTemplate};