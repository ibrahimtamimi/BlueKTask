import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-uplode-pic',
  templateUrl: './uplode-pic.component.html',
  styleUrls: ['./uplode-pic.component.css']
})

export class UplodePicComponent implements OnInit{
    size = 4 * 1024 * 1024; //MBytes
    dataSize = 0;
    pics = [];
    picture = {}
    
    constructor(private element: ElementRef) {
    }
    
    ngOnInit() {
        if(JSON.parse(window.localStorage.getItem("pics")) === null){
            localStorage.setItem("pics", JSON.stringify(this.pics));
        }
        if(JSON.parse(localStorage.getItem("dataSize")) === null){
            localStorage.setItem("dataSize", JSON.stringify(this.dataSize));
        }
    }

    changeListner(event) { // uplode the imge and render it
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        var that = this;
        reader.onload = function(e) {
            if(that.isSizeFull(event.target.files[0]['size'])){
                console.log("storge is full")
            }else{
                var src = e.target;  
                image.src = src['result'];
                that.picture['src'] = image.src;
                that.picture['size'] = event.target.files[0]['size'];
            }
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    addPicToLocalStorge(x){ // this function will add pic to localStorage
        this.pics = JSON.parse(window.localStorage.getItem("pics"));
        this.pics.push(x)
        window.localStorage.setItem("pics", JSON.stringify(this.pics)); 
    }

    setPicInofrmaition(name, title, description){
        this.picture['name'] = name;
        this.picture['title'] = title;
        this.picture['description'] = description;
        this.addPicToLocalStorge(this.picture);        
    }

    isSizeFull(size){ // if size full it will return true 
        var dataSize = JSON.parse(window.localStorage.getItem("dataSize"));
        if(dataSize + size < this.size){
            this.incSize(size);
            return false;
        }else{
            return true;
        }
    }

    incSize(size){  // this function for increeze the data size 
        var dataSize = JSON.parse(window.localStorage.getItem("dataSize")) + size;
        localStorage.setItem("dataSize", JSON.stringify(dataSize));
    }


    

}










// this.size = this.size - event.target.files[0]['name'];
        // this.pics =  event.target.files[0]   
        // localStorage.setItem("pics", x);
        //var storedNames = JSON.parse(localStorage.getItem("pics"));
        //console.log(storedNames,"sec")