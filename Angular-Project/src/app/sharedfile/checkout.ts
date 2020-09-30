export class Checkout {
    constructor(
        public fullname:string,
        public email:string,
        public address:string,
        public city:string,
        public state:string,
        public zip:number,
        public cname:string,
        public cardnumber:string,
        public expmonth:number,
        public expyear:number,
        public cvv:number,
    ){}
}
