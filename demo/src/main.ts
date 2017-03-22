
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule, AlfrescoSettingsService, AlfrescoAuthenticationService, StorageService, LogService } from 'ng2-alfresco-core';

import { Ng2SnowboundViewerModule } from 'ng2-snowbound-viewer';

@Component({
  selector: 'my-app',
  template: `<ng2-snowbound-viewer></ng2-snowbound-viewer>`
})
class DemoApp {

  constructor(private authService: AlfrescoAuthenticationService,
              private settingsService: AlfrescoSettingsService,
              private storage: StorageService,
              private logService: LogService) {
    this.logService.info('constructor');
  }
}

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        Ng2SnowboundViewerModule
    ],
    declarations: [ DemoApp ],
    bootstrap:    [ DemoApp ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
