describe('user signs in through welcome page', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/authorize':  { POST: ['postAuthorizeSuccessResponse', 200] }
    });

    page = mountReactAppAt('/')
  });

  it('can sign out', () => {
    clickOn('#toggle-sign-in-form', page);

    let signInButton = page.find('#sign-in-button');
    fillIn('email', { with: 'test@test.com' }, page);
    fillIn('password', { with: 'test-password' }, page);
    simulateIfPresent(signInButton, 'submit');

    setTimeout(() => {
      expect(page.text()).not.toMatch('Sign In');
      clickOn('#sign-out-link', page)

      expect(page.text()).toMatch('Sign In');
      expect(page.text()).not.toMatch('Events');
      expect(page.text()).not.toMatch('Photos');
      done();
    }, 0)
  });
});
