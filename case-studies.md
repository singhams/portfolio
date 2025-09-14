---
layout: list
title: Case Studies
permalink: /case-studies/
---

{% assign all_tags = site.case_studies | map: "tags" | join: "," | split: "," | uniq %}
<div class="tag-pills">
  <button class="tag-pill active" data-tag="all">All</button>
  {% for tag in all_tags %}
    <button class="tag-pill" data-tag="{{ tag | strip }}">{{ tag | strip }}</button>
  {% endfor %}
</div>

<div class="wave-divider wave-divider--resume">{% include wave-divider.html %}</div>

<div class="cards case-list">
  {% for cs in site.case_studies %}
    {% assign cs_img = cs.image | default: cs.thumbnail | default: '/assets/images/placeholder-rect.png' %}
    <article class="case-item card" data-tags="{{ cs.tags | join: ',' }}">
      <a href="{{ cs.url | relative_url }}" class="case-link">
        {% if cs_img %}
        <div class="card-thumb" aria-hidden="true">
          <img src="{{ cs_img | relative_url }}" alt="{{ cs.title }} thumbnail">
        </div>
        {% endif %}
        <div class="card-content">
          <h3>{{ cs.title }}</h3>
          {% if cs.excerpt %}
          <p class="card-excerpt">{{ cs.excerpt }}</p>
          {% endif %}
        </div>
      </a>
    </article>
  {% endfor %}
</div>