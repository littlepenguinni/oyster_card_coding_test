import {calculateFare} from "../src/fareService";
import {Fares, getStation, ModeOfTransport} from "../src/models";

test('should charge correctly for bus journey', () => {
    expect(calculateFare(getStation('HOLBORN'), undefined, ModeOfTransport.BUS)).toEqual(Fares.MAX_BUS);
});

test('should charge max fare if not swiped in', () => {
    expect(calculateFare(undefined, getStation('HOLBORN') , ModeOfTransport.TUBE)).toEqual(Fares.MAX_TUBE);
});

test('should charge correctly for anywhere in Zone 1', () => {
    expect(calculateFare(getStation('EARLS_COURT'), getStation('HOLBORN'), ModeOfTransport.TUBE)).toEqual(Fares.ANYWHERE_IN_ZONE_1);
});

test('should charge correctly for Holborn to Earls Court', () => {
    expect(calculateFare(getStation('HOLBORN'), getStation('EARLS_COURT'), ModeOfTransport.TUBE)).toEqual(Fares.ANYWHERE_IN_ZONE_1);
});

test('should charge correctly for Zone 2 to Earls Court', () => {
    expect(calculateFare(getStation('HAMMERSMITH'), getStation('EARLS_COURT'), ModeOfTransport.TUBE)).toEqual(Fares.ANY_ONE_ZONE_OUTSIDE_ZONE_1);
});

test('should charge correctly for Any one zone outside zone 1', () => {
    expect(calculateFare(getStation('EARLS_COURT'), getStation('HAMMERSMITH'), ModeOfTransport.TUBE)).toEqual(Fares.ANY_ONE_ZONE_OUTSIDE_ZONE_1);
});

test('should charge correctly for Any two zones including zone 1', () => {
    expect(calculateFare(getStation('HOLBORN'), getStation('HAMMERSMITH'), ModeOfTransport.TUBE)).toEqual(Fares.ANY_TWO_ZONES_INCLUDING_ZONE_1);
});

test('should charge correctly for Any two zones excluding zone 1', () => {
    expect(calculateFare(getStation('HAMMERSMITH'), getStation('WIMBLEDON'), ModeOfTransport.TUBE)).toEqual(Fares.ANY_TWO_ZONES_EXCLUDING_ZONE_1);
});

test('should charge correctly for Any three zones', () => {
    expect(calculateFare(getStation('HOLBORN'), getStation('WIMBLEDON'), ModeOfTransport.TUBE)).toEqual(Fares.ANY_THREE_ZONES);
});