import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Interface for the item data
interface ItemData {
  itemShortGenericName: string;
  itemClass: string;
  itemPartNo: string;
  itemManufacture: string;
  itemBrand: string;
  itemCategory: string;
  itemGroup: string;
  itemLength: number;
  itemWidth: number;
  itemHeight: number;
  itemThickness: number;
  itemColor: string;
  netWeightUnit: number;
  netWeightUOM: string;
  grossWeightUnit: number;
  grossWeightUOM: string;
  detailedDescription: string;
}

// Component to display the item details popup
@Component({
  selector: 'app-item-details-popup',
  templateUrl: './item-details-popup.component.html',
  styleUrls: ['./item-details-popup.component.css']
})
export class ItemDetailsPopupComponent implements OnInit {
  // Data for the item details popup
  itemData: ItemData = {
    itemShortGenericName: '',
    itemClass: '',
    itemPartNo: '',
    itemManufacture: '',
    itemBrand: '',
    itemCategory: 'General',
    itemGroup: 'Sales',
    itemLength: 0,
    itemWidth: 0,
    itemHeight: 0,
    itemThickness: 0,
    itemColor: '',
    netWeightUnit: 0,
    netWeightUOM: '',
    grossWeightUnit: 0,
    grossWeightUOM: '',
    detailedDescription: '',
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // Method to save the item details
  saveItemDetails(): void {
    // TODO: Implement save logic
  }

  // Method to clear the item details
  clearItemDetails(): void {
    // Reset the item data to default values
    this.itemData = {
      itemShortGenericName: '',
      itemClass: '',
      itemPartNo: '',
      itemManufacture: '',
      itemBrand: '',
      itemCategory: 'General',
      itemGroup: 'Sales',
      itemLength: 0,
      itemWidth: 0,
      itemHeight: 0,
      itemThickness: 0,
      itemColor: '',
      netWeightUnit: 0,
      netWeightUOM: '',
      grossWeightUnit: 0,
      grossWeightUOM: '',
      detailedDescription: '',
    };
  }
}

// Component to trigger the item details popup
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  // Method to open the item details popup
  openItemDetailsPopup(): void {
    const dialogRef = this.dialog.open(ItemDetailsPopupComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}