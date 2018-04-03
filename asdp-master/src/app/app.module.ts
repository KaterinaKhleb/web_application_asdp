import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { OrdersComponent }   from './orders/orders.component';
import { ListComponent }   from './list/list.component';
import { NotificationsComponent }   from './notifications/notifications.component';

import { HttpModule } from '@angular/http';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    OrdersComponent,
    ListComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
