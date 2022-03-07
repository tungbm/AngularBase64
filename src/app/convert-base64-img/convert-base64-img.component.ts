import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Data } from 'src/app/model/data.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

// @ts-ignore
@Component({
  selector: 'app-convert-base64-img',
  templateUrl: './convert-base64-img.component.html',
  styleUrls: ['./convert-base64-img.component.css']
})
export class ConvertBase64ImgComponent implements OnInit {
  dataImg: Data = new Data();
  valueOutputImgDecode = false;
  url2 = '';

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Base64toImg(){
    this.dataService.Base64ToImg(this.dataImg)
    .subscribe(
      (data:any) => {
        this.valueOutputImgDecode = data;
        console.log(this.valueOutputImgDecode);

        this.url2 = environment.baseUrl+'/api/img?' + Date.now();
        console.log(this.url2);
      },
        (error: any) => {
        console.log(error)
      }
    );
  }
}
