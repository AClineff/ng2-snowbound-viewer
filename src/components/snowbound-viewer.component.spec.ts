
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AlfrescoSettingsService, AlfrescoApiService, AlfrescoAuthenticationService, CoreModule } from 'ng2-alfresco-core';

import { Ng2SnowboundViewerComponent } from './snowbound-viewer.component';

describe('ng2-snowbound-viewer', () => {

    let component: Ng2SnowboundViewerComponent;
    let fixture: ComponentFixture<Ng2SnowboundViewerComponent>;
    let debug: DebugElement;
    let element: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreModule
            ],
            declarations: [Ng2SnowboundViewerComponent],
            providers: [
                AlfrescoSettingsService,
                AlfrescoAuthenticationService,
                AlfrescoApiService
                /*,
                {provide: AlfrescoAuthenticationService, useClass: AuthenticationMock},
                {provide: AlfrescoTranslationService, useClass: TranslationMock}
                */
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Ng2SnowboundViewerComponent);

        debug = fixture.debugElement;
        element = fixture.nativeElement;
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should display hello world', () => {
        expect(element.querySelector('h1')).toBeDefined();
        expect(element.getElementsByTagName('h1')[0].innerHTML).toEqual('Hello World Angular 2 test01');
    });

});
