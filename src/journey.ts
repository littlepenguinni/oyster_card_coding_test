import {Fares, getStation, ModeOfTransport} from "./models";
import {OysterCard} from "./oysterCard";
import {calculateFare} from "./fareService";

export class Journey {

    private _startStation: number[];
    private _endStation: number[];
    private _modeOfTransport: ModeOfTransport;
    private _oysterCard: OysterCard

    public startJourney(startStation: string, modeOfTransport: ModeOfTransport, oysterCard: OysterCard){
        try{
            oysterCard.checkEnoughBalance(Fares.MAX_TUBE)
            oysterCard.payFare(Fares.MAX_TUBE)
        }
        catch(err){
            throw err;
        }
        this._startStation = getStation(startStation)
        this._modeOfTransport = modeOfTransport;
        this._oysterCard = oysterCard;
    }

    public endJourney(endStation: string){
        this._endStation = getStation(endStation)
        this._oysterCard.increaseBalance(Fares.MAX_TUBE)
        const journeyCost = calculateFare(this._startStation, this._endStation, this._modeOfTransport)
        this._oysterCard.payFare(journeyCost);
    }
}