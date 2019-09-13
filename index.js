function systemAppearance(darkModeListener, lightModeListener, hasNoSupportListener) {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
  const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
  const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && darkModeListener())
  window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && lightModeListener())

  if (isDarkMode) darkModeListener()
  if (isLightMode) lightModeListener()
  if (isNotSpecified || hasNoSupport) {
    hasNoSupportListener();
  }
}

export default systemAppearance;
