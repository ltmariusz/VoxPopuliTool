import { Component } from '@angular/core';

interface Answers{
 last:boolean;
}


@Component({
  selector: 'app-form-create-add-single-choice',
  templateUrl: './form-create-add-single-choice.component.html',
  styleUrls: ['./form-create-add-single-choice.component.scss']
})




export class FormCreateAddSingleChoiceComponent {

  indexOfAnswer:number = 1
  numberOfAnswer:Array<Answers> = [{last: true}]

  /**
   * Funkcja dodawająca nową przestrzeń do pisania odpowiedzi
   * @param answer 
   */
  clickCreateNewAnswer(answer: any){
    console.log(answer)
    if(answer.last==true){
      this.numberOfAnswer.push({last:true})
      this.numberOfAnswer[this.numberOfAnswer.length-2].last=false
    }
  }

  deleteAnswer(index: number){
    console.log(index)
    this.numberOfAnswer.splice(index,1)
  }


}
