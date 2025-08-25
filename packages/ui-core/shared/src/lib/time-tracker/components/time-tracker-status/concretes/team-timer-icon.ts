import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@packages/contracts';
import { TimerIcon } from '@packages/ui-core/core';

export class TeamTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.TEAMS;
		this.name = faUsers;
	}
}
