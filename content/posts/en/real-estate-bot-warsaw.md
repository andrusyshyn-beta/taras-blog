---
title: "How I Stopped Searching for Apartments Manually: Created an AI Bot for Warsaw Real Estate Without Servers or DevOps"
date: "2026-04-06"
excerpt: "A case study in automation on the Warsaw real estate market: how to build a system in 4 hours that scans OLX, Otodom, and other services, filters spam, and publishes the best deals to Telegram."
category: "AI & Development"
tags: ["n8n", "AI agents", "automation", "real estate", "Warsaw", "Google Sheets"]
featured: true
image: "/images/blog/n8n-real-estate-bot.png"
---

## TL;DR: Key Takeaways in 30 Seconds

- **Problem:** The real estate market in Warsaw 2026 is a \"war\" for every second. Good deals disappear 15-20 minutes after publication.
- **Solution:** An automated scanner bot based on **n8n**, which checks Polish listing services every 5 minutes.
- **Stack:** **Antigravity** (architecture) + **n8n** (logic) + **Google Sheets** (data buffer) + **Telegram API** (notifications).
- **Result:** 100% market coverage without manual page refreshing. No servers, no DevOps, costs — $0 (on trial or basic plans).

---

Warsaw. 2026. Real estate demand is off the charts. When you search for housing the traditional way, you've already lost. While you're scrolling through the OLX feed, professional agencies are already calling the landlords because they have scripts running.

I decided to level the playing field and create my own system that would do all the \"dirty\" work for me. Most importantly — I built it in a single evening without writing a single complex script manually.

---

## 1. Solution Architecture: How It Works

Instead of building a complex backend on Python or Node.js, I used a **\"No-Code Intelligence\"** approach. All the logic is built in the **n8n** visual editor.

**My scanning workflow looks like this:**

1. **Scraping:** The bot goes to **OLX, Otodom, Nieruchomości-online, and Gratka**.
2. **Parsing:** An AI agent (via an n8n node) extracts key data from the listing text: price, area, district, and — most importantly — any deal-breaker flags.
3. **Buffering:** New listings are saved in **Google Sheets**. This is our \"buffer\" that prevents publishing the same notification twice.
4. **Notifications:** If a listing passes all filters, it’s instantly sent to a private Telegram channel for the agency or to my personal chat.

![Screenshot of the bot workflow in n8n](/images/blog/n8n-real-estate-bot.png)

---

## 2. Why This Specific Stack?

Many developers would start setting up Docker containers, buying VPS, and deploying workarounds. I chose the path of [autonomy](/en/blog/anthropic-claude-code-leak).

- **Antigravity AI (AI Assistant):** Helped design the duplicate checking logic and write regular expressions (RegEx) for price parsing.
- **n8n:** This is the heart of the system. It runs on a schedule and manages data flows.
- **Google Sheets:** Acts as the world's simplest database. You can open the sheet and manually delete rows to \"reset\" the bot's memory.
- **Telegram API:** The fastest way to get notifications on your phone.

> **The Solo Developer's Advantage:** I didn't spend a dime on DevOps. The system just works \"in the cloud\" and doesn't require my intervention.

---

## 3. Filtering Spam and \"Noise\"

The real estate market is flooded with fake listings. My bot filters them out by stop-words: \"sold,\" \"no longer available,\" or if the price is significantly lower than market value (which often indicates a scam).

We also set up a filter for Warsaw districts: the bot only looks at Mokotów, Wola, and Śródmieście so as not to waste time on distant options.

*(Looking for similar automations for your business? Join my Telegram [@tsand07](https://t.me/tsand07) — I regularly post new automation case studies there).*

---

## FAQ (Frequently Asked Questions)

**Can I get banned for such scraping?**  
If you make requests every second — yes. But if you do it every 5-10 minutes and use proxies or n8n's built-in HTTP nodes with intelligent delays, the risk is minimal. We only scrape publicly available data.

**How much time did development take?**  
It took about 4 hours from the idea to the first Telegram message. Most of the time was spent configuring parsing for different data formats from 4 different websites.

**How to add new sites to the system?**  
Thanks to the n8n structure, adding a new source is just a matter of copying one node and changing the URL. Everything else (filtering, saving, publishing) remains unchanged.

---

*How do you find information in overheated markets? Manually or have you already delegated it to bots?*
