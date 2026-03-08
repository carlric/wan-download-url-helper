# WAN Download URL Helper

Chrome extension to reveal and copy hidden download URLs from ComfyUI missing-model popups via right-click context menu.

---

A minimal Chrome extension (Manifest V3) that reveals the hidden download URL
behind download buttons and icons — especially useful for ComfyUI's
"missing models" popup, where the direct Hugging Face URL is only visible
as a tooltip but cannot be copied natively.

## The Problem

ComfyUI's missing-models popup shows a download icon per model file.
Hovering reveals the Hugging Face URL as a tooltip, but there is no
built-in way to copy it — especially on remote/Linux-hosted instances
like Olares, where the "Copy URL" button was removed in recent frontend updates.

## The Solution

Right-click any download icon or button → **Show download URL** →
a prompt appears with the full URL pre-selected → press Ctrl+C / Cmd+C
to copy it → paste directly into your server-side downloader
(e.g. Olares Model Management → Custom Download).

## Installation

1. Clone or download this repo.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select this folder.

## Usage

1. In ComfyUI, open the **missing models** popup.
2. Hover over a download icon until the tooltip appears.
3. Right-click the icon → choose **Show download URL**.
4. Copy the URL from the prompt with Ctrl+C / Cmd+C.
5. Paste into your server-side downloader.

## Compatibility

- Chrome (Manifest V3)
- Tested with ComfyUI hosted on Olares OS
- Works with any page that exposes URLs via element `title` tooltips

## License

MIT
