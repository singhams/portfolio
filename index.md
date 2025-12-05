---
layout: home
title: Home
---

<header class="hero">
  <h1>Sara Ingham</h1>
  <h2>UX Researcher & Information Architect</h2>
  <p>I work at the intersection of UX research, information architecture, and complex content systems. My work ranges from understanding how people onboard into creative tools to modeling the structures behind large-scale digital ecosystems. I’ve led research and IA projects for teams at Adobe and Intel, and I’m known for cutting through ambiguity, surfacing what actually matters, and aligning stakeholders with just the right amount of evidence.</p>
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
{% assign featured = site.case_studies | where: "featured", true | slice: 0,3 %}
{% for cs in featured %}
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

<section aria-label="Client logos" class="logo-gallery-wrapper">
<h2>Companies I've worked for (either directly or as a consultant at Factor)</h2>
  <div class="logo-gallery">
    {% assign logos = site.static_files | where_exp: "f", "f.path contains 'assets/images/client-logos'" | sort: 'path' %}
    {% for f in logos %}
      <div class="logo-item">
        <img src="{{ f.path | relative_url }}" alt="{{ f.name | split:'.' | first | replace:'-',' ' }}" loading="lazy">
      </div>
    {% endfor %}
  </div>
</section>
