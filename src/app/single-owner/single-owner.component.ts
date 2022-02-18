import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FilterPipe } from '../shared/filter.pipe';
@Component({
  selector: 'app-single-owner',
  templateUrl: './single-owner.component.html',
  styleUrls: ['./single-owner.component.scss']
})
export class SingleOwnerComponent implements OnInit {

  winnerData:any = []
  totalYears:any = []
  totalCategory:any = []
  currentDate:any = ''
  selectedYear = ''
  selectedCategory = ''
  filterArray:any = []
  winnerDateFiltered : any = []

  constructor(private http: HttpClient) { }



  getData(){
    const url ='https://api.nobelprize.org/v1/prize.json'
    this.http.get(url).subscribe((res)=>{
      this.winnerData = res
      console.log(this.winnerData)
      this.winnerDateFiltered = this.winnerData
    })
  }
  getFilteredData(year:string,category:string){
    const url ='https://api.nobelprize.org/v1/prize.json'
    this.http.get(url+"?year="+year+"&category="+category).subscribe((res)=>{
      this.winnerData = res
      console.log(this.winnerData)
      this.winnerDateFiltered = this.winnerData
    })


  }

  clear(){

    this.selectedYear =''
    this.selectedCategory=''
    this.getData()

  }

  getTotalYear(){

    for(let i = 1900;i<2019;i++){

      this.totalYears.push(String(i));

    }
    this.totalYears = this.totalYears.reverse()

  }
  getTotalCategory(){

    const url ='https://api.nobelprize.org/v1/prize.json'
    this.http.get(url).subscribe((res)=>{
      this.winnerData = res
      let categoryBuffer = ''
      let isThere:boolean
      for(var val of this.winnerData.prizes){


        categoryBuffer =val.category;
        isThere = this.totalCategory.includes(categoryBuffer)
        if(!isThere){

          this.totalCategory.push(categoryBuffer)

        }





      }
    })

  }
  apply(){

    let newPipe = new FilterPipe
    this.filterArray.push(this.selectedCategory,this.selectedYear)
    if(this.filterArray.length != 0){

      this.winnerDateFiltered = newPipe.transform(this.winnerData.filterArray)

    }


  }
  ngOnInit(): void {

    this.getData()
    this.getTotalYear()
    this.getTotalCategory()
  }




}
