export class BalanceError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'BalanceError';
    }
}
