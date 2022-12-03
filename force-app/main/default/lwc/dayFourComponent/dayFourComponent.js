import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/DayTwo.getContacts';
export default class DayFourComponent extends LightningElement {
    @track contacts=[];
    @track error;
    @wire(getContacts)
    wiredContacts({ error, data }) {      //wiredContacts just to define the name of the contact
        if (data) {

            data.forEach((contObj)=> {
                var tempContObj =JSON.parse(JSON.stringify(contObj)); //To break the dependency of the loop variable 
                tempContObj.href='/' + contObj.Id;
                console.log(tempContObj);
                this.contacts.push(tempContObj); //push is used to add element in the Array
            }); 

            //second option with a traditional for loop(not for Each loop)
            //for (var i=0; i<data.length; i++){
                //vartempContObj=JSON.parse(JSON.stringify(data[i]));
                //tempContObj.href='/' + data[i].Id;
                //console.log(tempContObj);
                //this.contacts.push(tempContObj);
            //}
            //There is no concept of data type in LWC. In case of sucess we return 'data', in case of failure to find searching data 'error' will be returned)// line #7 error and data just two variables(there is no conce
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}