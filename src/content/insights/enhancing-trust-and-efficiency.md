---
title: "Enhancing Trust and Efficiency: A UX Case Study for Solar Channel Partners"
description: "How iterative, user-centered UX design streamlined document submission processes, significantly boosting trust and efficiency among channel partners."
pubDate: 2025-03-24T00:00:00.000Z
heroImage: "/images/insights/cover-trust.webp"
category: "case-study"
tags: ["UX Design", "User-Centered Design", "Case Study", "User Flows"]
author: "Jeff Scotti"
featured: true
---

At Bright, Inc., channel partners, often brokers with deep community ties, are vital to driving growth. However, friction in our document submission and validation workflows created significant trust gaps and inefficiencies. 

This case study explores how we tackled these issues using iterative, user-centered UX design, resulting in a transformed experience that empowered our partners and accelerated our operations.

## The Challenge: Friction That Undermines Trust

Partners like **Rafa**, a former real estate agent turned solar broker, rely on our platform to manage deals and submit critical documents. But the experience was riddled with pain points:

* Frequent **document rejections** due to unclear requirements
* **Manual validation delays** and lack of immediate feedback
* Overwhelming, **non-intuitive interfaces**
* Communication gaps that **damaged client trust**
* No clear visibility into who owns each step of the process

The result? Delays, anxiety, and lost deals — for both our partners and our company.

## Meet Rafa: The Channel Partner Persona

![Rafa Martinez, a 35-year-old solar energy broker who transitioned from real estate](/images/portfolio/ux/personas/persona-rafa-martinez.png)

Rafa is 35, a family man who recently transitioned from real estate to solar energy brokerage. He's:

* Tech-savvy, driven, and client-focused
* Motivated by trust, transparency, and financial stability
* Frustrated by unclear processes, delayed updates, and payment uncertainty

He embodies our typical channel partner and was central in shaping our UX decisions.

## Research & Discovery

Our UX team conducted:

* **Heuristic evaluations**
* **In-depth partner interviews**
* **Usability testing on our checklist and upload tools**
* **Analysis of assignment and document workflows**

### Key Findings:

* Cognitive overload from dense dashboards
* Ambiguity in document instructions led to ~3 rejections per lead
* Lack of clarity around task ownership
* Communication breakdowns during async steps
* Inability to track submission status or receive instant feedback

## Strategic UX Solutions

We focused on three core solutions and an iterative rollout approach:

### 1. Interactive Contextual Checklist

* Real-time validation for each checklist item
* "Help Needed?" tooltips and a guided tour offering clear document rules and submission examples
* Deep linking to each item step with state-saving
* Clear role indicators (who does what: partner vs. Solar Company)

🎯 **Outcome:** Fewer rejections, faster submissions, reduced partner frustration

### 2. Centralized Document Collection Portal

* Consolidated view of all pending documents
* Auto-validation for common errors (blurry uploads, mismatched addresses)
* Option for partners to delegate uploads to customers
* Compatible with both web and mobile

🎯 **Outcome:** Empowered partners and end-users, accelerated collection timelines

### 3. Async Upload Wizard with Progress Control

* Step-by-step wizard with visual progress indicators
* Support for skipping irrelevant steps via conditional logic
* Back/forward navigation with persistent input states
* Discrete URLs per step (deep-linkable for follow-ups)

🎯 **Outcome:** Simplified navigation for long processes, preserved context, reduced dropout

## Iterative Design: From Co-Mode to Standalone

To address partner frustrations without disrupting current workflows, we adopted an **iterative strategy** that allowed us to introduce improvements gradually — balancing innovation with stability.

### Phase 1: Co-Mode — <a href="/projects#project-automated-cfe-bill" target="_blank">Guided Mode</a> Meets Power Mode

We launched our enhancements by introducing a **dual-mode experience**:

* **Power Mode**: The original checklist interface that gives advanced users full control and flexibility  
![Power Mode UI Example](/images/portfolio/bright/automated_cfe_bill/desktop/14-checklist-mode-toggle.png)

* **Guided Mode**: A simplified, step-by-step wizard ideal for newer or less tech-savvy users
![Guided Mode UI Example](/images/portfolio/bright/automated_cfe_bill/desktop/1-enter-rpu-form.png)

This side-by-side model allowed us to gather live feedback while minimizing resistance to change. It also ensured continued productivity for experienced partners who preferred the flexibility of Power Mode.

🎯 **Short-term vision:** Deliver **incremental improvements** by building individual Guided Mode steps and embedding them within their corresponding checklist items. This meant:

* Partners could complete tasks in a structured way without leaving the familiar UI  
* Engineering and design teams could test new flows in real usage conditions  
* Each release added real value without overhauling the system all at once

### Phase 2: Towards a Self-Contained Standalone UI

Our long-term goal is to evolve Guided Mode into a fully independent, standalone UI. This reimagined interface departs from the traditional checklist framework and includes:

#### ✅ Right Sidebar Navigation

A persistent sidebar highlights each step of the process, clearly showing progress and allowing users to navigate intuitively. Steps feature:

