import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        private details: string,
        public amounts: number
    ) {}
    
    format() {
        return `${this.recipient} is owed ${this.amounts} dollars for ${this.details}`
    }
}