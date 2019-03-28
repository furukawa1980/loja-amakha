
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { STORE_API } from "../app.api"

import { Produtos } from "../home/home.model"

@Injectable()
export class HomeService {

	constructor(private http: HttpClient) {}

	produtos() {
		return this.http.get(`${STORE_API}/produtos`);
	}

}