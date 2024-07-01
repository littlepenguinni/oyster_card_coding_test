import {BalanceError} from "./errors";

export class OysterCard {

    private _balance: number;

    constructor(initialAmount: number) {
        this.balance = initialAmount;
    }

    set balance(value: number) {
        this._balance = value;
    }

    checkBalance() {
        return this._balance;
    }

    increaseBalance(topUpAmount: number) {
        this._balance = parseFloat((this._balance + topUpAmount).toPrecision(3));
    }

    payFare(fareToPay: number) {
        this._balance = parseFloat((this._balance - fareToPay).toPrecision(3));
    }

    checkEnoughBalance(fare: number) {
        if (this._balance < fare) {
            throw new BalanceError('Balance is not enough to cover Journey fare')
        }
    }

}