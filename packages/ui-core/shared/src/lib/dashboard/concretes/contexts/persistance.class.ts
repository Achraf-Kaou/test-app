import { GuiDrag, IPersistance } from '@packages/ui-core/common';

export class Persistance implements IPersistance {
	private _state: Partial<GuiDrag>[];

	constructor(state: Partial<GuiDrag>[]) {
		this._state = state;
	}
	public get state(): Partial<GuiDrag>[] {
		return this._state;
	}
}
