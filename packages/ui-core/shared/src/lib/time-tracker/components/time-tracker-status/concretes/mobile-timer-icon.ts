import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@packages/contracts';
import { TimerIcon } from '@packages/ui-core/core';

export class MobileTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.MOBILE;
		this.name = faMobile;
	}
}
