export enum ModeOfTransport{
    BUS,
    TUBE
}

export const Stations = {
    HOLBORN: [1],
    EARLS_COURT: [1,2],
    WIMBLEDON: [3],
    HAMMERSMITH: [2],
}

export function getStation(stationName: string): number[] {
        return Stations[stationName.toUpperCase()]
}

export enum Fares{
    ANYWHERE_IN_ZONE_1 = 2.50,
    ANY_ONE_ZONE_OUTSIDE_ZONE_1 = 2.00,
    ANY_TWO_ZONES_INCLUDING_ZONE_1 = 3.00,
    ANY_TWO_ZONES_EXCLUDING_ZONE_1 = 2.25,
    ANY_THREE_ZONES = 3.20,
    MAX_BUS = 1.80,
    MAX_TUBE = 3.20
}