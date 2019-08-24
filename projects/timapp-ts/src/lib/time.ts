import { Formatting } from './formatting';
import { ClonablePrototypeInterface } from './clonable-prototype-interface';


declare interface TimeConstructorParameters {

    hours?: number | string;

    minutes?: number | string;

    seconds?: number | string;

}


export class Time implements ClonablePrototypeInterface<Time> {

    private hours: number;

    private minutes: number;

    private seconds: number;

    constructor(time: TimeConstructorParameters) {
        this.hours = Number.parseInt(`${time.hours || 0}` );
        this.minutes = Number.parseInt(`${time.minutes || 0}`);
        this.seconds = Number.parseInt(`${time.seconds || 0}`);
    }

    getClone(): Time {
        return Object.assign(new Time({}), this);
    }

    getHours(asAbsolute: boolean = true): string {
        return Formatting.formatHours(this.hours, asAbsolute);
    }

    getMinutes(asAbsolute: boolean = true): string {
        return Formatting.formatMinutes(this.minutes, asAbsolute);
    }

    getSeconds(asAbsolute: boolean = true): string {
        return Formatting.formatSerconds(this.seconds, asAbsolute);
    }

    addsHours(value: number | string) {
        this.hours += Number.parseInt(`${value}`);
    }

    addsMinutes(value: number | string) {
        this.minutes += Number.parseInt(`${value}`);
    }

    addsSeconds(value: number | string) {
        this.seconds += Number.parseInt(`${value}`);
    }

    resetHours(value: number | string) {
        this.hours = Number.parseInt(`${value}`);
    }

    resetMinutes(value: number | string) {
        this.minutes = Number.parseInt(`${value}`);
    }

    resetSeconds(value: number | string) {
        this.seconds = Number.parseInt(`${value}`);
    }

}