import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IActivity, IGetActivitiesInput, IDailyActivity } from '@packages/contracts';
import { toParams } from '@packages/ui-core/common';
import { firstValueFrom } from 'rxjs';
import { API_PREFIX } from '@packages/ui-core/common';

@Injectable({
	providedIn: 'root'
})
export class ActivityService {
	constructor(private http: HttpClient) {}

	getActivities(request: IGetActivitiesInput) {
		return firstValueFrom(
			this.http.get<IActivity[]>(`${API_PREFIX}/timesheet/activity`, {
				params: toParams(request)
			})
		);
	}

	getDailyActivities(request: IGetActivitiesInput) {
		return firstValueFrom(
			this.http.get<IDailyActivity[]>(`${API_PREFIX}/timesheet/activity/daily`, {
				params: toParams(request)
			})
		);
	}

	getDailyActivitiesReport(request: IGetActivitiesInput) {
		return firstValueFrom(
			this.http.get<IDailyActivity[]>(`${API_PREFIX}/timesheet/activity/report`, {
				params: toParams(request)
			})
		);
	}
}
