import { Component } from '@angular/core';
import {Product} from './product';
import {ProductService} from './productservice';
import {OverlayPanel} from 'primeng/overlaypanel';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  
    products: Product[];
    
    selectedProduct: Product;

    constructor(private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
        
    }

    onRowSelect(event) {
        this.messageService.add({severity: 'info', summary: 'Product Selected', detail: event.data.name});
    }
}
