import { Routes } from '@angular/router';
// Import Component ของ Assignment ให้ถูกต้อง

import { AssignmentUpdatePage } from './pages/assignment-update-page/assignment-update-page'; // ตรวจสอบ Path ว่าไฟล์ update page อยู่ใน folder pages จริงหรือไม่
import { AssignmentRoot } from './pages/assignment-root/assignment-root';

export default [
  {
    path: '',
    component: AssignmentRoot,
    children: [
      // Redirect ไปที่หน้า update หรือ display ตามต้องการ
      { path: '', redirectTo: 'update', pathMatch: 'full' },
      { path: 'update', component: AssignmentUpdatePage }, // แก้ชื่อ Class ให้ถูกต้อง (ลบ s เกินออก)
    ],
  },
] as Routes;
