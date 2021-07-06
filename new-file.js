var User ={
    name: "Jibin Joseph",
    getUserName: function(){
        console.log(`User name is : ${this.name}`);
    },
};

var jibin = Object.create(User);
console.log(jibin);
console.log(jibin.name);
jibin.getUserName();

var sam = Object.create(User,{
    name:{value:"Sammy"},
    courseCount:{value:4},
});

sam.getUserName();