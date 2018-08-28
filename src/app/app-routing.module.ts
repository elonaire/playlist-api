import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { FaqComponent } from './faq/faq.component';
import { CuratorDashComponent } from './curator-dash/curator-dash.component';
import { ArtistDashComponent } from './artist-dash/artist-dash.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'artist',
    component: ArtistDashComponent,
    children: [
      {
        path: 'dashboard',
        component: DetailsComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'campaign',
        component: CampaignsComponent
      }
    ]
  },
  {
    path: 'curator',
    component: CuratorDashComponent
  },
  {
    path: 'users/login',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
