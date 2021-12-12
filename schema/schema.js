const ajvInstance = require('./ajv-instance');

const schema = {
    type: 'object',
    properties: {
        firstName: { type: 'string', minLength: 3 },
        email: { type: 'string', format: 'email' },
        dob: { type: 'string', format: 'date' },
        countryCode: {
            type: 'string',
            enum: ['US', 'CA'],
        },
    },
    required: ['firstName', 'email', 'dob', 'countryCode'],
};

module.exports = ajvInstance.compile(schema);