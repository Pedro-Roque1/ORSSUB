import { Component } from '@angular/core';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryModalComponent, ServicesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
