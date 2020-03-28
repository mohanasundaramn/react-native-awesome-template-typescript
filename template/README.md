### 📝 Application Architecture Boilerplate

---

### 📁 Directory Tree

```bash
├── App.tsx
├── README.md
├── __tests__
│   └── App-test.tsx
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── src
│   ├── components
│   │   ├── centre
│   │   │   └── index.tsx
│   │   ├── loader
│   │   │   └── index.tsx
│   │   └── offline
│   │       └── index.tsx
│   ├── models
│   │   ├── failure.ts
│   │   ├── postModel.ts
│   │   ├── postStoreModels.ts
│   │   ├── reducerState.ts
│   │   └── uiStoreModel.ts
│   ├── redux
│   │   ├── helpers
│   │   │   └── loader.ts
│   │   ├── posts
│   │   │   ├── postAction.ts
│   │   │   ├── postEvents.ts
│   │   │   └── postReducer.ts
│   │   ├── store.ts
│   │   └── ui
│   │       ├── uiAction.ts
│   │       ├── uiEvents.ts
│   │       └── uiReducer.ts
│   ├── routes
│   │   ├── router.ts
│   │   └── routes.ts
│   ├── services
│   │   └── postService.ts
│   ├── themes
│   │   ├── appTheme.ts
│   │   └── colors.ts
│   ├── utils
│   │   ├── axiosError.ts
│   │   └── failure.ts
│   └── views
│       ├── detailView
│       │   ├── components
│       │   │   └── postList.tsx
│       │   └── index.tsx
│       ├── homeView
│       │   └── index.tsx
│       └── rootNavigator.tsx
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```

### 📱 Views

- View should always be dump.
- Each is view is new screen.
- View should be always simple.
- If view structure getting bigger break them into reusable components and put in `components` for folder of view.
- Only view specific components should be available in `Views` => `components` directory.
- Common `components` are placed under root level component directory.

---

### 🚒 Services

- This the `outermost layer`.
- It doesn't in care about `UI` or `State`.
- Easy to test.

#### what can be added as service?

- HTTP calls.
- Local Data source.
- Background Geolocation setup.
- Analytics.
  etc...

---

### 👨 Models

- Data classes/Interface can be in models.

---

### Redux

- Each functionality should have their own redux folder in the name of their functionality.

```bash
posts
  ├── postAction.ts
  ├── postEvents.ts
  └── postReducer.ts
```

- When UI perform some actions based on the action events are dispatched stores gets updated accordingly.

---

### 🎨 Themes

- Consists of basic dark and light themes.
- Can be extended to create custom themes based on requirement

---

### 🚌 Components

- Reusable common components can be added here.

---

### ⚒️ Utils

- All the utilities and helpers created under this directory
