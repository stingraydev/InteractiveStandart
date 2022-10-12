const { getUsers } = require("../handlers/utils");

test('Main case', () => {
    return getUsers("male").then(response => {
        expect(response.status).toBe(200);
    })
});