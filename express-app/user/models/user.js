

module.exports = class User{
    // It initializes properties with values provided
    constructor(name, email, password, gender){
        this.name = name;
        this.email = email;
        this.password = password;
        this.gender = gender;
    }
}