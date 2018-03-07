import { Component, OnInit } from '@angular/core';
import { AddExpertComponent } from '../add-expert/add-expert.component';
import { Expert } from '../shared/expert';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  experts: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.experts = this.db.list('experts').valueChanges();
  }

}
