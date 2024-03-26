const getApiTemplate = (sliceName) => {
    return `
/*** mock api server responses - change any time ***/

// import { IResponseData } from './${sliceName}.types';

export const getInitialData = async ()/*: Promise<IResponseData[]>*/ => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({});
        }, 1000);
    })
};
`;
}

module.exports = {getApiTemplate};