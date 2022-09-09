import sanitizeHtml from "sanitize-html";

const allowedTags = ["b", "i", "em", "strong", "a", "p", "span"];

export const htmlFilter = (html: string) =>
  sanitizeHtml(html, {
    allowedTags,
    allowedAttributes: {
      a: ["href"],
    },
  });
