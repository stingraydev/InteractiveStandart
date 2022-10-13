const { getUsers, getUser, randomArrayValue } = require("../handlers/utils");

describe('/api/test/users?gender={gender}', () => {
    it('should get valid structure of response', () => {
        return getUsers('male').then(response => {
            const expectedKeys = [
                "success",
                "errorCode",
                "errorMessage",
                "result"
            ];
            expect(response && typeof response === 'object').toBe(true);
            expect(Object.keys(response.data)).toEqual(expect.arrayContaining(expectedKeys));
            expect(Array.isArray(response.data.result)).toBe(true);
        });
    });

    it('should get valid parameters of response', () => {
        return getUsers('female').then(response => {
            expect(response.status).toBe(200);
            expect(response.statusText).toBe('OK');
        });

    });
    it('should check success field', () => {
        return getUsers('male').then(response => {
            expect(response.data.success === true).toBe(true);
            expect(typeof response.data.success === 'boolean').toBe(true);
        });
    });

    it('should check errorCode field', () => {
        return getUsers('female').then(response => {
            expect(typeof response.data.errorCode === 'number').toEqual(true);
            expect(response.data.errorCode).toEqual(0);
        });
    });

    it('should check errorMessage field', () => {
        return getUsers('female').then(response => {
            expect(response.data.errorMessage).toBe(null);
        });
    });
});

describe('/api/test/user/{id}', () => {
    const ids = getUsers('male').then(response => {
        return response.data.result;
    });
    const id = randomArrayValue(ids);

    it('should get valid structure of response', () => {
        return getUser(id).then(response => {
            const expectedKeys = [
                "success",
                "errorCode",
                "errorMessage",
                "result"
            ];
            expect(response && typeof response === 'object').toBe(true);
            expect(Object.keys(response.data)).toEqual(expect.arrayContaining(expectedKeys));
            expect(response.data.result && typeof response.data.result === 'object').toBe(true);
        });
    });

    it('should get valid parameters of response', () => {
        return getUser(id).then(response => {
            expect(response.status).toBe(200);
            expect(response.statusText).toBe('OK');
        });

    });

    it('should check success field', () => {
        return getUser(id).then(response => {
            expect(response.data.success === true).toBe(true);
            expect(typeof response.data.success === 'boolean').toBe(true);
        });
    });

    it('should check errorCode field', () => {
        return getUser(id).then(response => {
            expect(typeof response.data.errorCode === 'number').toEqual(true);
            expect(response.data.errorCode).toEqual(0);
        });
    });

    it('should check errorMessage field', () => {
        return getUser(id).then(response => {
            expect(response.data.errorMessage).toBe(null);
        });
    });

    it('should check type of fields', () => {
        return getUser(id).then(response => {
            expect(typeof response.data.result.id === 'string').toBe(true);
            expect(typeof response.data.result.name === 'string').toBe(true);
            expect(typeof response.data.result.gender === 'string').toBe(true);
            expect(typeof response.data.result.age === 'string').toBe(true);
            expect(typeof response.data.result.city === 'string').toBe(true);
            expect(typeof response.data.result.registrationDate === 'string').toBe(true);
        });
    });
    it('should check values of gender field', () => {
        return getUser(id).then(response => {
            expect(response.data.result.gender === 'Female' || response.data.result.gender === 'Male').toBe(true);
        });
    });
});