import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare var gapi;
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  API_KEY = 'api key';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log('asf');
    // this.authenticate();
    // this.loadClient();
    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
    });

    this.getNews().subscribe((data)=>{
      console.log(data, 'fdfa');

    });
  }

  public getNews(){
    const headers = new HttpHeaders({'Authorization':'Bearer ' + 'client_secret'});
    return this.httpClient.get(`https://www.googleapis.com/blogger/v3/users/self/blogs/2399953?key=${this.API_KEY}`, {headers});
    // return this.httpClient.get(`https://www.googleapis.com/blogger/v3/blogs/3213900/posts/8398240586497962757?callback=handleResponse&key=${this.API_KEY}`);
    // https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters
    // GET https://www.googleapis.com/blogger/v3/blogs/2399953?key=YOUR-API-KEY

  }


  //  authenticate() {
  //   return gapi.auth2.getAuthInstance()
  //       .signIn({scope: "https://www.googleapis.com/auth/blogger https://www.googleapis.com/auth/blogger.readonly"})
  //       .then(function() { console.log("Sign-in successful"); },
  //             function(err) { console.error("Error signing in", err); });
  // }
  //  loadClient() {
  //   gapi.client.setApiKey("api key");
  //   return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/blogger/v3/rest")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //             function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  // // Make sure the client is loaded and sign-in is complete before calling this method.
  //  execute() {
  //   return gapi.client.blogger.blogs.getByUrl({})
  //       .then(function(response) {
  //               // Handle the results here (response.result has the parsed body).
  //               console.log("Response", response);
  //             },
  //             function(err) { console.error("Execute error", err); });
  // }


}
