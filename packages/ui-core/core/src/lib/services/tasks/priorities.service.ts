import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITaskPriority } from '@packages/contracts';
import { API_PREFIX } from '@packages/ui-core/common';
import { CrudService } from '../crud/crud.service';

@Injectable({
	providedIn: 'root'
})
export class TaskPrioritiesService extends CrudService<ITaskPriority> {
	static readonly API_URL = `${API_PREFIX}/task-priorities`;

	constructor(http: HttpClient) {
		super(http, TaskPrioritiesService.API_URL);
	}
}
