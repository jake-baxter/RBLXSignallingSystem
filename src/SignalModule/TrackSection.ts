import Signal from "@rbxts/signal";
import { ITrackSection, ISignal, ISensor } from "types";

export class TrackSection implements ITrackSection {
	OccupiedGliders: Set<BasePart>;
	Changed: Signal<(occupied: number) => void>;
	Sensors: Set<ISensor>;
	Name: string;

	constructor(associatedTrackSection: ITrackSection) {
		this.Name = associatedTrackSection.Name;
		this.OccupiedGliders = new Set<BasePart>();
		this.Changed = new Signal<(occupied: number) => void>();
		this.Sensors = new Set<ISensor>();
	}
}
