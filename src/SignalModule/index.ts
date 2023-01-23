import { ISignalModuleMain } from "types";

export class SignallingClass {
	SignalModuleMain: ISignalModuleMain;
	EntrySensorTag?: string;
	ExitSensorTag?: string;

	constructor(Data: ISignalModuleMain) {
		this.SignalModuleMain = Data;
	}

	Run(shouldYield: boolean): void {}
}
