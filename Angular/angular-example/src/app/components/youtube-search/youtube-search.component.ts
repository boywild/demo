import {
	Component,
	OnInit,
	Injectable,
	Inject,
	EventEmitter,
	ElementRef
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, fromEvent } from "rxjs";
// import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { map, filter, debounceTime, tap } from "rxjs/operators";
// let loadingGif: string = ((<any>window).__karma__) ? '' : require('assets/images/loading.gif');

// key
export const YOUTUBE_API_KEY: string =
	"AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk";

// 请求url
export const YOUTUBE_API_URL: string =
	"https://www.googleapis.com/youtube/v3/search";

// 搜索结果模型
class SearchResult {
	id: string;
	title: string;
	description: string;
	thumbnailUrl: string;
	videoUrl: string;
	constructor(obj?: any) {
		this.id = (obj && obj.id) || null;
		this.title = (obj && obj.title) || null;
		this.description = (obj && obj.description) || null;
		this.thumbnailUrl = (obj && obj.thumbnailUrl) || null;
		this.videoUrl =
			(obj && obj.videoUrl) ||
			`https://www.youtube.com/watch?v=${this.id}`;
	}
}

/**
 * 自定义服务用于发送请求
 */
@Injectable({ providedIn: 'root' })
export class YouTubeService {
	constructor(
		private http: HttpClient,
		@Inject(YOUTUBE_API_KEY) private apiKey: string,
		@Inject(YOUTUBE_API_URL) private apiUrl: string
	) {}

	search(query: string): Observable<SearchResult> {
		let params: string = [
			`q=${query}`,
			`key=${this.apiKey}`,
			`part=snippet`,
			`type=video`,
			`maxResults=10`
		].join("&");

		let queryUrl: string = `${this.apiUrl}?${params}`;
		console.log(this.http.get(queryUrl));
		return this.http.get(queryUrl).pipe(
			map((response) => {
				console.warn(response);
				return (<any>response).items.map(item => {
					return new SearchResult({
						id: item.id.videoId,
						title: item.snippet.title,
						description: item.snippet.description,
						thumbnailUrl: item.snippet.thumbnails.high.url
					});
				});
			})
		);
	}
}

export const youTubeServiceInjectables: Array<any> = [
	{ provide: YouTubeService, useClass: YouTubeService },
	{ provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
	{ provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];

/**
 * 搜索输入框
 */
@Component({
	outputs: ["loading", "results"],
	selector: "search-box",
	template: `
      <input type="text" class="form-control" placeholder="Search" autofocus>
    `
})
export class SearchBoxComponent implements OnInit {
	loading: EventEmitter<boolean> = new EventEmitter<boolean>();
	results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

	constructor(private youtube: YouTubeService, private el: ElementRef) {}
	ngOnInit(): void {
		const formevent = fromEvent(this.el.nativeElement, "keyup");

		formevent
			.pipe(
				map((e: any) => e.target.value),
				filter((text: string) => text.length > 1),
				debounceTime(250),
				tap(e => console.log('对每次操作都执行'+e)),
				map((query: string) => this.youtube.search(query))
			)
			.subscribe({
				next(results) {
					console.log(results);
					// this.loading.next(false);
					// this.results.next(results);
				},
				error(err) {
					console.log(err);
					this.loading.next(false);
				},
				complete() {
					this.loading.next(false);
				}
			});
	}
}

/**
 * 搜索结果
 */
@Component({
	selector: "search-result",
	inputs: ["result"],
	template: `
    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <img src="{{result.thumbnailUrl}}">
            <div class="caption">
                <h3>{{result.title}}</h3>
                <p>{{result.description}}</p>
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
	ngOnInit() {}
}

@Component({
	selector: "youtube-search",
	template: `
    <div class="container">
        <div class="page-header">
            <h1>
                <img style="float:right;" src="" alt="">
            </h1>
        </div>
        <div class="row">
            <div class="input-group input-group-lg col-md-12">
                <search-box (loading)="loading=$event" (result)="updateResults($event)"></search-box>
            </div>
        </div>
        <div class="row">
            <search-result *ngFor="let result of results" [result]="result"></search-result>
        </div>
    </div>
    `
})
export class YoutubeSearchComponent implements OnInit {
	HeaderTitle: string;
	results: SearchResult[];
	constructor() {
		this.HeaderTitle = "aaa";
	}
	ngOnInit() {}
	updateResults(results: SearchResult[]): void {
		this.results = results;
	}
}
