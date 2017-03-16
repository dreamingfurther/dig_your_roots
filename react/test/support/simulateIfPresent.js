let simulateIfPresent = (wrapper, ...args) => {
  wrapper.exists() ? wrapper.simulate(...args) : expect(wrapper).toBePresent();
};

export default simulateIfPresent;
