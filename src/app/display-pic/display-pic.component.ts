import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-pic',
  templateUrl: './display-pic.component.html',
  styleUrls: ['./display-pic.component.css']
})
export class DisplayPicComponent implements OnInit {
  pics ;
  constructor() { }

  ngOnInit() {
    this.pics = JSON.parse(localStorage.getItem('pics'));
    console.log(this.pics)
  }

  deleteALLPics(){
    localStorage.clear();
  }

  deletePic(i){
    this.pics = JSON.parse(localStorage.getItem('pics'));
    this.pics.splice(i, 1);
    localStorage.setItem("pics", JSON.stringify(this.pics));
    alert("has been deleted")
  }

  decSize(size){
    var dataSize = JSON.parse(window.localStorage.getItem("dataSize")) - size;
    localStorage.setItem("dataSize", JSON.stringify(dataSize));
  }

}
