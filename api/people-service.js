const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
       this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
        const peoples = this.peoples;
            // console.log(peoples);

        const result = words.filter(word => word.length > 6);
    }

    getPeople(filters) {
        // To be implemented!
        const peoples = this.peoples;
        peoples.forEach(console.log(peoples));
    }

}
