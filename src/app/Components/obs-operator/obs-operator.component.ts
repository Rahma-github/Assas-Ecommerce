import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { delay, elementAt, interval, of, sequenceEqual, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-operator',
  imports: [],
  templateUrl: './obs-operator.component.html',
  styleUrl: './obs-operator.component.css'
})
export class ObsOperatorComponent implements OnInit ,OnDestroy {
  private stockSubscription!: Subscription;
  stockQuantity: number = 10;

  ngOnInit(): void {
    const stockUpdateObservable = interval(1000);

    this.stockSubscription = stockUpdateObservable.subscribe(() => {
      if (this.stockQuantity > 0) {
        this.stockQuantity--;
        console.log(this.stockQuantity);

      } else {
        console.log('Out of stock');
      }
    });
    console.log(this.stockQuantity);






  // operator => some of fun implemented in observable

    const ob1 = of(10, 20, 30);
    ob1.pipe(
      elementAt(1)
    ).subscribe(value => {
      console.log('Emitted value:', value);
    });

 // Delay
    const obs2 = of('a','b','c');
    obs2.pipe(
      delay(3000)
    ).subscribe(value => {
      console.log('Emitted value:', value);
    });


    //condation boolean
    const ob31 = of(10, 40, 30);
    const obs32 = of(10, 20, 30);

    ob31.pipe(
      sequenceEqual(obs32)
    ).subscribe(isEqual => {
      console.log('equal :', isEqual);
    });

  }

  ngOnDestroy(): void {
    if (this.stockSubscription) {
      this.stockSubscription.unsubscribe();
      console.log('Unsubscribed');
    }
  }


}
