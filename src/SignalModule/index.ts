import { ISignalModuleMain } from "types";

export class SignallingClass {
	SignalModuleMain: ISignalModuleMain;
	EntrySensorTag?: string;
	ExitSensorTag?: string;
	private moduleIsGlider: (part: BasePart) => boolean;

	constructor(Data: ISignalModuleMain) {
		this.SignalModuleMain = Data;
		this.moduleIsGlider = Data.IsGlider;
	}

	IsGlider(part: BasePart): boolean {
		return this.moduleIsGlider(part);
	}

	Run(shouldYield: boolean): void {}
}
