// This component retreives data from the database with the help of Service. 
// Gained data is processed in the block form and displayed for the user.

import { Component,OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { HttpService } from "../service"

@Component({
    moduleId: module.id,
    selector: 'list-cmp',
    templateUrl: 'list.component.html',
    providers: [ HttpService ],
})

export class ListComponent implements OnInit {
    constructor( private _httpservice: HttpService) {

    }
    ngOnInit()
 {
this._httpservice.getOrders()
.subscribe(resdata =>  this.orders = resdata)

 }

    orders

}
