import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';

import { InvestorModule } from './investor/investor.module';
import { StartupModule } from './startup/startup.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main/main.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { ProfileModule } from './profile/profile.module';

import { InvestorProfileModule } from './investor-profile/investor-profile.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    NavigationModule,
    InvestorModule,
    StartupModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule,
    RouterModule,
    InvestorProfileModule,
    ProfileModule,
    FormsModule,
    BrowserAnimationsModule,
    DashboardModule,
    MainModule,
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
