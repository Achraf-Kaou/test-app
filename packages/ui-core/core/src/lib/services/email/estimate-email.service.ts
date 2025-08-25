import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEstimateEmailFindInput, IEstimateEmail } from '@packages/contracts';
import { toParams } from '@packages/ui-core/common';
import { API_PREFIX } from '@packages/ui-core/common';

@Injectable({
	providedIn: 'root'
})
export class EstimateEmailService {
	constructor(private readonly http: HttpClient) {}

	validate(where: IEstimateEmailFindInput, relations: string[] = []): Observable<IEstimateEmail> {
		return this.http.get<IEstimateEmail>(`${API_PREFIX}/estimate-email/validate`, {
			params: toParams({ ...where, relations })
		});
	}
}
