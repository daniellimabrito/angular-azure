import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(private auth: AuthService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    auth.loginWithRedirect().subscribe(data => {
    }, error => {
      console.log(error)
    })

    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
