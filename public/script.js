const schema = {
    "title": "Employee",
    "description": "Object containing employee details",
    "type": "object",
    "properties": {
        "firstName": {
            "title": "First Name",
            "description": "The given name.",
            "examples": [
                "John"
            ],
            "type": "string"
        },
        "lastName": {
            "title": "Last Name",
            "description": "The family name.",
            "examples": [
                "Smith"
            ],
            "type": "string"
        },
        "gender": {
            "title": "Gender",
            "enum": ["male", "female"]
        },
        "availableToHire": {
            "type": "boolean",
            "default": false
        },
        "age": {
            "description": "Age in years",
            "type": "integer",
            "minimum": 0,
            "examples": [28, 32]
        },
        "job": {
            "$ref": "job"
        }
    },
    "required": ["firstName", "lastName"]
}

const job = {
    "title": "Job description",
    "type": "object",
    "required": ["address"],
    "properties": {
        "company": {
            "type": "string",
            "examples": [
                "ACME",
                "Dexter Industries"
            ]
        },
        "role": {
            "description": "Job title.",
            "type": "string",
            "examples": [
                "Human Resources Coordinator",
                "Software Developer"
            ],
            "default": "Software Developer"
        },
        "address": {
            "type": "string"
        },
        "salary": {
            "type": "number",
            "minimum": 100,
            "examples": [100, 110, 120]
        }
    }
}

// const schema = {
//     type: 'object',
//     properties: {
//         firstName: { type: 'string', minLength: 3 },
//         email: { type: 'string', format: 'email' },
//         dob: { type: 'string', format: 'date' },
//         countryCode: {
//             type: 'string',
//             enum: ['US', 'CA'],
//         },
//     },
//     required: ['firstName', 'email', 'dob', 'countryCode'],
// };

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


const json = {
    "firstName": "Firzok",
    "lastName": "Nadeem",
    "gender": "male",
    "age": "27",
    "availableToHire": true,
    "job": {
        "company": "SAP",
        "role": "developer",
        "salary": 90,
        "address": "123 abc street"
    }
}

const options = {
    schema: schema,
    schemaRefs: {
        "job": job
    },
    mode: 'code',
    modes: ['code', 'text', 'tree', 'preview']
}

// create the editor
const container = document.getElementById('jsoneditor')
const editor = new JSONEditor(container, options, json)