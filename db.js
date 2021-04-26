const _ = require('lodash');

let users = [
    {
        "id": 1,
        "name": "wichan"
    },
    {
        "id": 2,
        "name": "gildong"
    },
    {
        "id": 3,
        "name": "kim"
    }
];

let getUser = (id) => {
    return _.find(users, ['id', id]);
}

exports.getUser = getUser;
