import {Component, inject} from '@angular/core';
import {Person} from "../shared/person";
import {RandomDataService} from "../core/random-data.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  private randomDataService = inject(RandomDataService);

  private parentFirstNumber: number = 0;
  private parentSecondNumber: number = 0;

  private numberForChangeDetection: number = 0;

  private parentPersonData: Person = { name: '', age: 0 };

  getParentFirstNumber() {
    return this.parentFirstNumber;
  }

  getParentSecondNumber() {
    return this.parentSecondNumber;
  }

  getParentPersonData() {
    return this.parentPersonData;
  }

  getNumberForChangeDetection(){
    return this.numberForChangeDetection;
  }

  updateParentData(){
    this.parentPersonData.name = this.randomDataService.generateRandomName();
    this.parentPersonData.age = this.randomDataService.generateRandomNumber();
    this.parentFirstNumber = this.randomDataService.generateRandomNumber();
    this.parentSecondNumber = this.randomDataService.generateRandomNumber();
  }

  updateParentPersonDataReference(){
    this.parentPersonData = {
      name: this.randomDataService.generateRandomName(),
      age: this.randomDataService.generateRandomNumber()
    };
  }

  updateParentPersonDataProperty(){
    this.parentPersonData.name = this.randomDataService.generateRandomName();
    this.parentPersonData.age = this.randomDataService.generateRandomNumber();
    this.numberForChangeDetection= this.randomDataService.generateRandomNumber();
  }
}
