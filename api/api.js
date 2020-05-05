const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const bodyParser = require('body-parser');
const v1 = express.Router();
const HttpStatus = require('http-status-codes');



// To be implemented!

module.exports = app;


v1.get('/people', async (request, response) => {
    try {
        const people = await peopleService.getPeople();
        response.send(people);
    } catch(e) {
        console.log('error ocurs ', e);
        response.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
    }
});



v1.put('/people/:id', basicAuth, async (request, response) => {
    const id = request.params.id;
    const peopple = request.body;
    if (!peopleService.isPeopleValid(peopple))
        return response.sendStatus(HttpStatus.BAD_REQUEST);

    try {
        const result = await PeopleService.updatePeople(people, id);
        if(!result.isFind) return response.sendStatus(HttpStatus.NOT_FOUND);
        // 304 ou 202... 3xx correspond normalement à une redirection
        result.isModified ? response.sendStatus(HttpStatus.OK) : response.sendStatus(HttpStatus.NOT_MODIFIED);
    } catch(e) {
        console.log('error occurs : ', e);
        response.sendStatus(HttpStatus.BAD_REQUEST);
    }
});


