
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { STORE_API } from "../app.api"

import { Produtos } from "../home/home.model"
import { Sidebar } from "../sidebar/sidebar.model"
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

	constructor(private http: HttpClient) {}

	produtos(): Observable<Produtos[]> {
		return this.http.get<Produtos[]>(`${STORE_API}/products`);
	}

	sidebar(): Observable<Sidebar[]> {
		return this.http.get<Sidebar[]>(`${STORE_API}/sidebar`);
	}

}