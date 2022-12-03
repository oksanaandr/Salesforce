import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    constructor(){
        super();
        console.log('Constructor of Parent');
    }
    connectedCallBack(){
        console.log('ConnectedCallBack of Parent')
    }
    renderCallBack(){
        console.log('RenderCallBack of Parent')
    }
    disconnectedCallBack(){
        console.log('DisconnectedCallBack of Parent')
    }
    errorCallBack(){
        console.log('ErrorCallBack of Parent')
    }
    handleToggleChild
}