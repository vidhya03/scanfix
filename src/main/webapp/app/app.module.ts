import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ScanfixSharedModule } from 'app/shared/shared.module';
import { ScanfixCoreModule } from 'app/core/core.module';
import { ScanfixAppRoutingModule } from './app-routing.module';
import { ScanfixHomeModule } from './home/home.module';
import { ScanfixEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ScanfixSharedModule,
    ScanfixCoreModule,
    ScanfixHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ScanfixEntityModule,
    ScanfixAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ScanfixAppModule {}
