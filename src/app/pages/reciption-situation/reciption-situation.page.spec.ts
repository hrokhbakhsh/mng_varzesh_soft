import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReciptionSituationPage } from './reciption-situation.page';

describe('ReciptionSituationPage', () => {
  let component: ReciptionSituationPage;
  let fixture: ComponentFixture<ReciptionSituationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptionSituationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReciptionSituationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
