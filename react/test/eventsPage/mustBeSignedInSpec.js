describe('user visits the events page', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/users/123/events':  { GET: ['getUserEventsSuccessResponse', 200] }
    });
  });

  it('must be signed in to view', () => {
    page = mountReactAppAt('/events');

    expect(page.text()).toMatch('Sign In');
    expect(page.text()).not.toMatch('Events');
  });

  it('can view when signed in', done => {
    let user = {
      "first_name": "bob", "last_name": "tester",
      "email": "bob@tester.com", "phone": "123-123-1234",
      "admin": false, "id": 123
    }
    Cookies.set('userData', user);
    page = mountReactAppAt('/events');
    setTimeout(() => {
      expect(page.text()).toMatch("You're Events!");
      expect(page.text()).toMatch("Stag Party");
      expect(page.text()).toMatch("Ceremony & Dinner");
      done();
    }, 0)
  });
});
