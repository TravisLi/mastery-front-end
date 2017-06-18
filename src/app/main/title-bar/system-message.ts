export enum SysMsgType{
  Primary,
  Secondary,
  Success,
  Warning,
  Alert
}

export class SystemMessage{
    type:SysMsgType;
    msg:string;

    constructor(type:SysMsgType,msg:string){
      this.type=type;
      this.msg=msg;
    }
}
