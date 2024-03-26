const getConstsTemplate = (sliceName) => {
    return `
import {ISliceState} from './${sliceName}.types';

export const SLICE_NAME = '${sliceName}';

export const initialState: ISliceState = {}

export const actions = {
    GET_DATA: 'getData',
};
    `;
}

module.exports = {getConstsTemplate}