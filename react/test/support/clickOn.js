import simulateIfPresent from './simulateIfPresent';

let clickOn = (clickTarget, wrapper) => {
  simulateIfPresent(wrapper.find(clickTarget), 'click', { button: 0 });
}

export default clickOn;
