import { LightningElement, track } from 'lwc';

export default class DayTwoComponent extends LightningElement {
    //variable with a type object
    //DOM-document object model, is backbone of LWC
    @track contact={
        firstName:'John',
        lastName: 'Walker',
        phone: '2064322126',
        email: 'test001@gmail.com',
        age: 34,
        isSalaried: true,
        salary: 3123.50


    };
    @track contact2={
        firstName:'Jacob',
        lastName: 'Walker',
        phone: '2064322122',
        email: 'test002@gmail.com',
        age: 35,
        isSalaried: true,
        salary: 4223.50


    };
    //Array --> is a collection type variable, that holds more than one value 
    // there are 3 items in the array example below

    @track contactlist=[  
        {   firstName:'John',
            lastName: 'Walker',
            phone: '2064322126',
            email: 'test001@gmail.com',
            age: 34,
            isSalaried: true,
            salary: 3123.50
    
    
        },
        {   firstName:'Jacob',
            lastName: 'Walker',
            phone: '2064322122',
            email: 'test002@gmail.com',
            age: 35,
            isSalaried: true,
            salary: 4223.50
        },
        {   firstName:'Allison',
            lastName: 'Jacobson',
            phone: '2064322121',
            email: 'test003@gmail.com',
            age: 36,
            isSalaried: true,
            salary: 5223.50
        }


    ]
    connectedCallback(){   //It executes automatically when component loads
        console.log('Contact', this.contact); //when we are using variable in any method/function we need to take help of 'this' operator
        console.log('Contact', JSON.stringify(this.contact));
    }

}