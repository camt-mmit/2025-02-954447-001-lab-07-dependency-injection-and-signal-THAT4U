import { Component, input, output, model, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [DynamicInputComponent, DecimalPipe],
  template: `
    <div class="section-container">
      <div class="section-header">
        <button class="btn-blue" (click)="addNumber()">
          <span class="material-symbols-outlined">add</span> Input
        </button>

        <h2>
          Section {{ idx() + 1 }}
          <span class="count-badge">({{ nums().length }})</span>
        </h2>

        <button class="btn-red" (click)="removeSection.emit()" [disabled]="!removable()">
          <span class="material-symbols-outlined">delete</span> Section
        </button>
      </div>

      <div class="inputs-list">
        @for (n of nums(); track $index) {
          <app-dynamic-input
            [idx]="$index"
            [value]="n"
            [removable]="nums().length > 1"
            (valueChange)="updateNumber($index, $event)"
            (remove)="removeNumber($index)">
          </app-dynamic-input>
        }
      </div>

      <div class="result-box">
        Result :: <span class="result-value">{{ result() | number }}</span>
      </div>
    </div>
  `,
  styles: [`
    .section-container {
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      max-width: 600px;
      margin-inline: auto;
    }
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #eee;
      padding-bottom: 15px;
      margin-bottom: 15px;
    }
    h2 {
      margin: 0;
      font-size: 1.5em;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .count-badge {
      font-size: 0.8em;
      color: #666;
      font-weight: normal;
    }
    .result-box {
      text-align: right;
      margin-top: 20px;
      font-size: 1.2em;
      font-weight: bold;
    }
    .result-value { text-decoration: underline double; }

    button {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-blue { background-color: #e3f2fd; color: #1976d2; }
    .btn-red { background-color: #ffebee; color: #d32f2f; }
    .material-symbols-outlined { font-size: 20px; }
  `]
})
export class DynamicSectionComponent {
  readonly idx = input.required<number>();
  readonly nums = model.required<number[]>();
  readonly removable = input(true);
  readonly removeSection = output<void>();

  readonly result = computed(() => {
    return this.nums().reduce((sum, curr) => sum + (curr || 0), 0);
  });

  addNumber() {
    this.nums.update(old => [...old, 0]);
  }

  updateNumber(index: number, val: number) {
    this.nums.update(old => {
      const newArr = [...old];
      newArr[index] = val;
      return newArr;
    });
  }

  removeNumber(index: number) {
    this.nums.update(old => old.filter((_, i) => i !== index));
  }
}
