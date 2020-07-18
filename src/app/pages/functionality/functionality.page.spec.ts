import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FunctionalityPage } from './functionality.page';

describe('FunctionalityPage', () => {
  let component: FunctionalityPage;
  let fixture: ComponentFixture<FunctionalityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FunctionalityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
