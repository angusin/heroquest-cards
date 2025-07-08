# Carousel Component

A simple, lightweight carousel component for displaying cards in a horizontal scrollable container.

## Features

- Simple horizontal scrolling with smooth animation
- Basic navigation buttons (left/right)
- Responsive design
- Customizable title
- Clean, minimal implementation

## Usage

```html
<app-carousel [cards]="yourCardsArray" [title]="'Your Title'"> </app-carousel>
```

## Input Properties

- `cards: Card[]` - Array of card objects to display in the carousel
- `title: string` - Title displayed above the carousel (default: 'Featured Cards')

## Navigation

- **Left button**: Scrolls left by 300px with smooth animation
- **Right button**: Scrolls right by 300px with smooth animation
- **Touch/Scroll**: Users can also scroll manually on touch devices

## Responsive Behavior

The carousel automatically adjusts card width based on screen size:

- Mobile (< 640px): 85% width
- Small (≥ 640px): 50% width (2 cards visible)
- Medium (≥ 768px): 33.33% width (3 cards visible)
- Large (≥ 1024px): 25% width (4 cards visible)
- Extra Large (≥ 1280px): 20% width (5 cards visible)

## Dependencies

- `CardContainerComponent` - For rendering individual cards
- `CommonModule` - For Angular directives like `*ngFor`
