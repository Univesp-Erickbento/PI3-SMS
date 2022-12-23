import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoresViewComponent } from './sensores-view.component';

describe('SensoresViewComponent', () => {
  let component: SensoresViewComponent;
  let fixture: ComponentFixture<SensoresViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensoresViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensoresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
