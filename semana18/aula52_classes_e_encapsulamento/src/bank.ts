import { UserAccount } from "./user";

export class Bank {

    private accounts: UserAccount[] = [];
    
    public getAccounts() {
        return this.accounts;
    }
    
    constructor(account: UserAccount) {
        this.accounts.push(account)
    }

    // private accounts: UserAccount[];

    // constructor(accounts: UserAccount[]) {
    //     this.accounts = accounts;
    // }

}