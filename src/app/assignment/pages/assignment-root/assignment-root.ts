import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-assignment-root',
  imports: [RouterOutlet],
  templateUrl: './assignment-root.html',
  // ลบ styleUrl ออกถ้าไม่มีไฟล์ .scss จริงๆ เพื่อป้องกัน Error
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentRoot {
}
