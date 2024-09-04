import {ChangeDetectionStrategy, Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Person} from "../shared/person";
import {RandomDataService} from "../core/random-data.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [RandomDataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent{

  randomDataService = inject(RandomDataService)

  @Input() parentPersonData: Person = { name: '', age: 0 };
  @Input() numberForChangeDetection: number = 0;

  private childFirstNumber: number = 0;
  private childSecondNumber: number = 0;

  private childPersonData: Person = { name: '', age: 0 };

  nameHistory: string[] = [];
  numberHistory: number[] = [];

  getChildFirstNumber(){
    return this.childFirstNumber;
  }

  getChildSecondNumber(){
    return this.childSecondNumber;
  }

  getChildPersonData(){
    return this.childPersonData;
  }

  getParentPersonData(){
    return this.parentPersonData;
  }

  updateChildData(){
    this.childPersonData.name = this.randomDataService.generateRandomName();
    this.childPersonData.age = this.randomDataService.generateRandomNumber();
    this.childFirstNumber = this.randomDataService.generateRandomNumber();
    this.childSecondNumber = this.randomDataService.generateRandomNumber();
    this.updateHistories();
  }

  updateHistories() {
    this.nameHistory = this.randomDataService.getNameHistory();
    this.numberHistory = this.randomDataService.getNumberHistory();
  }
}
