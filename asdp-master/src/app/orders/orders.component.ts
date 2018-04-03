//  In this component is implemented functionality that posts data to the database, using http service. 
// The posted data is dtored in MongoDB in JSON format.

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from "../service"

@Component({
    
    selector: 'orders-cmp',
    moduleId: module.id,
    templateUrl: 'orders.component.html',
    providers: [ HttpService ],
})

export class OrdersComponent{

    constructor( private _httpservice: HttpService) {

    }
    first = ""
    last = ""
    phone = ""
    address = ""
    zip = ""
    city = ""
    product = ""
    number = ""
    info = ""
    orders
    object = {};

    send(first, last, phone, address, zip, city, product, number, info) {
        console.log(first, last, phone, address, zip, city, product, number, info)
        this.object = { first_name: first, last_name: last,
            phone: phone, address: address, zip_code: zip, city: city, product: product, 
            type: "order", amount: number, additional_info: info};
     
        this._httpservice.postOrder(this.object).subscribe();
        this._httpservice.getOrders()
.subscribe(resdata =>  console.log("dddddd", resdata))

    }

}
