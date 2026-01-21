import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  cart: any[] = [];
  total = 0;
  showSuccess = false;

  customer = {
    name: '',
    phone: '',
    address: '',
    payment: 'cod'
  };

  constructor(
    private cartService: CartService,
    public router: Router
  ) {}

  ngOnInit(): void {
    // ✅ Single source of truth: CartService
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.total = this.cartService.getTotalPrice();
    });
  }

  /* cart actions*/

  increaseQty(item: any): void {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: any): void {
    this.cartService.decreaseQty(item);
  }

  removeItem(item: any): void {
    this.cartService.removeItem(item);
  }

  /*orders*/

  placeOrder(): void {
    if (!this.customer.name || !this.customer.phone || !this.customer.address) {
      alert('⚠️ Fill delivery details');
      return;
    }

    this.showSuccess = true;
    this.cartService.clearCart();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
