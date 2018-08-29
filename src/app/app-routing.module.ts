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
import { ToreviewComponent } from './toreview/toreview.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ArtistAuthComponent } from './artist-auth/artist-auth.component';
import { CuratorAuthComponent } from './curator-auth/curator-auth.component';
import { LabelAuthComponent } from './label-auth/label-auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'artistauth',
        component: ArtistAuthComponent
      },
      {
        path: 'curatorauth',
        component: CuratorAuthComponent
      },
      {
        path: 'adminauth',
        component: AdminAuthComponent
      },
      {
        path: 'labelauth',
        component: LabelAuthComponent
      }
    ]
  },
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
    component: CuratorDashComponent,
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
        path: 'toreview',
        component: ToreviewComponent
      }
    ]
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
