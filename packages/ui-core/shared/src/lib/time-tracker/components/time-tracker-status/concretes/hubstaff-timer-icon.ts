import { faArrowsTurnToDots } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@packages/contracts';
import { TimerIcon } from '@packages/ui-core/core';

export class HubstaffTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.HUBSTAFF;
		this.name = faArrowsTurnToDots;
	}
}
