
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

    describe('Attributes', ()=>{
        it('fileNodeId should be mandatory', ()=>{
            component.showViewer = true;
            component.fileNodeId = undefined;

            expect(()=>{
                component.ngOnChanges();
            }).toThrow();
        })

        it('If fileNodeId is present, no errors should be thrown', ()=>{
            component.showViewer = true;
            component.fileNodeId = '12345';

            expect(()=>{
                component.ngOnChanges();
            }).not.toThrow();
        })

        it('showViewer default value should be true', ()=>{
            expect(component.showViewer).toBeTruthy();
        })

        it('overlayMode default value should be false', ()=>{
            expect(component.overlayMode).toBeFalsy();
        })

        it('if showViewer is false, viewer should be hidden', ()=>{
            component.showViewer = false;
            fixture.detectChanges();
            expect(element.querySelector('#viewer-main-container')).toBeNull();
        })
    })

    describe("Lifecycle", ()=>{
        beforeEach(()=>{
            component.fileNodeId = '12345';
            component.showViewer = true;
        });

        describe('Closing Viewer', ()=>{
            it('should clear fileNodeId', ()=>{
                component.close();
                fixture.detectChanges();
                expect(component.fileNodeId).toBeNull();
            })

            it('should hide the viewer', ()=>{
                component.close();
                fixture.detectChanges();
                expect(component.showViewer).toBeFalsy();
            })

            it('should emit a close viewer event', (done)=>{
                component.showViewerChange.subscribe((e)=>{
                    expect(e).toBeFalsy();
                    done();
                })
                component.close();
            })
        })

        it('should clear fileNodeId on destroy', ()=>{
            component.ngOnDestroy();
            fixture.detectChanges();
            expect(component.fileNodeId).toBeNull();
        })
    })

});
