import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiprj';

  constructor(private http:HttpClient){}

  onSubmit(data){
    this.http.post("https://bnopenmrs.accelx.net/openmrs/ws/rest/v1/person", data = {
      "names": [
          {
          "givenName": "New Name",
          "familyName": "New name"
          }
      ],
      "gender": "M",
      "birthdate": "1997-09-02",
      "addresses": [
          {
          "address1": "30, Vivekananda Layout, Munnekolal,Marathahalli",
          "cityVillage": "Bengaluru",
          "country": "India",
          "postalCode": "560037"
          }
      ]
  }).subscribe((result)=>{
    console.log("result", result);
  })
    console.warn(data);
  }
  

}
