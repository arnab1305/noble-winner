import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-multiple-owner',
  templateUrl: './multiple-owner.component.html',
  styleUrls: ['./multiple-owner.component.scss']
})
export class MultipleOwnerComponent implements OnInit {

  winnerData:any = []
  multiWinnera:any = [{

    "id":"217",
    "firstname":"Linus",
    "surname":"Pauling",
    "category":["peace","chemistry"]

  },
  {

    "id":"6",
    "firstname":"Marie",
    "surname":"Curie",
    "category":["physics","chemistry"]

  },
  {

    "id":"222",
    "firstname":"Frederick",
    "surname":"Sanger",
    "category":["chemistry","chemistry"]

  },
  {

    "id":"66",
    "firstname":"John",
    "surname":"Bardeen",
    "category":["physics","chemistry"]

  }
]
  visitedId:any = []
  duplicate:any = []
  constructor(private http : HttpClient ) { }

  async getData(){
    const url ='https://api.nobelprize.org/v1/prize.json'
    this.http.get(url).subscribe((res)=>{
      this.winnerData = res;

     })

  }
  test(){

    for(var val of this.winnerData.prizes){

       for(var val2 of val.laureates){

              if(this.visitedId.includes(val2.id)){

                this.duplicate.push(val)

              }
              else{

                this.visitedId.push(val2.id)

              }

            }
      console.log(val["laureates"][0])


    }
    console.log(this.duplicate)

  }




  async ngOnInit() {

    await this.getData();

  }

}
