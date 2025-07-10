import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallerComponent } from './http-caller.component';

describe('HttpCallerComponent', () => {
  let component: HttpCallerComponent;
  let fixture: ComponentFixture<HttpCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpCallerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
