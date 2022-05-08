function openNavigation(navigation, navigationToggle) {
  // eslint-disable-next-line no-param-reassign
  navigation.dataset.visible = true;
  // eslint-disable-next-line no-param-reassign
  navigationToggle.dataset.expanded = true;
}

function closeNavigation(navigation, navigationToggle) {
  // eslint-disable-next-line no-param-reassign
  navigation.dataset.visible = false;
  // eslint-disable-next-line no-param-reassign
  navigationToggle.dataset.expanded = false;
}

function initMobileNavigation() {
  const navigationToggle = document.querySelector('.mobile-nav-toggle');
  const navigation = document.querySelector(
    `#${navigationToggle.dataset.target}`
  );
  navigationToggle.addEventListener('click', () => {
    if (navigationToggle.dataset.expanded === 'false') {
      openNavigation(navigation, navigationToggle);
    } else {
      closeNavigation(navigation, navigationToggle);
    }
  });

  document.addEventListener('click', (event) => {
    const { target } = event;
    if (
      target !== navigationToggle &&
      target.closest('#primary-navigation') === null &&
      navigation.dataset.visible === 'true'
    ) {
      closeNavigation(navigation, navigationToggle);
    }
  });
}

export default initMobileNavigation;
