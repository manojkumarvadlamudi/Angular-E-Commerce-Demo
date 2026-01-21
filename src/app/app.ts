import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  cart: any[] = [];
  cartCount = 0;
  isCartOpen = false;

  // 🔥 UI states
  isScrolled = false;
  badgeBounce = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;

      const newCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      // 🛒 trigger badge bounce on change
      if (newCount !== this.cartCount) {
        this.triggerBadgeBounce();
      }

      this.cartCount = newCount;

      // auto-close cart if empty
      if (this.cart.length === 0) {
        this.isCartOpen = false;
      }
    });
  }

  /* ================= TOP BAR SCROLL ================= */

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  /* ================= CART UI ================= */

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  increaseQty(item: any): void {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: any): void {
    this.cartService.decreaseQty(item);
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  /* ================= ANIMATIONS ================= */

  private triggerBadgeBounce(): void {
    this.badgeBounce = true;
    setTimeout(() => {
      this.badgeBounce = false;
    }, 300);
  }

  /* ================= PERFORMANCE ================= */

  trackById(index: number, item: any) {
    return item.id;
  }
}
