import { Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

@Injectable()
export class HttpService{

    constructor(private _http: Http) {

    }
    private _url = "http://172.16.2.130:3000";

    getOrders()  {
        
        return this._http.get(this._url + "/customers").map((response: Response, index: number) => response.json());
    }
    postOrder(object) : Observable<any> {
        console.log(object);
        let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url + "/customers", JSON.stringify(object), options)
    }
}