export class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amounts: number
    ) {}
    
    format() {
        return `${this.client} owes ${this.amounts} dollars to ${this.details}`
    }
}