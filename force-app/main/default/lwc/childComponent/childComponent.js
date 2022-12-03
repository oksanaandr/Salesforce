import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    constructor(){
        super();
        console.log('Constructor of Child');
    }
    connectedCallBack(){
        console.log('ConnectedCallBack of Child');
    }
    renderCallBack(){
        console.log('RenderCallBack of Child');
    }
    disconnectedCallBack(){
        console.log('DisconnectedCallBack of Child');
    }
    errorCallBack(){
        console.log('ErrorCallBack of Child');
    }
}