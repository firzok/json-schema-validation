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

// const schema = {

//     title: "Person",
//     type: "object",
//     properties: {
//         firstName: {
//             type: "string",
//             description: "The person's first name."
//         },
//         lastName: {
//             type: "string",
//             description: "The person's last name."
//         },
//         age: {
//             description: "Age in years which must be equal to or greater than zero.",
//             type: "integer",
//             minimum: 0
//         }
//     },

//     required: ['firstName', 'email', 'dob', 'countryCode'],
// };

// const schema = {

//     description: "A representation of a person, company, organization, or place",
//     type: "object",
//     properties: {
//         fruits: {
//             type: "array",
//             items: {
//                 "type": "string"
//             }
//         },
//         vegetables: {
//             type: "array",
//             items: { "$ref": "#/$defs/veggie" }
//         }
//     },
//     $defs: {
//         veggie: {
//             type: "object",
//             required: ["veggieName", "veggieLike"],
//             properties: {
//                 veggieName: {
//                     type: "string",
//                     description: "The name of the vegetable."
//                 },
//                 veggieLike: {
//                     type: "boolean",
//                     description: "Do I like this vegetable?"
//                 }
//             }
//         }
//     }
// };

module.exports = ajvInstance.compile(schema);