import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  private nameHistory: string[] = [];
  private numberHistory: number[] = [];

  constructor() { }

  generateRandomNumber(min: number = 0, max: number = 100): number {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    this.numberHistory.push(randomNum);
    return randomNum;
  }

  generateRandomName(): string {
    const names = ['Olivia', 'Liam', 'Emma', 'Noah', 'Ava', 'Elijah', 'Sophia', 'Lucas', 'Isabella', 'Mason'];
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    this.nameHistory.push(randomName);
    return randomName;
  }

  getNameHistory(): string[] {
    return this.nameHistory;
  }

  getNumberHistory(): number[] {
    return this.numberHistory;
  }
}
