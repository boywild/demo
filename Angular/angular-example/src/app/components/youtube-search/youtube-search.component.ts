import { Component, OnInit, Injectable, Inject, EventEmitter, ElementRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, fromEvent } from 'rxjs';
// import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { map, filter, debounceTime, tap } from 'rxjs/operators';
// let loadingGif: string = ((<any>window).__karma__) ? '' : require('assets/images/loading.gif');


export const YOUTUBE_API_KEY: string = "AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";
class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}


@Injectable()
export class YouTubeService {
    constructor(private http: Http,
        @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiUrl: string
    ) {

    }

    search(query: string): Observable<SearchResult[]> {
        let params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');

        let queryUrl: string = `${this.apiUrl}?${params}`;

        return this.http.get(queryUrl)
            .pipe(map((response: Response) => {
                return (<any>response.json()).items.map(item => {
                    return new SearchResult({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnailUrl: item.snippet.thumbnails.hight.url
                    });
                });
            }))
    }
}

export const youTubeServiceInjectables: Array<any> = [
    { provide: YouTubeService, useClass: YouTubeService },
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];


@Component({
    outputs: ['loading', 'results'],
    selector: 'search-box',
    template: `
      <input type="text" class="form-control" placeholder="Search" autofocus>
    `
})

export class SearchBoxComponent implements OnInit {
    loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(private youtube: YouTubeService,
        private el: ElementRef) {
    }
    ngOnInit(): void {
        const aaa = fromEvent(this.el.nativeElement, 'keyup');

        aaa.pipe(
            map((e: any) => e.target.value),
            filter((text: string) => text.length > 1),
            debounceTime(250),
            tap(() => this.loading.next(true)),
            map((query: string) => this.youtube.search(query))
        )
            .subscribe({
                next(results) {
                    this.loading.next(false);
                    this.results.next(results);
                },
                error(err) {
                    console.log(err);
                    this.loading.next(false);
                },
                complete() {
                    this.loading.next(false);
                }
            })
    }
}


@Component({
    selector: 'search-result',
    inputs: ['result'],
    template: `
    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <img src="{{result.thumbnailUrl}}">
            <div class="caption">
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                <p>
                    <a href="{{result.videoUrl}}" class="btn btn-default" role="button">Watch</a>
                </p>
            </div>
        </div>
    </div>
    `
})

export class SearchResultComponent implements OnInit {
    result: SearchResult;
    ngOnInit() { }
}


@Component({
    selector: 'youtube-search',
    templateUrl: './youtube-search.component.html',
    styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
    HeaderTitle: string;
    results: SearchResult[];
    constructor(public http: Http) {
        this.HeaderTitle = 'aaa';
    }
    ngOnInit() { }
    updateResults(results: SearchResult[]): void {
        this.results = results;
    }

}






