export class CurrentAccount {
    #balance = 0;
    agency;

    withdraw(value) {
        if (this.#balance >= value) {
            this.#balance -= value;
            return value;
        }
        return 0;
    }

    deposit(value) {
        if (value <= 0) {
            return;
        }
        this.#balance += value;
    }
}
