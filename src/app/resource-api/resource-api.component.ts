import { Component, effect, resource, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

function checkEquality(a: any, b: any) {
  if (JSON.stringify(a) == JSON.stringify(b)) {
    return true;
  }
  return false;
}

@Component({
  selector: 'app-resource-api',
  imports: [
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss',
})
export class ResourceApiComponent {
  categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  productCategory = signal('electronics');
  dummyApiEndPoint = 'https://fakestoreapi.com/products';

  products = resource({
    params: () => ({ catagory: this.productCategory() }),
    loader: async ({ params, abortSignal }) => {
      const resp = await fetch(
        `${this.dummyApiEndPoint}/category/${params.catagory}`,
        { signal: abortSignal }
      );
      if (!resp.ok) {
        throw new Error('Data Could not fetch.');
      }
      return resp.json();
    },
    defaultValue: [
      {
        id: 0,
        title: 'New Product',
        price: 0,
        description: 'New product description',
        category: 'New',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: {
          rate: 0,
          count: 0,
        },
      },
    ],
  });

  addProduct() {
    const newProduct = {
      id: Math.floor(Math.random() * 40),
      title: 'New Product',
      price: 0,
      description: 'New product description',
      category: 'New',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating: {
        rate: 0,
        count: 0,
      },
    };
    this.products.update(() => [newProduct, ...this.products.value()]);
  }

  searchProduct(category: string) {
    this.productCategory.set(category);
  }
}
