import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTextComponent } from './about-text.component';

describe('AboutTextComponent', () => {
  let component: AboutTextComponent;
  let fixture: ComponentFixture<AboutTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
