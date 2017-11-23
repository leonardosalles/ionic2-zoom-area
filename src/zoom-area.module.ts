import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ZoomAreaComponent } from './zoom-area.component';
import { ZoomAreaProvider } from './zoom-area.provider';

@NgModule({
  declarations: [
    ZoomAreaComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    ZoomAreaComponent
  ],
  providers: [
    ZoomAreaProvider
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