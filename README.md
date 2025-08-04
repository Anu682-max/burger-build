# 🍔 Burger Builder

A modern, interactive React application for building custom burgers with real-time pricing and beautiful animations.

## 🌟 Features

- **Interactive Burger Builder**: Add and remove ingredients with + and - buttons
- **Real-time Pricing**: See total price update instantly as you add ingredients
- **Beautiful UI**: Modern gradient design with hover effects and animations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dynamic Ingredient Counter**: Track how many of each ingredient you've added

## 🍖 Available Ingredients

- **Meat** - ₮1,500
- **Cheese** - ₮800  
- **Lettuce** - ₮500
- **Tomato** - ₮600
- **Base Bun** - ₮2,000 (included)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Anu682-max/burger-build.git
cd burger-build
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎨 Technologies Used

- **React** - Frontend framework
- **CSS3** - Styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features

## 📱 How to Use

1. **Add Ingredients**: Click the "+" button next to any ingredient to add it to your burger
2. **Remove Ingredients**: Click the "-" button to remove ingredients (disabled when count is 0)
3. **View Price**: See the total price update in real-time at the bottom
4. **Order**: Click "Order Now" when you're satisfied with your burger (disabled when no ingredients added)

## 🎯 Component Structure

```
src/
├── App.js                 # Main application component
├── component/
│   ├── burger.js         # Burger display component
│   ├── burger.css        # Burger styling
│   └── burgercontrol/
│       ├── control.js    # Ingredient controls component
│       └── control.css   # Control styling with animations
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple-blue gradients
- **Hover Animations**: Interactive button effects with rotation and scaling
- **Shimmer Effects**: Light animation effects on buttons
- **3D Button Design**: Modern raised button appearance
- **Color-coded Controls**: Different colors for add/remove actions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Created with ❤️ by **Anu682-max**

---

**Enjoy building your perfect burger!** 🍔✨
