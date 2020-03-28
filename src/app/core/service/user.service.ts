import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly controller = 'users';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.baseUrl}/${this.controller}`);

  }
  getById(id: number) {
    return this.http.get<User>(`${environment.baseUrl}/${this.controller}/${id}`);
  }
}
