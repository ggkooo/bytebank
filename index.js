import { Client } from "./Client.js";
import { CurrentAccount } from "./CurrentAccount.js";

const client1 = new Client();
client1.name = 'Giordano';
client1.cpf = 12332112345;

const client2 = new Client();
client2.name = 'Alice';
client2.cpf = 98798798765;

const currentAccountGiordano = new CurrentAccount();
currentAccountGiordano.agency = 1001;
currentAccountGiordano.client = client1;

currentAccountGiordano.deposit(500);

const currentAccountAlice = new CurrentAccount();
currentAccountAlice.agency = 1001;
currentAccountAlice.client = client2;

currentAccountGiordano.transfer(200, currentAccountAlice);

console.log(currentAccountGiordano);
console.log(currentAccountAlice);
