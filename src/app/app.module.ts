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
