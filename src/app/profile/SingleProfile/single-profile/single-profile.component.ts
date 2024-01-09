import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.component.html',
  styleUrls: ['./single-profile.component.css'],
})
export class SingleProfileComponent implements OnInit {
  id: string | null="";
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = idParam; // Assign the valid string value to this.id
      console.log(this.id)
    } else {
      // Handle the case where 'id' is null, e.g., redirect or show an error message
    }
  }
}
