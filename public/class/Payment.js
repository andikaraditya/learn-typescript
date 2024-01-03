export class Payment {
    constructor(recipient, details, amounts) {
        this.recipient = recipient;
        this.details = details;
        this.amounts = amounts;
    }
    format() {
        return `${this.recipient} is owed ${this.amounts} dollars for ${this.details}`;
    }
}
