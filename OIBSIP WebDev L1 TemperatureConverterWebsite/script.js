window.addEventListener('DOMContentLoaded', () => {
  const tempInput = document.getElementById('temp-input');
  const fromUnitSelect = document.getElementById('from-unit');
  const toUnitSelect = document.getElementById('to-unit');
  const convertBtn = document.getElementById('convert-btn');
  const errorMsg = document.getElementById('error-msg');

  const primaryResult = document.getElementById('primary-result');
  const resCelsius = document.getElementById('res-celsius');
  const resFahrenheit = document.getElementById('res-fahrenheit');
  const resKelvin = document.getElementById('res-kelvin');

  const boxCelsius = document.getElementById('box-celsius');
  const boxFahrenheit = document.getElementById('box-fahrenheit');
  const boxKelvin = document.getElementById('box-kelvin');

  // Event handlers
  if (convertBtn) {
    convertBtn.addEventListener('click', convertTemperature);
  }
  if (tempInput) {
    tempInput.addEventListener('input', convertTemperature);
  }
  if (fromUnitSelect) {
    fromUnitSelect.addEventListener('change', convertTemperature);
  }
  if (toUnitSelect) {
    toUnitSelect.addEventListener('change', convertTemperature);
  }

  function convertTemperature() {
    const rawValue = tempInput.value.trim();
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    hideError();

    if (rawValue === '' || isNaN(rawValue)) {
      resetOutputs();
      return;
    }

    const inputVal = parseFloat(rawValue);
    let celsius;

    // Normalize to Celsius
    if (fromUnit === 'C') {
      celsius = inputVal;
    } else if (fromUnit === 'F') {
      celsius = (inputVal - 32) * (5 / 9);
    } else if (fromUnit === 'K') {
      celsius = inputVal - 273.15;
    }

    // Check Absolute Zero (-273.15°C)
    if (celsius < -273.15) {
      showError('Absolute zero violation: Temperature cannot be below -273.15°C (0 K).');
      resetOutputs();
      return;
    }

    // Perform target calculations
    const fahrenheit = (celsius * (9 / 5)) + 32;
    const kelvin = celsius + 273.15;

    // Display formatted outputs
    resCelsius.textContent = `${celsius.toFixed(2)} °C`;
    resFahrenheit.textContent = `${fahrenheit.toFixed(2)} °F`;
    resKelvin.textContent = `${kelvin.toFixed(2)} K`;

    clearHighlights();
    if (toUnit === 'C') {
      primaryResult.textContent = `${celsius.toFixed(2)} °C`;
      boxCelsius.classList.add('highlight');
    } else if (toUnit === 'F') {
      primaryResult.textContent = `${fahrenheit.toFixed(2)} °F`;
      boxFahrenheit.classList.add('highlight');
    } else if (toUnit === 'K') {
      primaryResult.textContent = `${kelvin.toFixed(2)} K`;
      boxKelvin.classList.add('highlight');
    }
  }

  function clearHighlights() {
    boxCelsius.classList.remove('highlight');
    boxFahrenheit.classList.remove('highlight');
    boxKelvin.classList.remove('highlight');
  }

  function resetOutputs() {
    primaryResult.textContent = '--';
    resCelsius.textContent = '-- °C';
    resFahrenheit.textContent = '-- °F';
    resKelvin.textContent = '-- K';
    clearHighlights();
  }

  function showError(message) {
    errorMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
    errorMsg.style.display = 'flex';
  }

  function hideError() {
    errorMsg.textContent = '';
    errorMsg.style.display = 'none';
  }
});