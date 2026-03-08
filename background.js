chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "show-download-url",
    title: "Show download URL",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "show-download-url" || !tab || !tab.id) return;

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: () => {
        // Try the most specific hovered element
        let el = document.querySelector(":hover:last-child") || document.activeElement || null;

        if (!el) {
          const hovered = document.querySelectorAll(":hover");
          if (hovered.length) el = hovered[hovered.length - 1];
        }
        if (!el) {
          alert("No URL with tooltip found on this page.");
          return null;
        }

        // Walk ancestors for title containing http
        let node = el;
        while (node && node !== document.body) {
          if (node.title && node.title.includes("http")) {
            window.prompt("Download URL (Ctrl+C to copy):", node.title);
            return node.title;
          }
          node = node.parentElement;
        }

        // Fallback: last element on page with URL-like title
        const all = document.querySelectorAll("[title*='http']");
        if (all.length) {
          const url = all[all.length - 1].title;
          window.prompt("Download URL (Ctrl+C to copy):", url);
          return url;
        }

        alert("No URL with tooltip found on this page.");
        return null;
      }
    }
  );
});
