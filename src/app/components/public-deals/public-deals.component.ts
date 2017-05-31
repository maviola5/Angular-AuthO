import { Component, OnInit } from '@angular/core';
import { Deal } from '../../models/deal';
import { AuthService } from '../../services/auth.service';
import { DealService } from '../../services/deal.service';

@Component({
  selector: 'public-deals',
  template: `
    <h3 class="text-center">Daily Deals</h3>

    <div class="col-sm-4"
    *ngFor="let deal of publicDeals"
    >
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
            <li><a class="btn btn-danger">$ {{ deal.originalPrice | number }}</a></li>
            <li class="pull-right"><a class="btn btn-success">$ {{ deal.salePrice | number }}</a></li>
          </ul>      
        </div>
      </div>
    </div>

    <!-- We are going to use the authSerivce.loggedIn() method to see if the use -->
    <div class="col-sm-12"
    *ngIf="!authService.authenticated">
      <div class="jumbotron text-center">
        <h2>Get More Deals By Logging In</h2>
      </div>
    </div>

    <div class="col-sm-12"
    *ngIf="authService.authenticated"
    >
      <div class="jumbotron text-center">
        <h2>View Private Deals</h2>
        <a routerLink="/special" class="btn btn-lg btn-success">Private Deals</a>
      </div>
    </div>
  `,
  styleUrls: ['./public-deals.component.sass']
})
export class PublicDealsComponent implements OnInit {
  
  publicDeals: Deal[];

  constructor(
    private dealService: DealService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.dealService.getPublicDeals()
    .then(deals => this.publicDeals = deals);
  }

  purchase(item) {
    alert("You bought the: " + item.name);
  }

}
