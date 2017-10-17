[![npm](https://img.shields.io/npm/l/ionic2-zoom-area.svg)](https://www.npmjs.com/package/ionic2-zoom-area.svg/)
[![npm](https://img.shields.io/npm/dt/ionic2-zoom-area.svg)](https://www.npmjs.com/package/ionic2-zoom-area.svg)
[![npm](https://img.shields.io/npm/dm/ionic2-zoom-area.svg)](https://www.npmjs.com/package/ionic2-zoom-area.svg)

# A zoom area for Ionic 2

A zoom area component with pinch support to zoom any element in page

To see this in action, checkout the [example project here](https://github.com/leonardosalles/ionic2-zoom-area-example).


<br><br>


- [Quick Example](#quick-example)
- [Installation](#installation)
- [Usage](#usage)
  - [`zoom-area` Component](#zoom-area-component)
- [Examples](#examples)

<br><br><br>

# Quick Example
```html
<zoom-area>
  <div>
      zoom it
  </div>
  or
  <img src="zoom-it.jpg" alt="zoom it">
</zoom-area>
```

<br><br><br>

# Installation
## Install the module via NPM
```shell
npm i --save ionic2-zoom-area
```

## Import it in your app's module(s)

Import `ZoomAreaModule.forRoot()` in your app's main module

```ts
import { ZoomAreaModule } from 'ionic2-zoom-area';

@NgModule({
    ...
    imports: [
      ...
      ZoomAreaModule.forRoot()
    ],
    ...
})
export class AppModule {}
```

If your app uses lazy loading, you need to import `ZoomAreaModule` in your shared module or child modules:
```ts
import { ZoomAreaModule } from 'ionic2-zoom-area';

@NgModule({
    ...
    imports: [
      ...
      ZoomAreaModule
    ],
    ...
})
export class SharedModule {}
```

<br><br><br>

# Usage


## `zoom-area` Component

### Inputs

#### scale
_(optional)_ _(two-way)_ The scale of your initial zoom. Defaults to `1`.

#### controls
_(optional)_ _(two-way)_ It allow you to hide or show zoom controls. Defaults to `true`.


### Outputs

#### `afterZoomIn`
Listen to this event to be notified when the user interact with zoom in.

#### `afterZoomOut`
Listen to this event to be notified when the user interact with zoom out.

<br><br>

## `ZoomAreaProvider` Provider

### notifyScroll
```ts
notifyScroll(): void
```
It broadcast an event when user scroll content inside zoom area.

### onScroll$
```ts
onScroll$: Observable
```
It allows you to listen for a scroll event inside your zoom area. You can use it to collapse you header for example.

```ts
this.zoomAreaProvider.onScroll$.subscribe(state => {
  if (state === this.zoomAreaProvider.SCROLL_STATE.COLLAPSED) {
    console.log('Hide header');
  }

  if (state === this.zoomAreaProvider.SCROLL_STATE.EXPANDED) {
    console.log('Show header');
  }
});
```

### scrollState$
```ts
scrollState$: Observable
```
It allows you to listen for a change in scroll state.
```ts
this.zoomAreaProvider.scrollState$.subscribe(state => {
  console.log('Do whatever you want when scrollState change');
});
```
# Examples

## Basic example

## Example with methods
```html
<zoom-area [(scale)]="scale" (afterZoomIn)="afterZoomIn($event)" (afterZoomOut)="afterZoomOut($event)" [(controls)]="showControls">
    <div>Zoom It</div>
    or
    <img src="assets/image-to-zoom.jpg" alt="Zoom It">
</zoom-area>
```

<br><br>
## Contribution
- **Having an issue**? or looking for support? [Open an issue](https://github.com/leonardosalles/ionic2-zoom-area/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.

## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:
