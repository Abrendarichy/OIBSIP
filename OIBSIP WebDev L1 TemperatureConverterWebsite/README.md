# ThermoConvert 

ThermoConvert is a responsive, real-time web application designed to convert temperatures seamlessly across Celsius (°C), Fahrenheit (°F), and Kelvin (K). Built with modern HTML5, CSS3, and modern JavaScript, it delivers live calculation results with absolute zero validation.

---

##  Key Features

* Real-Time Conversion: Updates results instantly as you type numbers or switch dropdown units.
* Dual Unit Selection: Flexible "From Unit" and "To Unit" dropdown selectors.
* Target Result Highlight: Prominently highlights the selected output unit in a primary banner while showing the full conversion breakdown for all units.
* Validation & Safety Checks: Built-in safeguards preventing inputs below absolute zero ($-273.15^\circ\text{C}$ / $0\text{ K}$).
* Responsive Glassmorphism UI: Modern, mobile-friendly design with subtle glassmorphism styling and Font Awesome vector iconography.

---

##  Built With

* HTML5: Semantic structural markup.
* CSS3: Custom CSS variables, CSS Grid, Flexbox, and backdrop filters for glassmorphism visuals.
* JavaScript (ES6+): Vanilla JavaScript DOM manipulation and real-time event listeners.
* Font Awesome: Iconography for enhanced user interface design.

---

##  Project Structure

```text
ThermoConvert/
├── index.html   # Main HTML markup
├── style.css    # Responsive styles & layout
└── script.js    # Logic for conversions and DOM manipulation