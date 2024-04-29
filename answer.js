// Write your code here
class Student {
    students = [];

    constructor(initialRecord) {
        this.students = initialRecord;
    }

    mergeStudents(students) {
        this.students = [...this.students, ...students];
        return this;
    }

    filterStudents(key, value) {
        this.students = this.students.filter((student) => student[key] === value);
        return this;
    }

    sortStudents() {
        this.students = this.students.sort((prev, curr) => {
            return (prev.div > curr.div ? 1 : prev.div < curr.div ? -1 : 0) ||
                (prev.name > curr.name ? 1 : prev.name < curr.name ? -1 : 0);
        });
        return this;
    }

    getDivisions() {
        return [...new Set(this.students.map(student => student.div).sort())];
    }

    countStudents() {
        this.students = this.students.reduce((arr, student) => {
            arr[student.div] = (arr[student.div] || 0) + 1;
            return arr;
        }, {});
        return this;
    }

    divideStudents() {
        this.students = this.students.reduce((arr, student) => {
            arr[student.div] = this.students.filter(stu => stu.div === student.div);
            return arr;
        }, {});
        return this;
    }
}
