
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AlfrescoSettingsService, AlfrescoApiService, AlfrescoAuthenticationService, CoreModule } from 'ng2-alfresco-core';

import { SnowboundViewerComponent } from './snowbound-viewer.component';

describe('Test ng2-snowbound-viewer component', () => {

    let component: SnowboundViewerComponent;
    let fixture: ComponentFixture<SnowboundViewerComponent>;
    let debug: DebugElement;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreModule
            ],
            declarations: [SnowboundViewerComponent],
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
        fixture = TestBed.createComponent(SnowboundViewerComponent);

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
