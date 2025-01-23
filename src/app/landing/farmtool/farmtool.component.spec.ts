import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmtoolComponent } from './farmtool.component';

describe('FarmtoolComponent', () => {
  let component: FarmtoolComponent;
  let fixture: ComponentFixture<FarmtoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmtoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
