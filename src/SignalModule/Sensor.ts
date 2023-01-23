import Signal from "@rbxts/signal";
import { ITrackSection, ISignal, ISensor } from "types";
import { CollectionService } from "@rbxts/services";
import { SignallingClass } from "SignalModule";

function sendIfGlider(SignallingClass: SignallingClass, sensor: Sensor, part: BasePart) {
	if (
		(SignallingClass.EntrySensorTag && CollectionService.HasTag(part, SignallingClass.EntrySensorTag)) ||
		(SignallingClass.ExitSensorTag && CollectionService.HasTag(part, SignallingClass.ExitSensorTag))
	) {
		//do stuff
	}
}

export class Sensor implements ISensor {
	Touched: Signal<() => void>;
	TrackSection: string;
	BasePart: BasePart;
	private connection: RBXScriptConnection;
	private SignallingClass: SignallingClass;

	constructor(SignallingClass: SignallingClass, part: BasePart, TrackSection: string) {
		this.SignallingClass = SignallingClass;
		this.BasePart = part;
		this.Touched = new Signal<() => void>();
		this.TrackSection = TrackSection;
		this.connection = part.Touched.Connect((otherPart: BasePart) => {
			sendIfGlider(SignallingClass, this, otherPart);
		});
	}
}
