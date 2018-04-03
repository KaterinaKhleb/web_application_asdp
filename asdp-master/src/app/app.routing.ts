import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { OrdersComponent }   from './orders/orders.component';
import { ListComponent }   from './list/list.component';
import { NotificationsComponent }   from './notifications/notifications.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
   
]
