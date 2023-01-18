import { LightningElement, api, wire, track} from 'lwc';
import getAddress from '@salesforce/apex/addressController.getAddress';
export default class AddressComponent extends LightningElement {
    @api zipCode; 
    @track contactAddresses;
    @track error;
    @track selectedContact; 
    @track selectedIndex;
    @wire (getAddress, {zipCode:'$zipCode'})
    wiredContacts({error, data}) {
        if (data) {
            console.log('DATA', data);
           this.contactAddresses=data;
           this.error=undefined;
        }   else if (error) {
            this.error=error;
            this.contactAddresses=undefined;
        }
    }
    /* we use @api to accept the data from the parent component, meaning- zip code data entered by the user in thhe Zip code component on the address component */
handleButtonClick(event){
    console.log('index', event.target.dataset.index);
    this.selectedIndex=event.target.dataset.index;

}


selectHandler(event) {
    // Prevents the anchor element from navigating to a URL.
    event.preventDefault();

    // Creates the event with the contact ID data.
    const selectedEvent = new CustomEvent('contactselected', { detail: this.contactAddresses[this.selectedIndex] });

    // Dispatches the event.
    this.dispatchEvent(selectedEvent);
   } 
}