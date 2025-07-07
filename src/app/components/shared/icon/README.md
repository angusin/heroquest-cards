# Icon Component

A reusable icon component that provides a collection of SVG icons with consistent styling and sizing options.

## Usage

```html
<!-- Basic usage -->
<app-icon name="download" size="md" color="currentColor"></app-icon>

<!-- With custom classes -->
<app-icon name="heart" size="lg" color="#ff0000" className="mr-2"> </app-icon>

<!-- In a button -->
<button class="btn btn-primary">
  <app-icon name="download" size="sm" className="mr-2"></app-icon>
  Download
</button>
```

## Available Icons

- `download` - Download arrow icon
- `heart` - Heart outline icon
- `heart-filled` - Heart filled icon
- `star` - Star outline icon
- `star-filled` - Star filled icon
- `arrow-right` - Right arrow icon
- `arrow-left` - Left arrow icon
- `close` - X/close icon
- `menu` - Hamburger menu icon
- `search` - Search/magnifying glass icon
- `edit` - Edit/pencil icon
- `delete` - Delete/trash icon
- `share` - Share icon
- `copy` - Copy icon
- `check` - Checkmark icon
- `plus` - Plus icon
- `minus` - Minus icon
- `play` - Play icon
- `pause` - Pause icon
- `settings` - Settings/gear icon
- `save` - Disquette icon

## Size Options

- `xs` - 0.75rem (12px)
- `sm` - 1rem (16px)
- `md` - 1.25rem (20px) - Default
- `lg` - 1.5rem (24px)
- `xl` - 2rem (32px)

## Props

- `name` (required) - The name of the icon to display
- `size` (optional) - Size variant: 'xs' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `color` (optional) - Color of the icon (default: 'currentColor')
- `className` (optional) - Additional CSS classes to apply

## Examples

### Favorite Button

```html
<app-icon name="heart-filled" size="sm" color="currentColor"> </app-icon>
```

### Download Button

```html
<button class="btn btn-primary">
  <app-icon name="download" size="sm" className="mr-2"></app-icon>
  Download
</button>
```

### Navigation Menu

```html
<button class="nav-btn">
  <app-icon name="menu" size="md"></app-icon>
</button>
```
