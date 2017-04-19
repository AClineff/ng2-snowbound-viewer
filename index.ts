import { ModuleWithProviders, NgModule } from '@angular/core';
import { CoreModule } from 'ng2-alfresco-core';

import { SnowboundViewerComponent } from './src/components/snowbound-viewer.component';

export * from './src/components/snowbound-viewer.component';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        SnowboundViewerComponent
    ],
    providers: [],
    exports: [
        SnowboundViewerComponent
    ]
})
export class SnowboundViewerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SnowboundViewerModule
        };
    }
}
