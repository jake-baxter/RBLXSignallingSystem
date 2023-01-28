import Signal from "@rbxts/signal";
import { ITrackSection, ISignal, ISensor } from "types";
import { SignallingClass } from "SignalModule";

export class Sensor implements ISensor {
	Touched: Signal<() => void>;
	TrackSection: string;
	BasePart: BasePart;
	private connection: RBXScriptConnection;
	private SignallingClass: SignallingClass;

	constructor(SignallingClass: SignallingClass, part: BasePart, TrackSection?: string) {
		this.SignallingClass = SignallingClass;
		this.BasePart = part;
		this.Touched = new Signal<() => void>();
		this.TrackSection = TrackSection as string;
		this.connection = part.Touched.Connect((otherPart: BasePart) => {
			this.sendIfGlider(otherPart);
		});
	}

	private GetAttributedTrackSection(): string | undefined {
		return this.BasePart.GetAttribute("TrackSection") as string;
	}

	private sendIfGlider(part: BasePart): void {
		if (!this.SignallingClass.IsGlider(part)) {
			return;
		}
	}
}
