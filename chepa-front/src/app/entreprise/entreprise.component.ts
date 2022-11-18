import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GetApiService } from "../get-api.service";

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent {

  entreprise!: any;
  constructor(private apiService: GetApiService) {}

  async ngOnInit(): Promise<void> {
    this.entreprise = await lastValueFrom(this.apiService.getUsers())
  }

}
