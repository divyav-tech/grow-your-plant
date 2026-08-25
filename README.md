# 🌱Grow Your Garden — An Interactive Growing Experience

> **Plant a seed. Take care of it. Watch your little garden come to life. 🌸🦋**

Garden is a small interactive web project where you grow a plant through different stages, water it to make flowers bloom, change the weather, and eventually unlock a butterfly.

The project was built to practice **HTML, CSS, JavaScript, DOM manipulation, event handling, and interactive UI design** while creating something simple and playful.

---

## ✨ Features

### 🌱 Grow Your Plant

Start with a seed and progress through multiple growth stages:

`Seed → Sprout → Growing → Stronger → Fully Grown`

Each interaction changes the plant's appearance and updates the button text as the plant grows. The growth stages are created using SVG elements rather than external images.

### 💧 Water the Plant

Once the plant is fully grown, the watering feature becomes available.

Each watering:

* 🌸 Adds more flowers to the plant
* 💧 Shows a small watering feedback animation
* 🔒 Becomes locked after the maximum number of waterings

The project uses a simple progression system where four watering interactions are required to fully unlock the final feature.

### 🌸 Growing Flowers

Flowers gradually appear as the plant is watered, making the garden feel more alive instead of revealing everything at once.

### ☀️🌧️ Dynamic Weather

Switch between clear and rainy weather with a button.

The weather changes:

* Sky appearance
* Sun visibility
* Cloud color
* Overall background gradient

The weather state is handled dynamically with JavaScript and CSS classes.

### 🦋 Unlock the Butterfly

The butterfly is the final reward.

It becomes available only when:

* 🌱 The plant is fully grown
* 💧 The plant has been watered the required number of times

After unlocking it, a small animated butterfly appears above the plant.

---

## 🛠️ Built With

* **HTML5** — Page structure and SVG illustrations
* **CSS3** — Layout, gradients, buttons, animations, and weather themes
* **JavaScript** — DOM manipulation, event listeners, growth logic, feature unlocking, and interactions
* **SVG** — Custom plant, flowers, sun, clouds, pot, and butterfly illustrations

The plant and garden visuals are created directly with SVG elements in the HTML rather than relying on external image assets.

---

## 🎮 How It Works

The project follows a simple progression system:

```text
🌱 Plant a Seed
       ↓
🌾 Let it Sprout
       ↓
🌿 Help it Grow
       ↓
🌳 Grow Stronger
       ↓
🌸 Grow Fully
       ↓
💧 Water the Plant
       ↓
🌸 Flowers Bloom
       ↓
🦋 Butterfly Unlocked
```

The main progression is controlled through JavaScript state variables such as `stage` and `waterClicks`.

---

## 🎨 Design

The interface uses a playful garden-inspired visual style with:

* Soft sky and grass gradients
* Green plant-themed colors
* Rounded feature cards
* Interactive buttons
* Small visual feedback animations
* A responsive card layout
* SVG-based illustrations

The main layout is centered around the garden, with feature cards positioned above it.

The butterfly also has a subtle floating animation to make the final interaction feel more rewarding.

---

## 📂 Project Structure

```text
garden/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Contains the garden interface, feature cards, buttons, and SVG illustrations.

### `style.css`

Handles the visual design, layout, weather themes, button states, and animations.

### `script.js`

Controls plant growth, watering, flower progression, weather switching, and butterfly unlocking.

---

## 🚀 Running the Project

No frameworks or installations are required.

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Start growing your plant! 🌱

---

## 🧠 What I Practiced

This project helped me practice:

* DOM selection and manipulation
* `addEventListener()`
* Conditional logic
* Managing application state
* Updating UI based on state
* CSS classes with JavaScript
* Dynamic SVG elements
* Button states and disabled elements
* CSS animations
* Creating interactive experiences with vanilla JavaScript

---

## 🌷 Future Improvements

Some ideas I could add in the future:

* 💾 Save garden progress using `localStorage`
* 🌻 Add different types of plants
* 🌈 Add more weather conditions
* 🐝 Add more garden creatures
* 🌙 Add a day/night cycle
* 🎵 Add optional ambient garden sounds
* 🌿 Add multiple pots or garden areas

---

## 💻 Made With Curiosity & Code

This project was created as a small experiment in making a **simple web page feel interactive and alive** using just HTML, CSS, and JavaScript.


