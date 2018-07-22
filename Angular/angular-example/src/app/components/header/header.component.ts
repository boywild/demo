import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    @Input() title: string;
    ngOnInit() { }
}