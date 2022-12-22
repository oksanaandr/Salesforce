public with sharing class addressController {
 @AuraEnabled(cacheable=true)
 public static List<Contact> getAddress(String zipCode){
    List <Contact> contactList= new List<Contact>();
    contactList = [SELECT FirstName, LastName, MailingCity, MailingStreet, MailingState, MailingCountry
                   From Contact
                   Where MailingPostalCode = :zipCode];
    return contactList;

 }
}