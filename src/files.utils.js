const {getSliceTemplate} = require('./templates/slice.template.js');
const {getConstsTemplate} = require('./templates/consts.template.js');
const {getTypesTemplate} = require('./templates/types.template.js');
const {getApiTemplate} = require('./templates/api.template.js');
const {getAsyncTemplate} = require('./templates/async.template.js');

const fileTypes = ['slice', 'transformers', 'selectors', 'types', 'async', 'consts', 'api'];

const getFileTemplate = (sliceName, fileType) => {
    const templates = {
        slice: getSliceTemplate(sliceName),
        consts: getConstsTemplate(sliceName),
        types: getTypesTemplate(sliceName),
        api: getApiTemplate(sliceName),
        async: getAsyncTemplate(sliceName),
    };
    return templates[fileType] || '';
};

const getFilesData = (sliceName) => {
    return fileTypes.map(fileType => ({
        filePath: `./store/${sliceName}.${fileType}.ts`,
        template: getFileTemplate(sliceName, fileType),
    }));
};

module.exports = { getFilesData }