import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrganizationCreateInput, ITenantCreateInput, IUserRegistrationInput } from '@packages/contracts';
import { API_PREFIX } from '@packages/ui-core/common';

@Injectable({
	providedIn: 'root'
})
export class packagesCloudService {
	constructor(private readonly _http: HttpClient) {}

	migrateIntoCloud(payload: IUserRegistrationInput) {
		return this._http.post(`${API_PREFIX}/cloud/migrate`, payload);
	}

	migrateTenant(payload: ITenantCreateInput, token: string) {
		return this._http.post(`${API_PREFIX}/cloud/migrate/tenant/${token}`, {
			...payload
		});
	}

	migrateOrganization(payload: IOrganizationCreateInput, token: string) {
		return this._http.post(`${API_PREFIX}/cloud/migrate/organization/${token}`, {
			...payload
		});
	}
}
