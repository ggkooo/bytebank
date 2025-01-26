import { Client } from "./Client.js";
import { CurrentAccount } from "./CurrentAccount.js";

const client1 = new Client('Giordano', 12332112345);
const client2 = new Client('Alice', 98798798765);

const currentAccountGiordano = new CurrentAccount(client1, 1001);
const currentAccountAlice = new CurrentAccount(client2,1001);

currentAccountGiordano.deposit(500);
currentAccountGiordano.transfer(200, currentAccountAlice);

console.log(currentAccountGiordano);
console.log(currentAccountGiordano.client);
console.log(currentAccountGiordano.balance);
console.log(CurrentAccount.accountNum);
