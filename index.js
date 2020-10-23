function objectsSort(options = {}) {
    parseOptions(options);
    return objects;
}

function parseOptions(options = {}) {
    const sortBy = options.sortBy;
    for(let key in options){
        if(!Array.isArray(options[key])) {
            options[key] = new Array(5).fill(options[key]);
        }
    }
}
let options = {
    data: [],
    sortBy: [],
    sortdirection: [],
    sortOrder: [],
    valueParser: [],
}

module.exports = objectsSort;
