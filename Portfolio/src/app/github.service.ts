import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Public, unauthenticated GitHub lookup.
 *
 * NOTE: the previous version of this file contained a hard-coded personal
 * access token. Never ship a token in front-end code — anything bundled into
 * the browser is public. Revoke that token in GitHub > Settings > Developer
 * settings > Personal access tokens.
 */
@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly apiUrl = 'https://api.github.com/users/CatanduYago/repos';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?sort=updated&per_page=12`);
  }
}
