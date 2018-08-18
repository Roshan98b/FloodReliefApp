import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoFeedComponent } from './components/info-feed/info-feed.component';
import { ContentComponent } from './components/info-feed/content/content.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'infoFeed',
		pathMatch: 'full'
	},
	{
		path: 'infoFeed',
		component: InfoFeedComponent,
		children: [
			{
				path: '',
				redirectTo: 'content',
				pathMatch: 'full'
			},
			{
				path: 'content',
				component: ContentComponent
			}
		]
	}
];

@NgModule({
	exports: [
		RouterModule
	],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
