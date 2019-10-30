import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTypeComponent } from './hero-type.component';

describe('HeroTypeComponent', () => {
  let component: HeroTypeComponent;
  let fixture: ComponentFixture<HeroTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
