import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  constructor() { }

  generateRandomNumber(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateRandomName(): string {
    const names = ['Olivia', 'Liam', 'Emma', 'Noah', 'Ava', 'Elijah', 'Sophia', 'Lucas', 'Isabella', 'Mason'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
}
