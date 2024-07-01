import {OysterCard} from "../src/oysterCard";
import {Journey} from "../src/journey";
import {ModeOfTransport} from "../src/models";

test('should check if oyster card has enough balance when starting a journey and error if not', () => {
    const oysterCard = new OysterCard(1);
    const journey = new Journey()

    try{
        journey.startJourney('HOLBORN', ModeOfTransport.TUBE, oysterCard);
    }
    catch(err){
        expect(err.message).toEqual('Balance is not enough to cover Journey fare')
    }
    expect(oysterCard.checkBalance()).toEqual(1);
});

test('should check if oyster card has enough balance when starting a journey and debit the correct amount', () => {
    const oysterCard = new OysterCard(5);
    const journey = new Journey()
    journey.startJourney('HOLBORN', ModeOfTransport.TUBE, oysterCard);
    expect(oysterCard.checkBalance()).toEqual(1.8);
});

test('should check if oyster card has enough balance when starting a journey and debit the correct amount', () => {
    const oysterCard = new OysterCard(5);
    const journey = new Journey()
    journey.startJourney('HOLBORN', ModeOfTransport.TUBE, oysterCard);
    expect(oysterCard.checkBalance()).toEqual(1.8);
});

test('should check if oyster card has enough balance when starting a journey and debit the correct amount', () => {
    const oysterCard = new OysterCard(5);
    const journey = new Journey()
    journey.startJourney('HOLBORN', ModeOfTransport.TUBE, oysterCard);
    expect(oysterCard.checkBalance()).toEqual(1.8);
});

test('should calculate correctly when taking a bus journey', () => {
    const oysterCard = new OysterCard(10);
    const journey = new Journey()
    journey.startJourney('HOLBORN', ModeOfTransport.BUS, oysterCard);
    journey.endJourney('SOMEWHERE')
    expect(oysterCard.checkBalance()).toEqual(8.2);
});

test('should calculate correctly when taking a tube journey', () => {
    const oysterCard = new OysterCard(6);
    const journey = new Journey()
    journey.startJourney('HOLBORN', ModeOfTransport.TUBE, oysterCard);
    journey.endJourney('HAMMERSMITH')
    expect(oysterCard.checkBalance()).toEqual(3);
});