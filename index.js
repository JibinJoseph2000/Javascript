
var getUserRole =function(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        
        case "subadmin":
            return `${name} is sub-admin with access to create and delete couses `;
            break;
        
        case "testprep":
            return `${name} is a testprep with access to create and delete the tests`;
            break;
    
        case "user":
                return `${name} is a user to consume content`;
                break;
    
        default:
            return `${name} is a trail user`;
            break;
    }
}

var returnValue = getUserRole("jibin",'admin');
console.log(returnValue);
console.log(getUserRole('joseph','user'));
