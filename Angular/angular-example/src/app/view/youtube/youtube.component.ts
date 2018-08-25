import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'youtube',
    templateUrl:'youtube.component.html',
    styleUrls:['youtube.component.css']
})

export class YoutubeComponent implements OnInit {
    HeaderTitle: string;
    constructor() {
        this.HeaderTitle = 'aaa'
    }
    ngOnInit() { }

}