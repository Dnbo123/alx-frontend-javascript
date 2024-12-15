interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any; //To allow additional attributes
}

const teacher1: Teacher = {
    firstName: "Felix",
    lastName: "Odhis",
    fullTimeEmployee: false,
    location: "Phuket",
    contract: true, //New attribute
    department: "production"

}

console.log(teacher1);

interface Directors {
   firstName: string,
   lastName: string,
   location: string,
   fullTimeEmployee: boolean,
   numberOfReports: number,
   [propName: string]: any; //To allow additional attributes
}

    const director1: Directors = {
        firstName: 'Don',
        lastName: 'Bosco',
        location: 'Singapore',
        fullTimeEmployee: true,
        numberOfReports: 10,
    }
    console.log(director1);

    interface printTeacherFunction {
       (firstName: string, lastName: string): string;
    }
//implement printTeaher function
    const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
        if(!firstName || !lastName) {
            throw new Error('Both firstName and lastName nust be provided')
        }
       
       //Take the firstName and capitalize
       const firstInitial = firstName.charAt(0).toUpperCase();

       return `${firstInitial}. ${lastName}`
    };

    console.log(printTeacher("Don", "Bosco"));
    
    
    //Interface for constructor parameters
        interface StudentConstructor {
        firstName: string;
        lastName: string;
    }
        //Describing studentClass methods
    interface StudentInterface {
        workOnHomework(): string;
        displayName(): string;
    }

    //implementing studentClass
 class StudentClass implements StudentInterface {
      firstName: string;
      lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
 }
    workOnHomework(): string {
        return 'currently working'
    }
    displayName(): string {
        return this.firstName;
    }
 }
