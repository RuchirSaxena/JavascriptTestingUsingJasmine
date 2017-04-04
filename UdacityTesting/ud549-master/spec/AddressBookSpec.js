describe('Address Book',function(){
    var addressBook,
        thisContact;
      
    beforeEach(function(){
         addressBook=new AddressBook(),
            thisContact=new Contact(); 
    });
    
    it('should be able to add a contact',function(){
                      
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    
    it("should be able to delete a contact",function(){
       
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
        
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
    
});

/*
Testing Async functions 
done will singnals to the framework that por async function is done doing what it needed to do
and we can continue with the testing,
further we need to signal to the framework that which function relay upon this and we used done
to specify that
*/
describe("Async Adress Book",function(){
     var addressBook=new AddressBook();
    
     beforeEach(function(done){
        addressBook.getIntialContacts(function(done){
            done();
        }); 
     });
    it("should grab initial contacts",function(done){
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});