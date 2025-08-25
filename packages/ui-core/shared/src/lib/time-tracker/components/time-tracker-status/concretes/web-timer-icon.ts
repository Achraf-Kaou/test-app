import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@packages/contracts';
import { TimerIcon } from '@packages/ui-core/core';

export class WebTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.WEB_TIMER;
		this.name = faGlobe;
	}
}
