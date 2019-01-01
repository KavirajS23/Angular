import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LspComponent } from './lsp/lsp.component';
import { RspComponent } from './rsp/rsp.component';
import { PersonPanelComponent } from './rsp/person-panel/person-panel.component';
import { AddressPanelComponent } from './rsp/address-panel/address-panel.component';
import { ListPanelComponent } from './rsp/person-panel/list-panel/list-panel.component';
import { InfoPanelComponent } from './rsp/person-panel/info-panel/info-panel.component';
import { InformationPanelComponent } from './rsp/address-panel/information-panel/information-panel.component';
import { AddressListPanelComponent } from './rsp/address-panel/address-list-panel/address-list-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LspComponent,
    RspComponent,
    PersonPanelComponent,
    AddressPanelComponent,
    ListPanelComponent,
    InfoPanelComponent,
    InformationPanelComponent,
    AddressListPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
