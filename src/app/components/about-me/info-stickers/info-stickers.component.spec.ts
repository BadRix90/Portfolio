import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStickersComponent } from './info-stickers.component';

describe('InfoStickersComponent', () => {
  let component: InfoStickersComponent;
  let fixture: ComponentFixture<InfoStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoStickersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
