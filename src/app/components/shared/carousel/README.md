# Carousel Component

A reusable carousel component for displaying cards in a horizontal scrollable container with navigation controls.

## Features

- Responsive design with different card counts based on screen size
- Smooth scrolling animation
- Navigation buttons (previous/next)
- Customizable title
- Automatic slide calculation based on visible cards

## Usage

```html
<app-carousel [cards]="yourCardsArray" [title]="'Your Title'"> </app-carousel>
```

## Input Properties

- `cards: Card[]` - Array of card objects to display in the carousel
- `title: string` - Title displayed above the carousel (default: 'Featured Cards')

## Responsive Behavior

The carousel automatically adjusts the number of visible cards based on screen size:

- Mobile (< 640px): 1 card (85% width)
- Small (≥ 640px): 2 cards
- Medium (≥ 768px): 3 cards
- Large (≥ 1024px): 4 cards
- Extra Large (≥ 1280px): 5 cards

## Dependencies

- `CardContainerComponent` - For rendering individual cards
- `CommonModule` - For Angular directives like `*ngFor`
