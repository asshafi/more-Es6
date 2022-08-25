// syntantic sugar
class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name,location) {
        this.name = name;
        this.location = location;
    }
    statSupportSession(time) {
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`)
    }
}

const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.statSupportSession('9.00');
aamir.createQuiz(60);

const Solaiman = new Instructor('solaiman khan', 'dhaka');
console.log(Solaiman);
aamir.statSupportSession('9.00');
aamir.createQuiz(60);

