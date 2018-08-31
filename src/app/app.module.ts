import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { FaqComponent } from './faq/faq.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from './stats/stats.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ArtistDashComponent } from './artist-dash/artist-dash.component';
import { CuratorDashComponent } from './curator-dash/curator-dash.component';
import { SidebartwoComponent } from './sidebartwo/sidebartwo.component';
import { LoginComponent } from './login/login.component';
import { ToreviewComponent } from './toreview/toreview.component';
import { ArtistAuthComponent } from './artist-auth/artist-auth.component';
import { LabelAuthComponent } from './label-auth/label-auth.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { CuratorAuthComponent } from './curator-auth/curator-auth.component';
import { CuratorDetailsComponent } from './curator-details/curator-details.component';
import { AwaitingComponent } from './awaiting/awaiting.component';
import { ReviewedComponent } from './reviewed/reviewed.component';
import { MissedComponent } from './missed/missed.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ReviewComponent } from './review/review.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavComponent,
    DetailsComponent,
    FaqComponent,
    StatsComponent,
    CampaignsComponent,
    ArtistDashComponent,
    CuratorDashComponent,
    SidebartwoComponent,
    LoginComponent,
    ToreviewComponent,
    ArtistAuthComponent,
    LabelAuthComponent,
    AdminAuthComponent,
    CuratorAuthComponent,
    CuratorDetailsComponent,
    AwaitingComponent,
    ReviewedComponent,
    MissedComponent,
    PlaylistsComponent,
    ReviewComponent,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
