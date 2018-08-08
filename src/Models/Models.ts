export class LoginResponse{
    constructor(public body:string, public id:string, public title:string, public userId:string){}
}

export class Users{
 constructor(public email:string,    
    public id:string,    
    public name:string,
    public phone:string,
    public username:string,
    public website:string){} 
}


export class  Geo{
    constructor(public lat:string, public lng:string){}
}
export class Address{
    constructor(public city:string,public geo:Geo,        
        public street:string,        
        public suite:string,        
        public zipcode:string){}
}

export class Company{
    constructor(public bs:string,        
        public catchPhrase:string,        
        public name:string){}
}