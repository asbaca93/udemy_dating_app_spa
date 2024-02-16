import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // getUser(id: number): Observable<User> {
  //
  // }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${environment.apiUrl}Users`)
  }
}
