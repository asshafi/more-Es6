// 1. var let const
//  break up with var 
const number = [12, 34, 54, 54];
let salary = 450;
salary = 455;

// 2.default parameter
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 3. template string 
const elementHTML = `
<div> <h3> Name:  </h3>
<p> Address:  </p>
<p> Salary: ${calculateSalary(10000,0,0)}  </p>
<p> Others: ${number[2]} </p>
</div>
`

// 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread
const ages = [12, 13, 34, 54, 21, 54];
const newAges = [...ages, 33, 52, 33, 55];

// destructuring
const {x,y,z,...c} ={ x:45, y:12, name:'Sakib al hasan', salary:45000};
const [a, b, ...r] = [12, 34, 65, 76, 87, 45];
