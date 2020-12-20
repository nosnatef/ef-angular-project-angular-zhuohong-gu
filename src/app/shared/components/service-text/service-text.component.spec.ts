import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTextComponent } from './service-text.component';

describe('ServiceTextComponent', () => {
  let component: ServiceTextComponent;
  let fixture: ComponentFixture<ServiceTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
