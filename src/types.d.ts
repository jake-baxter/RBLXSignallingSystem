import Signal from "@rbxts/signal";
import { TrackSection } from "SignalModule/TrackSection";

export interface ISignal {
	AdvancedSignals?: Array<ISignal>;
	AttachedSignals?: Array<ISignal>;
	AssociatedTrackBlocks: Array<ITrackSection>;
	LockedMaximumAspect?: number;
	Name: string;
}

export interface ITrackSection {
	Name: string;
}

export interface ISensor {
	TrackSection: string;
	BasePart: BasePart;
}

export interface ISignalModuleMain {
	Signals: Array<Signal>;
	TrackBlocks: Array<TrackSection>;
	ExitSensors: Array<BasePart>;
	EntrySensors: Array<BasePart>;
	EntrySensorTag?: string;
	ExitSensorTag?: string;
}
