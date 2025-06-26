import { CommonModule } from '@angular/common';
import { Component, computed, linkedSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-linked-signal',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss',
})
export class LinkedSignalComponent {
  // Fruits signal
  fruits = signal<string[]>(['Apple', 'Mango', 'Pineapple', 'Grapes']);

  // Selected fruit signal
  selectedFruit = linkedSignal<string[], string | null>({
    source: () => this.fruits(),
    computation: (source, previous) => null,
  });

  // Select fruit on click
  selectFruit(fruit: string) {
    return this.selectedFruit() === fruit;
  }

  // Add extra fruits to fruit signal
  loadMoreFruits() {
    this.fruits.set([
      'Apple',
      'Mango',
      'Pineapple',
      'Grapes',
      'Orange',
      'Banana',
      'Pomegranate',
    ]);
  }

  // Remove fruits to fruit signal
  loadLessFruits() {
    this.fruits.set(['Apple', 'Mango', 'Pineapple', 'Grapes']);
  }
}
