import { booleanAttribute, ChangeDetectionStrategy, Component, input, model, output,numberAttribute } from '@angular/core';
import { createContact, createTel } from '../../helpers';
import { __values } from 'tslib';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-tel',
  imports: [DecimalPipe],
  templateUrl: './dynamic-tel.html',
  styleUrl: './dynamic-tel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTel {

  readonly number = input(NaN, { transform: numberAttribute });
  readonly contact = model(createContact());
  readonly removable = input(true,{ transform: booleanAttribute});

  readonly remove = output<void>();

    protected changeName(name : string): void{
    this.contact.update((contact)=> {
      return{
        ...contact,
        name
      };
    });
  }

  protected addTel(): void{
    this.contact.update((contact)=> {
      const{tels, ...rest } = contact;
      return{
        ...rest,
        tels:[...tels, createTel()],
      };
    });
  }
   protected removeTel(index: number): void{
    this.contact.update((contact)=> {
      const{tels, ...rest } = contact;
      return{
        ...rest,
        tels: tels.filter((__value,i) => i !== index),
      };
    });
  }
  protected changeTel(index: number, value:string):void{
    this.contact.update((contact)=> {
      const{tels, ...rest } = contact;
      return{
        ...rest,
        tels: tels.map((tel,i) => {
          if (i === index){
            tel.value = value;
          }
          return tel;
        }),
      };
    });
  }
}

