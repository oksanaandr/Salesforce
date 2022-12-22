import { LightningElement, track} from 'lwc';
export default class ZipCodeComponent extends LightningElement {
    @track zipCodeFromInput;
    @track selectedContact={};
    handleZipCode(event) {
        this.zipCodeFromInput= event.target.value;    
    }
    handleContactSelected(event){
        this.selectedContact = event.detail;
        console.log('ZIP CMP', 'Selected', this.selectedContact)

    }
}