describe('Address Book', () => {
    var addressBook,
        thisContact;
    beforeEach(() => {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function(){
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function(){
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    })
});

describe('Async Address Book', () => {
    var addressBook = new AddressBook();

    beforeEach((done) => {
        addressBook.getInitialContacts(() => {
            done();
        });
    });

    it('should grab initial contacts', (done) => {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
})