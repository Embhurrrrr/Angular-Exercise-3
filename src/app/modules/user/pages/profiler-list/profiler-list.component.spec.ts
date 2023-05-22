import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerListComponent } from './profiler-list.component';

describe('ProfilerListComponent', () => {
  let component: ProfilerListComponent;
  let fixture: ComponentFixture<ProfilerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerListComponent]
    });
    fixture = TestBed.createComponent(ProfilerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
