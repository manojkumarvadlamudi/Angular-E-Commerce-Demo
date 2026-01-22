import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private cartService: CartService) {}

  //  Add product to cart
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  //  Next image
  nextImage(product: any) {
    product.currentImageIndex =
      (product.currentImageIndex + 1) % product.images.length;
  }

  //  Previous image
  prevImage(product: any) {
    product.currentImageIndex =
      (product.currentImageIndex - 1 + product.images.length) % product.images.length;
  }

  // Product list
  products = [
    {
      id: 1,
      name: 'AirPods',
      price: 2500,
      description: 'Rich, balanced sound with deep bass and crisp highs. Up to 30+ hours total battery life with fast charging.',
      currentImageIndex: 0,
      images: [
        'assets/images/airpods1.jpg',
        'assets/images/airpods2.jpg',
        'assets/images/airpods3.jpg',
        'assets/images/airpods4.jpg'
      ]
    },
    {
      id: 2,
      name: 'Camera',
      price: 45999,
      description: '45MP full-frame camera with advanced autofocus and 4K video recording for professional photography.',
      currentImageIndex: 0,
      images: [
        'assets/images/camera1.jpg',
        'assets/images/camera2.jpg',
        'assets/images/camera3.jpg',
        'assets/images/camera4.jpg'
      ]
    },
    {
      id: 3,
      name: 'Gaming Controller',
      price: 3999,
      description: 'Ergonomic design with textured grips, hall-effect analog sticks, and programmable buttons.',
      currentImageIndex: 0,
      images: [
        'assets/images/controller1.jpg',
        'assets/images/controller2.jpg',
        'assets/images/controller3.jpg',
        'assets/images/controller4.jpg'
      ]
    },
    {
      id: 4,
      name: 'Headphones',
      price: 1999,
      description: '40mm drivers with deep bass and active noise cancellation for immersive listening.',
      currentImageIndex: 0,
      images: [
        'assets/images/headphones1.jpg',
        'assets/images/headphones2.jpg',
        'assets/images/headphones3.jpg',
        'assets/images/headphones4.jpg'
      ]
    },
    {
      id: 5,
      name: 'Laptop',
      price: 74999,
      description: 'Intel Core i9, RTX graphics, 16-inch 165Hz display, and 32GB RAM for power users and gamers.',
      currentImageIndex: 0,
      images: [
        'assets/images/laptop1.jpg',
        'assets/images/laptop2.jpg',
        'assets/images/laptop3.jpg',
        'assets/images/laptop4.jpg'
      ]
    },
    {
      id: 6,
      name: 'Mobile',
      price: 19800,
      description: 'Snapdragon processor with 200MP AI camera, fast charging, and smooth gaming performance.',
      currentImageIndex: 0,
      images: [
        'assets/images/mobile1.jpg',
        'assets/images/mobile2.jpg',
        'assets/images/mobile3.jpg',
        'assets/images/mobile4.jpg'
      ]
    },
    {
      id: 7,
      name: 'Speaker',
      price: 999,
      description: 'Dual drivers with deep bass, IP67 waterproof rating, and 24-hour battery life.',
      currentImageIndex: 0,
      images: [
        'assets/images/speaker1.jpg',
        'assets/images/speaker2.jpg',
        'assets/images/speaker3.jpg',
        'assets/images/speaker4.jpg'
      ]
    },
    {
      id: 8,
      name: 'Smart Watch',
      price: 1200,
      description: 'Tracks heart rate, SpO2, sleep, and 100+ sports modes with a 7-day battery.',
      currentImageIndex: 0,
      images: [
        'assets/images/tracker1.jpg',
        'assets/images/tracker2.jpg',
        'assets/images/tracker3.jpg',
        'assets/images/tracker4.jpg'
      ]
    },
    {
      id: 9,
      name: 'Analog Watch',
      price: 699,
      description: 'Classic stainless-steel analog watch with sapphire crystal and leather strap.',
      currentImageIndex: 0,
      images: [
        'assets/images/watch1.jpg',
        'assets/images/watch2.jpg',
        'assets/images/watch3.jpg',
        'assets/images/watch4.jpg'
      ]
    },
    {
      id: 10,
      name: 'Mic',
      price: 499,
      description: 'Dynamic cardioid microphone with noise rejection, ideal for streaming and stage use.',
      currentImageIndex: 0,
      images: [
        'assets/images/mic1.jpg',
        'assets/images/mic2.jpg',
        'assets/images/mic3.jpg',
        'assets/images/mic4.jpg'
      ]
    }
  ];
}
