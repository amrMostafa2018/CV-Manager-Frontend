import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading!: boolean;
  title = 'CV-manager';
  apiUrl = environment.apiUrl;

  constructor(private loaderService: LoaderService) {
    console.log("Api : ", this.apiUrl);
  }
  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
