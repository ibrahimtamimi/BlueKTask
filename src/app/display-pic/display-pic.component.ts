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
    if(JSON.parse(localStorage.getItem('pics')) === null){
      this.pics = []
    }else{
      this.pics = JSON.parse(localStorage.getItem('pics'));      
    }
  }

  deleteALLPics(){ // delete all pics and reset pics Array and the size 
    var dataSize = 0 
    this.pics = []
    localStorage.setItem("pics", JSON.stringify(this.pics));
    localStorage.setItem("dataSize", JSON.stringify(dataSize));
    alert("All Images has been deleted");    
  }

  deletePic(i){ // reomve one pic 
    this.pics = JSON.parse(localStorage.getItem('pics'));
    this.decSize(this.pics[i].size)
    this.pics.splice(i, 1);
    localStorage.setItem("pics", JSON.stringify(this.pics));
    alert("has been deleted")
  }

  decSize(size){ // reduce the size 
    var dataSize = JSON.parse(window.localStorage.getItem("dataSize")) - size;
    localStorage.setItem("dataSize", JSON.stringify(dataSize));
  }

}
