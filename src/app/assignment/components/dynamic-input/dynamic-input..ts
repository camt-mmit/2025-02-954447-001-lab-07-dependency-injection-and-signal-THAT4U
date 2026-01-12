import { Component, input, output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  template: `
    <div class="input-row">
      <label>
        Number {{ idx() + 1 }} ::
        <input
          type="number"
          [ngModel]="value()"
          (ngModelChange)="value.set($event)"
        />
      </label>
      <button
        class="btn-red"
        (click)="remove.emit()"
        [disabled]="!removable()"
      >
        <span class="material-symbols-outlined">delete_forever</span>
      </button>
    </div>
  `,
  styles: [`
    /* Copy สไตล์มาจาก lab06.scss ส่วนที่เป็น input-row */
    .input-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    label {
      flex-grow: 1;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    input {
      text-align: right;
      padding: 5px;
      width: 100px;
      margin-left: 10px;
    }
    /* สไตล์ปุ่ม */
    button {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      display: inline-flex;
      align-items: center;
    }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-red { background-color: #ffebee; color: #d32f2f; }
    .material-symbols-outlined { font-size: 20px; vertical-align: middle; }
  `]
})
export class DynamicInputComponent {
  readonly idx = input.required<number>();
  readonly value = model.required<number>();
  readonly removable = input(true); // รับค่ามาว่าลบได้ไหม (ถ้าเหลือแถวเดียวจะลบไม่ได้)
  readonly remove = output<void>();
}
