import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  public getCount() {
    return this.counterService.count;
  }

  public incCount() {
    this.counterService.count += 1;
  }

  clickMethod(name: string) {
    if(this.getCount() > 0){
    if(confirm("Are you sure you want to book "+this.getCount() + " tickets")) {
      confirm(this.getCount() +" tickect is booked");
    }
    }
  }
}
