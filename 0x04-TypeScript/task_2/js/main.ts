    //Defining DirectorInterface
    interface DirectorInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workDirectorTasks(): string;
    }
    
    // Defining TeacherInterface
    interface TeacherInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workTeacherTasks(): string;
    }

    class Director implements DirectorInterface {
        workFromHome(): string {
            return 'Working from home';
        }
        getCoffeeBreak(): string {
            return 'Getting coffe break';
        }
        workDirectorTasks(): string {
           return 'Getting to director tasks';
        }
    }

    class Teacher implements TeacherInterface {
        workFromHome(): string {
            return 'Cannot work from home';
        }
        getCoffeeBreak(): string {
            return 'Cannot have a break';
        }
        workTeacherTasks(): string {
            return 'Getting to work';
        }
    }

    function createEmployee(salary: number | string): Director | Teacher {
                // Convert string salary to number if it's a string with a '$' prefix
         const numSalary = typeof salary === 'string' 
         ? parseInt(salary.replace('$', ''), 10) 
       : salary;

       // Return Teacher if salary is less than 500, otherwise return Director
    return numSalary < 500 ? new Teacher() : new Director();
    }

    // Function for expected result demonstration
function demonstrateEmployeeCreation() {
    console.log(createEmployee(200)); // Should output: Teacher
    console.log(createEmployee(1000)); // Should output: Director
    console.log(createEmployee('$500')); // Should output: Director

}
demonstrateEmployeeCreation();
 
// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// Execute work function based on employee type
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}
// Demonstration function
function demonstrateEmployeeWork() {
    // Demonstrate executeWork function
    console.log(executeWork(createEmployee(200))); // Should output: Getting to work
    console.log(executeWork(createEmployee(1000))); // Should output: Getting to director tasks

    // Additional demonstration with explicit type checking
    const teacher = createEmployee(200);
    const director = createEmployee(1000);
}
demonstrateEmployeeWork();