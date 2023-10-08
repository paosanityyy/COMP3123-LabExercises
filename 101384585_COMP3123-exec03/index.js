const http = require("http");
//TODO - Use Employee Module here
const Employee = require("./Employee");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8086

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write(JSON.stringify(Employee))
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const sortedNames = Employee.map(employee => `${employee.firstName} ${employee.lastName}`).sort();
            res.write(JSON.stringify(sortedNames));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const totalSalary = Employee.reduce((acc, employee) => acc + employee.Salary, 0);
            res.write(JSON.stringify({ total_salary: totalSalary }));
        }
    }
    res.end()
})

server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})