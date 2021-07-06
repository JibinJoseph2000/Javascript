var User = function (firstName, lastName, courseCount) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = function () {
  console.log(`Your firstname is : ${this.firstName}`);
};

User.prototype.getlastname = function () {
  console.log(`Your firstname is : ${this.lastName}`);
};

var hitesh = new User("Hitesh", "Choudhary", 12);
hitesh.getCourseCount();

if (hitesh.hasOwnProperty("firstName")) {
  hitesh.getFirstname();
}

//console.log(hitesh);

var alex = new User("Alex", "Danvers", 10);
alex.getFirstname();
alex.getlastname();
alex.getCourseCount();

//console.log(alex);
