import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-productcard',
  imports: [RouterLink],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss',
})
export class ProductcardComponent {
product = input<product>({} as product)
}
