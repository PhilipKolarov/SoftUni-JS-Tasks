class Student {
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grades = grades;
    }

    studentIntroduction() {
        console.log(`Hello! I am ${this.firstName} ${this.lastName}.`)
    }
}

const student1 = new Student('Philip', 'Kolarov', 24, [5, 6, 4, 6, 6, 6]);
console.log(student1.age);
student1.studentIntroduction();