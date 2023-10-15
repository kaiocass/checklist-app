import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export const CATEGORY_DATA = [
  { name: 'Educação', guid: 'aaa-bbb-ccc-ddd' },
  { name: 'Saúde', guid: 'aaa-bbb-ccc-ddd' },
  { name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd' },
  { name: 'Outros', guid: 'aaa-bbb-ccc-ddd' },
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public createNewCategory() {}

  public editCategory(category: Category) {}

  public deleteCategory(category: Category) {
    this.dialog
      .open(DialogComponent, {
        disableClose: true,
        data: {
          dialogMsg:
            'Are you sure you would like to delete the selected category?',
          leftButtonLabel: 'Cancel',
          rightButtonLabel: 'Yes',
        },
      })
      .afterClosed()
      .subscribe((resp) => {
        if (resp) {
          console.log('Success deleted category');
        } else {
          console.log('Not deleted category');
        }
      });
  }
}
