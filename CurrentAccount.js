import { Client } from "./Client.js";

export class CurrentAccount {
    static accountNum = 0;
    #client;
    agency;
    #balance = 0;

    constructor(client, agency) {
        this.client = client;
        this.agency = agency;
        CurrentAccount.accountNum += 1;
    }

    set client(newClient) {
        if (newClient instanceof Client) {
            this.#client = newClient;
        }
    }

    get client() {
        return this.#client;
    }

    get balance() {
        return this.#balance;
    }

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
