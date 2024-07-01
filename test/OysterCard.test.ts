import {OysterCard} from "../src/oysterCard";

test('should create OysterCard and show balance', () => {
    const oysterCard = new OysterCard(100);
    expect(oysterCard.checkBalance()).toEqual(100);
});

test('should increase OysterCard balance and show correct balance', () => {
    const oysterCard = new OysterCard(100);
    oysterCard.increaseBalance(50)
    expect(oysterCard.checkBalance()).toEqual(150);
})

test('should take fare from OysterCard balance and show correct balance', () => {
    const oysterCard = new OysterCard(100);
    oysterCard.payFare(20)
    expect(oysterCard.checkBalance()).toEqual(80);
})

test('should check if the OysterCard has enough money to pay the fare and throw an exception if not', () => {
    expect.assertions(2)
    const oysterCard = new OysterCard(100);
    try{
        oysterCard.checkEnoughBalance(120)
    }
    catch(err){
        expect(err.message).toEqual('Balance is not enough to cover Journey fare')
    }
    expect(oysterCard.checkBalance()).toEqual(100);
})