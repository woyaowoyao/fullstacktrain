import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GatewaysbaSharedModule } from 'app/shared/shared.module';
import { GatewaysbaCoreModule } from 'app/core/core.module';
import { GatewaysbaAppRoutingModule } from './app-routing.module';
import { GatewaysbaHomeModule } from './home/home.module';
import { GatewaysbaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GatewaysbaSharedModule,
    GatewaysbaCoreModule,
    GatewaysbaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GatewaysbaEntityModule,
    GatewaysbaAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class GatewaysbaAppModule {}
