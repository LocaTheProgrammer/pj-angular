import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattamiComponent } from './contattami.component';

describe('ContattamiComponent', () => {
  let component: ContattamiComponent;
  let fixture: ComponentFixture<ContattamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContattamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContattamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
