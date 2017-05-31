import { Component, OnInit } from '@angular/core';
import { Deal } from '../../models/deal';
import { DealService } from '../../services/deal.service';

@Component({
  selector: 'app-private-deals',
  template: `
    <h3 class="text-center">Special (Private) Deals</h3>

    <div class="col-sm-4"
    *ngFor="let deal of privateDeals">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">{{ deal.name }}</h3>
        </div>
        <div class="panel-body">
          {{ deal.description }}
        </div>
        <div class="panel-footer">
          <ul class="list-inline">
            <li>Original</li>
            <li class="pull-right">Sale</li>
          </ul>
          <ul class="list-inline">
            <li>
              <a href="" class="btn btn-danger">$ {{ deal.originalPrice | number }}</a>
            </li>
            <li class="pull-right">
              <a href="" class="btn btn-success" (click)="purchase(deal)">$ {{ deal.salePrice | number }}</a>    
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-sm-12">
      <div class="jumbotron text-center">
           <h2>View Public Deals</h2>
           <a href="" class="btn btn-lg btn-success" routerLink="/deals">Public Deals</a>
      </div>
    </div>
  `,
  styleUrls: ['./private-deals.component.sass']
})
export class PrivateDealsComponent implements OnInit {

  privateDeals: Deal[];
  error: any;

  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.getPrivateDeals();
  }

  getPrivateDeals(): void {
    this.dealService
    .getPrivateDeals()
    .then(deals => this.privateDeals = deals)
    .catch(error => this.error = error);
  }
  
  purchase(item) {
    alert("You bought the: " + item.name);
  }

}
