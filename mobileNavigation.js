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
    const target = event.target;
    console.log(target);
    if (
      target !== navigationToggle &&
      target.closest('#primary-navigation') === null &&
      navigation.dataset.visible === 'true'
    ) {
      closeNavigation(navigation, navigationToggle);
    }
  });
}

function openNavigation(navigation, navigationToggle) {
  navigation.dataset.visible = true;
  navigationToggle.dataset.expanded = true;
}

function closeNavigation(navigation, navigationToggle) {
  navigation.dataset.visible = false;
  navigationToggle.dataset.expanded = false;
}

export default initMobileNavigation;
