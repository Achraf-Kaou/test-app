import { ITimeLog, TimeLogSourceEnum } from '@packages/contracts';

export interface ITimerSynced {
	source: TimeLogSourceEnum;
	running: boolean;
	startedAt: Date;
	stoppedAt: Date;
	lastLog: ITimeLog;
	isExternalSource: boolean;
}
