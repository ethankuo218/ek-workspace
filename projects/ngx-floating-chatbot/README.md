# NgxFloatingChatbot

NgxFloatingChatbot is an Angular library that provides a customizable floating chatbot component. It's designed to be easily integrated into Angular applications, offering a user-friendly interface for AI-powered conversations.

## Features

- Floating chat window
- Fullscreen mode
- Customizable icons
- Chat history management
- Real-time streaming responses
- Feedback and regeneration options

## Installation

To install the library, run:

```bash
npm install ngx-floating-chatbot
```

## Usage

1. Import the NgxFloatingChatbotComponent in your Angular component:

```typescript
import { NgxFloatingChatbotComponent } from "ngx-floating-chatbot";
```

2. Add the component to your template:

```html
<ngx-floating-chatbot [config]="chatbotConfig"></ngx-floating-chatbot>
```

3. Configure the chatbot in your component:

```typescript
import { NgxFloatingChatbotConfig } from "ngx-floating-chatbot";

export class AppComponent {
  chatbotConfig: NgxFloatingChatbotConfig = {
    apiUrl: "https://your-api-url.com",
    model: "your-preferred-model",
  };
}
```

## Configuration

The NgxFloatingChatbotComponent accepts the following inputs:

- `config`: NgxFloatingChatbotConfig - Configuration for the chatbot API
- `openIcon`: IconProp - Custom icon for the open state (default: angle-up)
- `closeIcon`: IconProp - Custom icon for the closed state (default: angle-down)

## Customization

You can customize the appearance of the chatbot by overriding the CSS classes defined in the component's SCSS files.

## Dependencies

This library depends on the following packages:

```json
"peerDependencies": {
  "@angular/common": "^17.3.0",
  "@angular/core": "^17.3.0",
  "@fortawesome/angular-fontawesome": "^0.14.1",
  "@fortawesome/fontawesome-svg-core": "^6.2.1",
  "@fortawesome/free-regular-svg-icons": "^6.2.1",
  "@fortawesome/free-solid-svg-icons": "^6.2.1"
},
"dependencies": {
  "@fortawesome/angular-fontawesome": "^0.14.1",
  "@fortawesome/fontawesome-svg-core": "^6.2.1",
  "@fortawesome/free-regular-svg-icons": "^6.2.1",
  "@fortawesome/free-solid-svg-icons": "^6.2.1",
  "ngx-sse-client": "^17.0.1",
  "tslib": "^2.3.0"
}
```

Make sure these dependencies are installed in your project.

## Development

To build the library in watch mode:

```
npm run build-lib
```

To pack the library for local development:

```
npm run pack-lib
```
