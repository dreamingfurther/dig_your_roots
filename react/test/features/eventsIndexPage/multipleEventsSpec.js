describe('user visits the events page with multiple invitations', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/users/123/events':  { GET: ['getMixedUserEvents', 200] }
    });
  });

  it('sees an RSVP prompt on events not RSVPd to', done => {
    let user = {
      "first_name": "bob", "last_name": "tester",
      "email": "bob@tester.com", "phone": "123-123-1234",
      "admin": false, "id": 123
    }
    Cookies.set('userData', user);
    page = mountReactAppAt('/events');

    setTimeout(() => {
      expect(page.text()).toMatch("Your Events");
      expect(page.text()).toMatch("Ceremony & DinnerRSVP required");
      expect(page.text()).toMatch("Stag Party");
      expect(page.text()).not.toMatch("Boston Party");
      done();
    }, 0)
  });
});
