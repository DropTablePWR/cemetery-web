import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewTombstone} from "../../../interfaces/new-tombstone";
import {TombstoneService} from "../tombstone.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-create-tombstone',
  templateUrl: './create-tombstone.component.html',
  styleUrls: ['./create-tombstone.component.scss']
})
export class CreateTombstoneComponent implements OnInit {

  id!: number;
  x_position!: number;
  y_position!: number;
  registerForm!: FormGroup;
  submitted = false;
  newTombstone = new NewTombstone();

  constructor(
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private tombstoneService: TombstoneService,
    private datePipe: DatePipe
    ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.cemeteryId;
      this.x_position = params.x;
      this.y_position = params.y;
    });

    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birth_date: ['', Validators.required],
      death_date: ['', Validators.required]
    },
      {validator: this.dateLessThan('birth_date', 'death_date')});

  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.newTombstone = {
      gridX: this.x_position,
      gridY: this.y_position,
      guest: {
        firstName: this.registerForm.value.first_name,
        lastName: this.registerForm.value.last_name,
        birthDate: this.datePipe.transform(this.registerForm.value.birth_date,"yyyy-MM-dd") ,
        deathDate: this.datePipe.transform(this.registerForm.value.death_date,"yyyy-MM-dd") ,
      }
    };

    this.tombstoneService.createNewTombstone(this.id, this.newTombstone);
    alert('New tombstone added successfully');
    this.router.navigateByUrl(`/cemetery/${this.id}`)
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.router.navigateByUrl(`/cemetery/${this.id}`)
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "*Birth date should be less than Death date"
        };
      }
      return {};
    }
  }
}
