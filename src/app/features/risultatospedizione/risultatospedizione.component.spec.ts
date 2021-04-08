import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisultatospedizioneComponent } from './risultatospedizione.component';

describe('RisultatospedizioneComponent', () => {
  let component: RisultatospedizioneComponent;
  let fixture: ComponentFixture<RisultatospedizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisultatospedizioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RisultatospedizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
