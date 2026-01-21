import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];

  // 🔁 Reactive cart stream (single source of truth)
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    this.loadCart();
  }

  /* for loading*/

  private loadCart(): void {
    const saved = localStorage.getItem('cart');
    this.cart = saved ? JSON.parse(saved) : [];
    this.cartSubject.next([...this.cart]);
  }

  /* syncarnizing*/

  private sync(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next([...this.cart]);
  }

  /* adding logic */

  addToCart(product: any): void {
    const item = this.cart.find(i => i.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.sync();
  }

  /* quantity calculation */

  increaseQty(item: any): void {
    const found = this.cart.find(i => i.id === item.id);
    if (!found) return;

    found.quantity++;
    this.sync();
  }

  decreaseQty(item: any): void {
    const found = this.cart.find(i => i.id === item.id);
    if (!found) return;

    found.quantity--;

    if (found.quantity <= 0) {
      this.removeItem(found);
      return;
    }

    this.sync();
  }

  /* removing logic*/

  removeItem(item: any): void {
    this.cart = this.cart.filter(i => i.id !== item.id);
    this.sync();
  }

  /* clearing cart*/

  clearCart(): void {
    this.cart = [];
    this.sync();
  }

  /* total */

  getTotalPrice(): number {
    return this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  getCartCount(): number {
    return this.cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }
}
