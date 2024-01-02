export class Invoice {
    constructor(client, details, amounts) {
        this.client = client;
        this.details = details;
        this.amounts = amounts;
    }
    format() {
        return `${this.client} owes ${this.amounts} dollars to ${this.details}`;
    }
}
