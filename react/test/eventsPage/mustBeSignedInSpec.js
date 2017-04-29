describe('user visits the events page', () => {
  it('must be signed in to view', () => {
    page = mountReactAppAt('/events');

    expect(page.text()).toMatch('Sign In');
    expect(page.text()).not.toMatch('Events');
  });

  it('can view when signed in', () => {
    let user = {
      "first_name": "bob", "last_name": "tester",
      "email": "bob@tester.com", "phone": "123-123-1234",
      "admin": false
    }
    Cookies.set('userData', user);
    page = mountReactAppAt('/events');
    expect(page.text()).toMatch('Event Index Page');
  });
});
