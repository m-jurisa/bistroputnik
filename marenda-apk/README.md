# Bistro Putnik Marenda APK

Internal Expo/React Native app for choosing three daily marenda dishes, exporting a branded Croatian or English PDF, and keeping local print history.

## Run Locally

```bash
npm install
npm run start
```

Open the app in Expo Go or press `a` in the Expo terminal to launch Android.

## Build Android APK

Install and log in to EAS if needed:

```bash
npm install -g eas-cli
eas login
```

Build the installable APK with the included preview profile:

```bash
npm run build:android-apk
```

The generated APK can be downloaded from the EAS build link. For a connected Android device, install it with:

```bash
adb install path/to/bistro-putnik-marenda.apk
```

## Project Structure

- `App.js` - simple screen shell and core app flow.
- `src/db/database.js` - SQLite setup, dish CRUD, and print history storage.
- `src/data/seedDishes.js` - starter editable marenda library.
- `src/helpers/signature.js` - order-independent duplicate signature helper.
- `src/helpers/datetime.js` - mobile local date/time and PDF file naming helpers.
- `src/pdf/buildOfferPdf.js` - reusable HR/EN PDF template function.
- `src/components/*` - Home, Dish Library, Print History, and shared UI components.

## Notes

- JavaScript only; no TypeScript files are used.
- Data is local and offline-first through `expo-sqlite`.
- PDF generation uses `expo-print`; sharing/export uses `expo-sharing`.
- The PDF intentionally does not include a header date or website footer.
- The daily picker supports search, selecting existing dishes, adding a new dish, choosing a remembered price, or adding a new price to an existing dish.
- Seed dishes come from the current Bistro Putnik marenda list and remain editable inside the app.
