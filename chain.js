const users = [{ id: 1, name: 'abul', job: 'doctor' }];

console.log(users[0].name);


const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'leader' },
    ]
}

const firstJob = data.data[0].job;

const user = {
    id: 5001,
    name: 'Thomas alva edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
// optional chainig 
const userFloor = user.address?.stree?.second;