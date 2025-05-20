import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHeroComponent } from './social-hero.component';

describe('SocialHeroComponent', () => {
  let component: SocialHeroComponent;
  let fixture: ComponentFixture<SocialHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
