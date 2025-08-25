import { Component, Input } from '@angular/core';
import { IOrganizationProject } from '@packages/contracts';
import { DEFAULT_SVG } from '@packages/ui-core/common';

@Component({
    selector: 'ga-project-column-view',
    templateUrl: './project-column-view.component.html',
    styleUrls: ['./project-column-view.component.scss'],
    standalone: false
})
export class ProjectColumnViewComponent {
	fallbackSvg = DEFAULT_SVG;

	@Input() project: IOrganizationProject;

	constructor() {}
}
