const { constants } = require("./constants");
const axios = require("axios");
const url = constants.BASEURL;

const getUsers = gender => {
    return axios({
        method: 'get',
        url: `${url}/api/test/users?gender=${gender}`
    });
};

module.exports = {
    getUsers
};


