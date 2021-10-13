const users = [
    {firstName: "Dikshit", lastName: "singh", age:19},
    {firstName: "Donald", lastName: "trump", age:75},
    {firstName: "Elon", lastName: "musk", age:19},
    {firstName: "Adolf", lastName: "hitler", age:68},
];

// list of full names 

const output = users.filter((x) => x.age <30).map((x)=>x.firstName)
console.log(output);


 