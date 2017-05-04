describe('user visits welcome page', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/authorize':  { POST: ['postAuthorizeSuccessResponse', 200] }
    });

    page = mountReactAppAt('/')
  });

  it('can toggle the sign in form', () => {
    expect(page.text()).toMatch('JesseDavid');
    expect(page.text()).not.toMatch('Fill in your information');

    clickOn('#toggle-sign-in-form', page);
    expect(page.text()).toMatch('Fill in your information');
    expect(page.text()).toMatch('Forget your password');

    clickOn('#toggle-sign-in-form', page);
    expect(page.text()).not.toMatch('Fill in your information');
  });

  it('can sign in and see nav links', done => {
    clickOn('#toggle-sign-in-form', page);
    expect(page.text()).toMatch('Fill in your information');

    let signInButton = page.find('#sign-in-button');
    expect(signInButton.text()).toMatch('Sign In');

    fillIn('email', { with: 'test@test.com' }, page);
    fillIn('password', { with: 'test-password' }, page);
    simulateIfPresent(signInButton, 'submit');

    setTimeout(() => {
      expect(fetch).toHaveBeenCalledWith(
        '/api/v1/authorize',
        {
          credentials: 'same-origin',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user: {
              email: 'test@test.com',
              password: 'test-password'
            }
          })
        }
      )

      expect(page.text()).not.toMatch('Fill in your information');
      expect(page.text()).toMatch('Events');

      let deskTopNav = page.find('.text-nav-links');
      clickOn('#sign-out-link', deskTopNav)
      done();
    }, 0)
  });
});
