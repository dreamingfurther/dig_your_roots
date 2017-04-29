describe('user visits the events page', () => {
  it('must be signed in to view', () => {
    page = mountReactAppAt('/vips');

    expect(page.text()).toMatch('Sign In');
    expect(page.text()).not.toMatch("VIPs");
  });

  it('can view when signed in', done => {
    let user = {
      "first_name": "bob", "last_name": "tester",
      "email": "bob@tester.com", "phone": "123-123-1234",
      "admin": false, "id": 123
    }
    Cookies.set('userData', user);
    page = mountReactAppAt('/vips');
    setTimeout(() => {
      expect(page.text()).toMatch("VIPs");
      done();
    }, 0)
  });
});
