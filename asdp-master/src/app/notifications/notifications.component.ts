import { Component } from '@angular/core';

declare var $:any;

@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent{

    // no real functionality on this page, the idea is to enroll employees through the app
    joint() {
        alert("You have successfuly joint the upcoming event. Have fun!")
    }

}
