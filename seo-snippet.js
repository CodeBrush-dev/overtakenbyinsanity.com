// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.overtakenbyinsanity.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.overtakenbyinsanity.com/","title_tag":"Mental illness true family story | Killifer and Martin","meta_description":"A powerful mental health book about growing up with mental illness in the family. A true family story by sisters Louise Killifer and Lois Martin."},{"page_url":"https://www.overtakenbyinsanity.com/home","title_tag":"Coping with mental illness in family | Killifer and Martin","meta_description":"Contact authors Louise Killifer and Lois Martin of this true family story on coping with mental illness and complex family dynamics."},{"page_url":"https://www.overtakenbyinsanity.com/book-inner","title_tag":"Mental health book true family story | Killifer and Martin","meta_description":"Overtaken by Insanity is a mental health book about growing up with mental illness, family dynamics, and coping with a mentally ill sibling. Book reviews included."},{"page_url":"https://www.overtakenbyinsanity.com/copy-of-books","title_tag":"Book trailer mental illness story | Killifer and Martin","meta_description":"Watch the book trailer for Overtaken by Insanity, a mental health book about a true family story, growing up with mental illness, and complex family dynamics."},{"page_url":"https://www.overtakenbyinsanity.com/copy-of-home","title_tag":"Author bio Louise Killifer Lois Martin | Killifer and Martin","meta_description":"Read the author bio of sisters Louise Killifer and Lois Martin, co-authors of a mental health book sharing their true family story of growing up with mental illness."}],"keywords":["mental illness","family dynamics","mental health book","growing up with mental illness","book reviews","author bio","Louise Killifer","Lois Martin","coping with mental illness","true family story"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://www.overtakenbyinsanity.com/#book",
  "name": "Overtaken by Insanity",
  "author": [
    {
      "@type": "Person",
      "name": "Louise Killifer"
    },
    {
      "@type": "Person",
      "name": "Lois Martin"
    }
  ],
  "url": "https://www.overtakenbyinsanity.com/",
  "image": "https://static.wixstatic.com/media/c46be2_5ab89e1c036244d580a243ac2111639d%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/c46be2_5ab89e1c036244d580a243ac2111639d%7Emv2.png",
  "description": "A true account by sisters Louise Killifer and Lois Martin, who grew up with a mentally ill older sister, Jane, and a mother of questionable sanity. The book follows their antagonized lives as they struggle to live normally while dealing with Jane's mental illness, bullying, and erratic behavior, especially after their mother's death when avoiding Jane was no longer possible.",
  "inLanguage": "en",
  "publisher": {
    "@type": "Organization",
    "name": "Ewings Publishing, LLC"
  },
  "copyrightYear": "2023",
  "workExample": {
    "@type": "Book",
    "name": "Overtaken by Insanity",
    "bookFormat": "https://schema.org/EBook"
  },
  "review": [
    {
      "@type": "Review",
      "reviewBody": "I found your book very enlightening and informative. I grew up with a mentally ill family member and now have bipolar relative. Both are very intelligent people, but not always in touch with reality. It's a topic that isn't discussed outside the family. So many of us think we are the only ones. Your book dispelled this and gave us a sense of peace and eased the guilt we felt. Thank you for writing this book."
    },
    {
      "@type": "Review",
      "reviewBody": "I finished the book about your family and the incredibly difficult journey each of you had with your sister, Jane. Jane and I were born in the same year. I vividly remember the stigma two families in our small town experienced due to the mental illness of family members. Unfortunately, state institutions were usually filled to capacity or the family refused to help. Either way, every single member of the families were left to their own resources because everything centered around that one incredibly different individual. Your story is overwhelmingly revealing of Jane's downward spiral into mental illness. As frustrating and difficult as it was, your courageous journey is inspiring and, quite frankly, amazing."
    },
    {
      "@type": "Review",
      "reviewBody": "Fans of books like A Beautiful Mind or The Quiet Room will appreciate this account of people living with schizophrenia and the loved ones that are affected by their mental Illness. Additionally, this would resonate with readers who liked Jeannette Walls’ The Glass Castle about her eccentric and emotionally unstable family.",
      "author": {
        "@type": "Person",
        "name": "Ella Vincent"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pacific Book Review"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "Killifer and Martin are direct, detailed, and painstakingly honest—requirements for any interesting autobiography. (...) there are no easy answers for dealing with mentally imbalanced loved ones. Still, this sometimes painful retelling of the family’s struggles is a gift to society because it sheds light on a subject not often discussed.",
      "author": {
        "@type": "Person",
        "name": "Toby Berry"
      },
      "publisher": {
        "@type": "Organization",
        "name": "The US Review of Books"
      }
    },
    {
      "@type": "Review",
      "reviewBody": "It is not an easy book to read—or, no doubt, to write. But it is a well-crafted story that will be deeply touching to many readers as you follow two girls going from childhood to adulthood trying to navigate the difficult and complex situations that Jane puts them in . . . As Louise stated, ‘You can’t fix the situation and you can’t feel guilty. You just have to go with it and do your best.’",
      "author": {
        "@type": "Person",
        "name": "Carole Howard"
      },
      "publisher": {
        "@type": "Organization",
        "name": "The Pagosa Springs (Colorado) SUN"
      }
    }
  ],
  "potentialAction": {
    "@type": "BuyAction",
    "target": "https://www.overtakenbyinsanity.com/book-inner",
    "name": "Get your copy now"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
