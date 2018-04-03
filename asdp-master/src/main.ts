import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { DashboardComponent }   from './app/dashboard/dashboard.component';
import { UserComponent }   from './app/user/user.component';
import { TableComponent }   from './app/table/table.component';
import { OrdersComponent }   from './app/orders/orders.component';
import { ListComponent }   from './app/list/list.component';
import { NotificationsComponent }   from './app/notifications/notifications.component';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

