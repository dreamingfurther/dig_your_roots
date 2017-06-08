describe('user visits the events page with multiple invitations', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/users/123/events':  { GET: ['getMixedUserEvents', 200] },
      '/api/v1/email_confirmation/y5GZaeGU':  { GET: ['getEmailConfirmationWithoutPlusOneWithFood', 200] }
    });
  });

  it('can navigate to RSVP page on events not RSVPd to', done => {
    let user = {
      "first_name": "bob", "last_name": "tester",
      "email": "bob@tester.com", "phone": "123-123-1234",
      "admin": false, "id": 123
    }
    Cookies.set('userData', user);
    page = mountReactAppAt('/events');

    setTimeout(() => {
      expect(page.text()).toMatch("Your Events");
      clickOn('#event-45', page) // ID for the Ceremony & Dinner to click

      setTimeout(() => {
        expect(page.text()).toMatch('Will you join us?')
        expect(page.text()).toMatch('Ceremony & Dinner')
        done();
      }, 0)
    }, 0)
  });

  it('can navigate to the event page on events RSVPd to', done => {
    let user = {
      "first_name": "bob", "last_name": "tester",
      "email": "bob@tester.com", "phone": "123-123-1234",
      "admin": false, "id": 123
    }
    Cookies.set('userData', user);
    page = mountReactAppAt('/events');

    setTimeout(() => {
      expect(page.text()).toMatch("Your Events");
      clickOn('#event-43', page) // ID for the Stag Party to click

      setTimeout(() => {
        expect(page.text()).toMatch('Address')
        expect(page.text()).toMatch('Logistics')
        expect(page.text()).toMatch('Itinerary')
        expect(page.text()).toMatch('Dress Code')
        expect(page.text()).toMatch('Stag Party')
        done();
      }, 0)
    }, 0)
  });
});
