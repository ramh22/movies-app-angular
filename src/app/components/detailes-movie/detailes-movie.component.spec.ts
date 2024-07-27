import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailesMovieComponent } from './detailes-movie.component';

describe('DetailesMovieComponent', () => {
  let component: DetailesMovieComponent;
  let fixture: ComponentFixture<DetailesMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailesMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailesMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
