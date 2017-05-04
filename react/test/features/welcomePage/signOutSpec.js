describe('user signs in through welcome page', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/authorize':  { POST: ['postAuthorizeSuccessResponse', 200] }
    });
  });

  it('can sign out', done => {
    page = mountReactAppAt('/')
    clickOn('#toggle-sign-in-form', page);

    let signInButton = page.find('#sign-in-button');
    fillIn('email', { with: 'test@test.com' }, page);
    fillIn('password', { with: 'test-password' }, page);
    simulateIfPresent(signInButton, 'submit');

    setTimeout(() => {
      expect(page.text()).not.toMatch('Sign In');
      let deskTopNav = page.find('.text-nav-links');
      clickOn('#sign-out-link', deskTopNav)

      expect(page.text()).toMatch('Sign In');
      expect(page.text()).not.toMatch('Events');
      done();
    }, 0)
  });

  it('redirects to home page', () => {
    let user = {
      "first_name": "bob", "last_name": "tester",
      "email": "bob@tester.com", "phone": "123-123-1234",
      "admin": false
    }
    Cookies.set('userData', user);
    page = mountReactAppAt('/events');
    let deskTopNav = page.find('.text-nav-links');
    clickOn('#sign-out-link', deskTopNav)

    expect(page.text()).not.toMatch('Event Index Page');
    expect(page.text()).toMatch('Sign In');
  })
});
