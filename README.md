# JSON Schema Validation

This is a technical coding challenge I did for my student job application at SAP. It validates the user provided JSON against a static JSON schema.


## Demo
[Hosted on Heroku](https://json-schema-validation.herokuapp.com/)


## Demo Local
```
git clone https://github.com/firzok/json-schema-validation.git
cd json-schema-validation
npm i
npm run start
```
You can also use `npm run dev` to run using nodemon.

___


This is a Node + Express application.

I am using [AJV](https://github.com/ajv-validator/ajv) for JSON Schema validation. The code editor I am using is [ACE](https://github.com/ajaxorg/ace) / [ACE Builds](https://github.com/ajaxorg/ace-builds/).

___

### Todos
- [x] Learn and make a basic Node + Express application.
- [x] Implement AJV for JSON Schema validation.
- [x] Implement a basic code editor.
- [x] Add keyboard shortcuts for submission. Mac: Command+Enter / Win: Control+Enter
- [x] Deploy the app on Heroku since github pages wont accept a Node application.
- [x] Add favicon :P 
