# Lift Belt website — changelog
## 2026-11-07 v1 (built with web-studio template, ocean theme)
- Static site, no backend/auth: pages index, science (principles/software/limits/refs), app (Web Bluetooth viewer + firmware-mirroring demo), animation.
- Decision: no Firebase — BLE goes device -> browser only, nothing stored server-side (privacy; minors/workers data). js/firebase.js is a stub for app.js.
- Theme ocean (pwsh not installed on this Mac so apply-theme.ps1 could not run; other themes need PowerShell).
- Verified: screenshots of index/science/app (light), app demo + dark. NOT verified: real phone width (headless min width), real BLE device, iOS.
- Evidence labels: refs mostly abstract-level (see science.html #refs).

## 2026-11-07 v1.1
- Theme changed to hi-vis orange + sky accent ("safety"; edited tailwind.config/app.js BRAND/tailwind-input by hand, pwsh unavailable; icon redrawn, PNG icons re-rendered).
- Hero figure ported from the presentation animation (detailed worker, vest stripes, hard hat). ?t=ms param renders a frozen frame for screenshots.
