import { ChangeDetectionStrategy, Component,input } from '@angular/core';
import { Contact } from '../../types';
import { DisplayTel } from '../display-tel/display-tel';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-display-contact',
  imports: [DisplayTel, DecimalPipe],
  templateUrl: './display-contact.html',
  styleUrl: './display-contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayContact {
  readonly contacts = input.required<readonly Contact[]>();
}