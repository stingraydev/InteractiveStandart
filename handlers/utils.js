const {constants} = require("./constants");
const axios = require("axios");
const url = constants.BASEURL;

const getUsers = (gender) => {
    return axios({
        method: 'get',
        url: `${url}/api/test/users?gender=${gender}`
    });
};

const getUser = (id) => {
    return axios({
        method: 'get',
        url: `${url}/api/test/user/${id}`
    });
};

const randomString = length => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
};

const randomArrayValue = array => Math.floor(Math.random() * array.length);

module.exports = {
    getUsers,
    getUser,
    randomString,
    randomArrayValue
};


