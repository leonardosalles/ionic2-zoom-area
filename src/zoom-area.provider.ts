import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ZoomAreaProvider {
  SCROLL_STATE = {
    NORMAL: 'scrollNormal',
    COLAPSED: 'scrollColapsed'
  };

  private _onScroll = new Subject<any>();
  onScroll$ = this._onScroll.asObservable();

  private _scrollState = new Subject<any>();
  scrollState$ = this._scrollState.asObservable();

  private _centerChanged = new Subject<any>();
  centerChanged$ = this._centerChanged.asObservable();

  constructor () {} 

  notifyScroll (data) {
    this._onScroll.next(data);
  }

  notifyScrollState (data) {
    this._scrollState.next(data);
  }

  setCenter (x: number, y: number) {
    this._centerChanged.next({x: x, y: y});
  }
}
