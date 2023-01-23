import { SignalModuleMain } from "types";

export class SignallingClass {
	SignalModuleMain: SignalModuleMain;

	constructor(Data: SignalModuleMain) {
		this.SignalModuleMain = Data;
	}

	Run(shouldYield: boolean): void {}
}
