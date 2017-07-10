import { environment } from '../../environments/environment';

export class Util{

  public static toArrayOfArray(src:any[]):any[][]{
    let colPerRow:number = environment.columnPerRow;
    console.log('colPerRow:'+colPerRow);
    let noOfRow:number = src.length / colPerRow;
    console.log('noOfRow:'+noOfRow);
    let remainder:number = src.length % colPerRow;
    console.log('remainder:'+remainder);
    if(remainder>0){
      noOfRow++;
    }

    let rows:any[] = [];
    for(let i=1;i<=noOfRow;i++){
      //last row
      if(i==noOfRow){
        if(src.length<i*environment.columnPerRow){
          rows[i-1] = src.slice(colPerRow * (i-1), (src.length));
        }else{
          rows[i-1] = src.slice(colPerRow * (i-1), (colPerRow*i));
        }
      }else{
        rows[i-1] = src.slice(colPerRow * (i-1), (colPerRow*i));
      }
    }

      return rows;
  }

  public static formatStdDate(date:Date):string{
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  }

}
