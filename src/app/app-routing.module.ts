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
import { CuratorDetailsComponent } from './curator-details/curator-details.component';
import { AwaitingComponent } from './awaiting/awaiting.component';
import { MissedComponent } from './missed/missed.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ReviewedComponent } from './reviewed/reviewed.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { HistoryComponent } from './history/history.component';
import { BalanceComponent } from './balance/balance.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
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
      },
      {
        path: 'balance',
        component: BalanceComponent
      },
      {
        path: 'referrals',
        component: ReferralsComponent
      },
      {
        path: 'results',
        component: ResultsComponent
      }
    ]
  },
  {
    path: 'curator',
    component: CuratorDashComponent,
    children: [
      {
        path: 'dashboard',
        component: CuratorDetailsComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'toreview',
        component: ToreviewComponent,
        children: [
          {
            path: 'awaiting',
            component: AwaitingComponent
          },
          {
            path: 'reviewed',
            component: ReviewedComponent
          },
          {
            path: 'missed',
            component: MissedComponent
          }
        ]
      },
      {
        path: 'playlists',
        component: PlaylistsComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path:'balance',
        component: BalanceComponent
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
