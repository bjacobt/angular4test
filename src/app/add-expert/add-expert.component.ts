import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Expert } from '../shared/expert';
import { exceptionGuard } from '@firebase/database/dist/esm/src/core/util/util';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-expert',
  templateUrl: './add-expert.component.html',
  styleUrls: ['./add-expert.component.css']
})
export class AddExpertComponent implements OnInit {
  expertsList: AngularFireList<{}>;
  form: FormGroup;
  address: string;
  userSettings = {inputPlaceholderText: "Enter address"}

  constructor(private formBuilder: FormBuilder, private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit() {
    this.expertsList = this.db.list('experts');
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]

    });
    if(this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');

      //TODO display here
    }

    
  }

  
	autoCompleteCallback1(selectedData:any) {
    this.address = selectedData.data.formatted_address;
    
  }
  
  onSubmit() {
    if (this.form.valid) {
      const firstName = this.form.get("firstName").value;
      const lastName = this.form.get("lastName").value;
      
      
      const expertRef = this.expertsList.push({});
  
      expertRef.set({
        id: expertRef.key,
        firstName: firstName,
        lastName: lastName,
        address: this.address
      })
    } else {
      //TODO form invalid
    }
  } 
}
