import {OysterCard} from "./oysterCard";
import {Journey} from "./journey";
import {ModeOfTransport} from "./models";

const oysterCard = new OysterCard(30);

console.log("Journey 1 from Holborn to Earls Court")
const journey1: Journey = new Journey();
journey1.startJourney('Holborn', ModeOfTransport.TUBE, oysterCard);
journey1.endJourney('Earls_Court')
console.log("Remaining Balance: £" + oysterCard.checkBalance());

console.log("Journey 2 from Earls Court to Chelsea")
const journey2: Journey = new Journey();
journey2.startJourney('Earls_Court', ModeOfTransport.BUS, oysterCard);
journey2.endJourney('Chelsea')
console.log("Remaining Balance: £" + oysterCard.checkBalance());

console.log("Journey 3 from Earls Court to Hammersmith")
const journey3: Journey = new Journey();
journey3.startJourney('Earls_Court', ModeOfTransport.TUBE, oysterCard);
journey3.endJourney('Hammersmith')
console.log("Remaining Balance: £" + oysterCard.checkBalance());