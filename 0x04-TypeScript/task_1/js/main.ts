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