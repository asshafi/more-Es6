class TeamMember{
    name;
    location;
    constructor(name,location) {
        this.name = name;
        this.location = location;
    }

    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}
class Instructor extends TeamMember{
    
    designation = 'Web Course Instructor'
    team = 'web team'
   
    constructor(name,location) {
       super(name,location)
    }
    statSupportSession(time) {
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`)
    }
    
}

class Developer extends TeamMember{
    
    designation = 'Web Course Instructor'
    team = 'web team'
    
    
    constructor(name,location,tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`Please release the version ${version}`)
    }
    
}


class JobPlacement extends TeamMember{
    
    designation = 'job placement commandos'
    team = 'job placement'
    region;
    constructor(name,location,region) {
        super(name, location);
        this.region = region;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`Please release the version ${version}`)
    }
}
const alia = new Developer('Alis chat', 'dhaka', 'React');
console.log(agila);
alia.provideFeedback();