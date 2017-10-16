import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

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

  constructor () {} 

  notifyScroll (data) {
    this._onScroll.next(data);
  }

  notifyScrollState (data) {
    this._scrollState.next(data);
  }
}
