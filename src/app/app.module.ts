import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './components/body/body.component';

import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HeaderUserDashboardComponent } from './components/header-user-dashboard/header-user-dashboard.component';
import { AccountComponent } from './components/account/account.component';
import { BillsComponent } from './components/bills/bills.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BodyComponent,
    FooterComponent,
    routingComponents,
    HeaderComponent,
    HeaderUserDashboardComponent,
    AccountComponent,
    BillsComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
