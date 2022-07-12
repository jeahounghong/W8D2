
// DEFINING STUDENTS
function Student(first_name, last_name) {
    this.fname = first_name;
    this.lname = last_name;
    this.courses = [];
}
let student1 = new Student("student","1");
let student2 = new Student("student","2");
let student3 = new Student("student","3");


Student.prototype.name = function() {
    return this.fname + " " + this.lname
}
console.log(student1.name());
console.log(student2.name());
console.log(student3.name());

// DEFINING COURSES
function Course(name, department, num_credits) {
    this.name = name;
    this.department = department;
    this.num_credits = num_credits;
    this.students = [];
}
let course_1 = new Course("CS", "Computer Science", "3");
let course_2 = new Course("Physics 101", "Physics", "3");

Student.prototype.enroll = function(course) {
    if (!this.courses.includes(course)){
        this.courses.push(course);
    } else {
        return -1;
    }
}

Student.prototype.courseLoad = function() {
     let hash = {}
     this.courses.forEach(function(el) {
        hash[el.department] ||= 0;
        hash[el.department] += el.num_credits;
     });
     return hash;
}

Course.prototype.addStudent = function(student){
    if (student.enroll(this) !== -1) {
        this.students.push(student);
    }
}

Course.prototype.dotw = function(days) {
    this.dotw ||= []
    const weekdays = ['mon','tue','wed','thu','fri'];
    days.forEach(function(el) {
        if (weeksdays.include(el)) {
            this.dotw.push(el);
        }
    });
}

Course.prototype.block = function(blk) {
    this.block = blk;
}

Course.prototype.block = (blk) => {
    this.block = blk;
}

Course.prototype.conflictsWith = function(course) {
    let crse = this;
    if (course.block === this.block) {
        // console.log(crse.dotw)
        

        course.dotw.forEach(function(day) {
            //console.log(crse.dotw.includes(day) + "LKSDNFKLSD")
            if (crse.dotw.includes(day)) {
                console.log("HI");
                return true;
            }
        });
    }
    return false;
}
course_1.block = 1;
course_2.block = 1;
course_1.dotw = ['mon','tue']
course_2.dotw = ['mon','tue']
// console.log(course_1.dotw.includes('mon'))
console.log(course_1.conflictsWith(course_2))