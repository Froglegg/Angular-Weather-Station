import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterTestComponent } from './emitter-test.component';

describe('EmitterTestComponent', () => {
  let component: EmitterTestComponent;
  let fixture: ComponentFixture<EmitterTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitterTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
