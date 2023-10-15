import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
})
export class MaterialModule {}
