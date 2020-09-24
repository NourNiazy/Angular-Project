export class Checkout {
    constructor(
        public firstname:string,
        public email:string,
        public address:string,
        public city:string,
        public state:string,
        public zip:string,
        public cname:string,
        public cardnumber:number,
        public expmonth:string,
        public expyear:number,
        public cvv:string,
    ){}
}
