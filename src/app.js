class User{
    constructor(name, age, profession, gender, role, avatar){
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.gender = gender;
        this.role = role;
        this.avatar = avatar;
    }
    sayHello(){
        return `Hello, I'm ${this.name}.`;
    };
    sayAge(){
        return `${this.name} is ${this.age} years old.`;
    };
    sayProfession(){
        return ` ${this.name} is a ${this.profession}.`;
    };   
};

class Admin extends User{
    sayHello(){
        return `Hello, I'm ${this.name}, and I'am an Admin.`;
    };
};
class Editor extends User{
    sayHello(){
        return `Hi, I'm ${this.name}, an Editor here.`;
    };
};
class Viewer extends User{
    sayHello(){
        return `Hey, I'm ${this.name}, and I love viewing content.`;
    };
};