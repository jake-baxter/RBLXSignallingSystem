export interface Signal {
	AdvancedSignals?: Array<Signal>;
	AttachedSignals?: Array<Signal>;
	AssociatedTrackBlocks: Array<TrackSection>;
	SignalAspectUpdated: RBXScriptConnection;
}

export interface TrackSection {}

export interface SignalModuleMain {
	Signals: Array<Signal>;
}
