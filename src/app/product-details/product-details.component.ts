import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  productIdFromParam: Number | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.productIdFromParam = Number(params.get('productId'));
    this.product = products.find((p) => p.id == this.productIdFromParam);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
