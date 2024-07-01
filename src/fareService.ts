import {Fares, ModeOfTransport, Stations} from "./models";

export function calculateFare(startStation: number[], endStation: number[], modeOfTransport:ModeOfTransport): number {

    //All Busses same fare
    if(modeOfTransport === ModeOfTransport.BUS){
        return Fares.MAX_BUS
    }

    //Has not swiped in or out
    if(startStation === undefined || endStation === undefined){
        return Fares.MAX_TUBE
    }

    //Setting Earls Court to be the best value depending on what other station is being travelled to
    if(startStation === Stations.EARLS_COURT){
        if (endStation === Stations.HOLBORN){
            startStation = [1]
        }
        else startStation = [2]
    }
    else if(endStation === Stations.EARLS_COURT){
        if (startStation === Stations.HOLBORN){
            endStation = [1]
        }
        else endStation = [2]
    }

    const fareMap = new Map<string, number>([
        ['1', Fares.ANYWHERE_IN_ZONE_1],
        ['2', Fares.ANY_ONE_ZONE_OUTSIDE_ZONE_1],
        ['3', Fares.ANY_ONE_ZONE_OUTSIDE_ZONE_1],
        ['1,2', Fares.ANY_TWO_ZONES_INCLUDING_ZONE_1],
        ['2,3', Fares.ANY_TWO_ZONES_EXCLUDING_ZONE_1],
        //Assuming to go from 1 to 3 you are passing through 2
        ['1,3', Fares.ANY_THREE_ZONES],
        ['1,2,3', Fares.ANY_THREE_ZONES],
    ])

    const stationsVisited: string = [...new Set([...startStation, ...endStation])].sort().toString();

    return fareMap.get(stationsVisited);

}