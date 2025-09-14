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

<div class="wave-divider" aria-hidden="true">
  <svg viewBox="0 0 1200 60" preserveAspectRatio="none" width="100%" height="60" role="img" aria-hidden="true">
    <!-- stroked, smooth double-curve; subtle (low opacity) -->
    <path d="M0 30 C200 10 400 50 600 30 C800 10 1000 50 1200 30"
          fill="none"
          stroke="var(--primary-color)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-opacity="0.16" />
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

<!-- Logo carousel: sources images from assets/images/client-logos -->
<div class="wave-divider" aria-hidden="true">{% include wave-divider.html %}</div>

<section aria-label="Client logos" class="logo-carousel-wrapper">
  <div class="logo-carousel" role="list" aria-live="off">
    <div class="logo-track">
      {% assign logos = site.static_files | where_exp: "f", "f.path contains 'assets/images/client-logos'" | sort: 'path' %}
      {% for f in logos %}
        <div class="logo" role="listitem">
          <img src="{{ f.path | relative_url }}" alt="{{ f.name | split:'.' | first | replace:'-',' ' }}" loading="lazy">
        </div>
      {% endfor %}
    </div>
  </div>
</section>