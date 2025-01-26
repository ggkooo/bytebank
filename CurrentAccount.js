export class CurrentAccount {
    client;
    agency;

    #balance = 0;

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

    transfer(value, account) {
        const withdrawValue = this.withdraw(value);
        account.deposit(withdrawValue);
    }
}
