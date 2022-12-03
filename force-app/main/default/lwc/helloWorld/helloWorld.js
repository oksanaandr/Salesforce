import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //variables are helping the data to travel from one place to another
    //basically we have 3 types of variables
    //String
    //Number
    //Boolean
    @track contact_firstName='John';
    @track contact_lastName='Walker';
    @track contact_age=34;
    @track contact_isSalaries=true;
    @track contact_salary=2334.45

    //Previously SF required to @track required at the HTML 
}