* **Sub-step indicators** for granular progress tracking  
* **Status badges** that reflect real-time states:
  * ✅ Complete  
  * 🔄 In Progress  
  * ⚠️ Error  
  * 🟢 Active  

#### ✅ Integrated Support Resources

Each step contains easily accessible help content:

* **FAQs and contextual guidance** within the step  
* **Live support options** like in-app chat or WhatsApp integration  
* Eliminates the need to switch platforms or rely on email threads

#### ✅ Self-Contained Experience

The standalone UI will not inherit global navigation or headers (like the "Ops" header) from the main app. Instead:

* It opens in a new browser tab via a CTA from partner platforms  
* It creates a focused, distraction-free environment specifically designed for document workflows  
* Visual clutter is reduced, creating a cleaner experience with a singular purpose

By designing the rollout in manageable, testable pieces, we de-risked the transition while maximizing value delivery. Each improvement was astep toward a more scalable, partner-friendly future, deeply informed by real-world usage patterns and partner feedback.

## Detailed UX Flow: Assignment Lifecycle

<div class="pdf-viewer-container">
  <div class="pdf-wrapper">
    <object data="/images/portfolio/bright/checklists/checklist_assignments_ux_flow.pdf" type="application/pdf" width="100%" height="100%" class="pdf-object">
      <p>
        It appears your browser doesn't support embedded PDFs.
        <a href="/images/portfolio/bright/checklists/checklist_assignments_ux_flow.pdf" target="_blank">Click here to download the PDF</a>.
      </p>
    </object>
  </div>
</div>

<style>
  .pdf-viewer-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: var(--container-bg-color);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .pdf-wrapper {
    width: 100%;
    height: 600px;
    overflow: auto;
    display: flex;
    justify-content: center;
    background-color: #525659;
  }

  .pdf-object {
    border: none;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .pdf-wrapper {
      height: 400px;
    }
  }
</style>


As part of our effort we bolstered internal and external communication channels while increasing task visbility and responsibility by designing an assignments feature. We incorporated this experience into the existing checklists app to create a closed loop with full visibility:

1. Assigner creates assignment and optionally adds notes
2. Slack/WhatsApp/Web Push Notification &amp; in-app notifications alert the assignee
3. Assignee marks task complete
4. Assigner reviews and approves (or reassigns with feedback)
5. Checklist item status updates automatically

🎯 **Result:** Clear ownership, reduced miscommunication, smoother workflow

## Real-World Pain Points We Solved

📌 **Before:** Partners uploading expired or blurry documents, unsure why they were rejected  
✅ **After:** Immediate feedback ("This CFE bill is over 120 days old. Please upload a recent one.")

📌 **Before:** Confusion over who owns which part of the process  
✅ **After:** Step owners clearly labeled: "Partner" vs. "Solar Company"

📌 **Before:** Rework after submitting mismatched addresses or incomplete IDs  
✅ **After:** Auto-checks with contextual popups: "Reminder: Property address must match CFE bill."

📌 **Before:** High-friction support via email/Slack threads  
✅ **After:** Always-available support line + checklist-integrated guidance​

## Results & Outcomes

| Metric                               | Before | After   |
|--------------------------------------|--------|---------|
| Avg. document rejections per lead    | ~3     | <1      |
| Partner satisfaction (survey)        | 62%    | 91%     |
| Avg. time to complete upload flow    | 3.2 d  | 1.4 d   |
| % of leads dropped due to friction   | 27%    | 11%     |
| Support tickets about uploads        | High   | Low     |

## Conclusion

Through a deeply user-centered, iterative UX strategy, we:

* Empowered partners like Rafa to succeed
* Drastically reduced operational friction
* Rebuilt trust and transparency
* Positioned Bright, Inc. as a partner-focused market leader

What made this transformation particularly impactful wasn’t just the features we delivered, it was how we delivered them. By prioritizing incremental, iterative design, we were able to test concepts early, gather feedback continuously, and avoid costly missteps. This approach ensured that our engineering investments were tightly aligned with real-world partner needs, delivering tangible improvements with every release.

At the same time, we kept a clear eye on the long-term vision: a fully reimagined partner experience that could scale with our business. Rather than rushing toward that end-state, we used strategic waypoints, like the Guided vs. Power Mode toggle,  to ease the transition. This reduced change resistance, respected our partners' existing workflows, and gave our internal teams space to learn and adapt as we built.

For money-conscious startups, this kind of design discipline is critical. Good UX isn't just a nice-to-have — it's a force multiplier. It minimizes waste, accelerates adoption, reduces support load, and builds trust faster than any marketing campaign can, and enhancing trust was at the heart of our effort on this project. Every hour spent understanding user pain points and validating ideas paid dividends in engineering efficiency and business results. We don't want to become a feature factory, we want to deliver impactful experiences that help our company achieve its growth goals.

Ultimately, this case study shows that investing in UX is one of the smartest bets a startup can make, not just to improve usability, but to unlock sustainable growth through stronger relationships and smarter operations.
