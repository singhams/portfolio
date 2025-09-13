---
layout: home
title: Home
---

<header class="hero">
  <h1>Sara Ingham</h1>
  <h2>UX researcher with experience in information architecture, taxonomy, ontology, and metadata modeling.</h2>
  <p>I specialize in uncovering insights that improve the usability and governance of complex, data-rich systems. I’ve led end-to-end research for organizations like Adobe and Intel, bridging technical and business perspectives to help teams focus on what truly matters and act on it with the right evidence.</p>
  <a href="{{ '/resume' | relative_url }}" class="btn">View Resume</a>
</header>

<div class="wave-divider">
<svg viewBox="0 0 1200 60" preserveAspectRatio="none" width="100%" height="60">
  <path d="M0,30 Q300,60 600,30 T1200,30" fill="var(--accent-color)" stroke="var(--accent-color)" stroke-width="4"/>
</svg>
</div>

## Featured Case Studies

<div class="cards">
{% for cs in site.case_studies %}
  <div class="card">
    <a href="{{ cs.url | relative_url }}">
      {% if cs.image %}
      <img src="{{ cs.image | relative_url }}" alt="{{ cs.title }} screenshot">
      {% endif %}
      <h3>{{ cs.title }}</h3>
      {% if cs.excerpt %}
      <p>{{ cs.excerpt }}</p>
      {% endif %}
    </a>
  </div>
{% endfor %}
</div>

