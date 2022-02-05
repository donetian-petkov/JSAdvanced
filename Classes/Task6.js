class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        let array = [name, salary, position, department];

        for (let element of array) {
            if (typeof element === 'undefined' && !element){
                throw new Error("Invalid input!");
            }
        }

        if (Number(salary) < 0) {
            throw new Error("Invalid input!");
        }

        let employee = {
            name: name,
            salary: Number(salary),
            position: position
        }

        if (!this.departments.hasOwnProperty(department)){

           this.departments[department] = {
               employees: [employee]
           };

        } else {
            this.departments[department].employees.push(employee);
        }

        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;

    }

    bestDepartment(){
        let bestAvgSalary= 0;
        let bestDepart = '';

        for (let department in this.departments){

            let depart = this.departments[department];

            let avgSalary = depart.employees.reduce((total ,currentElement) => {
                return total + currentElement.salary;
            },0);



            if (avgSalary/depart.employees.length > bestAvgSalary) {
                bestDepart = department;
                bestAvgSalary = avgSalary/depart.employees.length;
            }
        }

        this.departments[bestDepart].employees.sort(function (a,b) {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let text = `Best Department is: ${bestDepart}\nAverage salary: ${bestAvgSalary.toFixed(2)}`;

        for (let employee of this.departments[bestDepart].employees) {
            text += `\n${employee.name} ${employee.salary} ${employee.position}`;
        }

        return text;
    }

}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Ivan", 2000, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
