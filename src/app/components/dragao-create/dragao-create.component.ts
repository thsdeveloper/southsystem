import {Component, OnInit} from '@angular/core';
import {DragaoService} from "../../services/dragao.service";

@Component({
  selector: 'app-dragao-create',
  templateUrl: './dragao-create.component.html',
  styleUrls: ['./dragao-create.component.css']
})
export class DragaoCreateComponent implements OnInit {
  product = {
    name: '',
    description: '',
    available: false
  };
  submitted = false;

  constructor(private dragaoService: DragaoService) {
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description
    };

    this.dragaoService.create(data)
      .subscribe(response => {
        console.log(response);
        this.submitted = true;
      }, error => {
        console.log(error);
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      description: '',
      available: false
    };
  }


}
