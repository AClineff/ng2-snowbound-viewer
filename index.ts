
import { NgModule } from '@angular/core';
import { CoreModule } from 'ng2-alfresco-core';

import { Ng2SnowboundViewerComponent } from './src/components/snowbound-viewer.component';

export * from './src/components/snowbound-viewer.component';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        Ng2SnowboundViewerComponent
    ],
    providers: [
    ],
    exports: [
        Ng2SnowboundViewerComponent
    ]
})
export class Ng2SnowboundViewerModule {}
