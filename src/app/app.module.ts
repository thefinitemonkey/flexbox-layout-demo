import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineItemListComponent } from './list-page/line-item-list/line-item-list.component';
import { LineItemComponent } from './list-page/line-item-list/line-item/line-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderItemComponent } from './list-page/line-item-list/header-item/header-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { OrderSummaryComponent } from './list-page/order-summary/order-summary.component';
import { ListPageLayoutComponent } from './list-page/list-page-layout/list-page-layout.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LineItemListComponent,
    LineItemComponent,
    HeaderItemComponent,
    OrderSummaryComponent,
    ListPageLayoutComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
