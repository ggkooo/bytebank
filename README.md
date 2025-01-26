# Project Title

This project is a simple banking application implemented in JavaScript. It demonstrates the use of classes, encapsulation, and basic operations such as deposit, withdrawal, and transfer between accounts.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ggkooo/bytebank.git
    ```
2. Navigate to the project directory:
    ```sh
    cd bytebank
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the application:
    ```sh
    node start
    ```
2. The output will display the details of the accounts and their balances.

## Classes

### Client

Represents a client with a name and CPF (Cadastro de Pessoas Físicas).

#### Constructor

```javascript
constructor(name, cpf)
```
- name: The name of the client.
- cpf: The CPF of the client.

#### Properties
- name: The name of the client.
- cpf: The CPF of the client (private).

### CurrentAccount
Represents a current account with a client, agency, and balance.

#### Constructor
```javascript
constructor(client, agency)
```
- client: An instance of the Client class.
- agency: The agency number.

#### Properties

- client: The client associated with the account.
- agency: The agency number.
- balance: The balance of the account (private).
- accountNum: The total number of accounts (static).

#### Methods

- withdraw(value): Withdraws a specified amount from the account.
- deposit(value): Deposits a specified amount into the account.
- transfer(value, account): Transfers a specified amount to another account.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
