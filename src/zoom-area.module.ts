import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ZoomAreaComponent } from './zoom-area.component';
import { ZoomAreaProvider } from './zoom-area.provider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ZoomAreaComponent
  ],
  imports: [
    IonicModule,
    BrowserAnimationsModule
  ],
  exports: [
    ZoomAreaComponent
  ]
})
export class ZoomAreaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZoomAreaModule,
      providers: [
        ZoomAreaProvider
      ]
    };
  }
}