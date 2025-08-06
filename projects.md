---
layout: default
title: "Projects"
description: "A showcase of data science and machine learning projects by Marco Vieto Vega, demonstrating skills in machine learning, analytics, and visualization."
---

<div class="projects-page">

<section class="page-header" style="background: url('{{ '/assets/img/projects-bg.jpg' | relative_url }}') center/cover no-repeat;">
  <div class="container">
    <h1 class="page-title">My Projects</h1>
    <p class="page-subtitle">A collection of data science and machine learning projects showcasing my skills and expertise.</p>
  </div>
</section>

<section class="projects-section">
  <div class="container">
    <div class="projects-grid">
      {% for project in site.featured_projects %}
      <div class="project-card">
        <div class="project-image">
          <img src="{{ '/assets/img/' | append: project.image | relative_url }}" alt="Project image for {{ project.title }}" loading="lazy">
          <div class="project-tags project-tags-overlay">
            {% for tag in project.tags %}
            <span class="tag tag-small">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
        <div class="project-content">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-links">
            {% if project.demo %}
              <a href="{{ project.demo }}" target="_blank" class="btn-project btn-primary">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            {% endif %}
            {% if project.github %}
              <a href="{{ project.github }}" target="_blank" class="btn-project btn-secondary">
                <i class="fab fa-github"></i> View Code
              </a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="skills-section">
  <div class="container">
    <h2 class="section-title">Technologies & Tools</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>Programming Languages</h3>
        <div class="skills-list">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">R</span>
          <span class="skill-tag">SQL</span>
          <span class="skill-tag">JavaScript</span>
        </div>
      </div>
      <div class="skill-category">
        <h3>Data Science & ML</h3>
        <div class="skills-list">
          <span class="skill-tag">Scikit-learn</span>
          <span class="skill-tag">PyTorch</span>
          <span class="skill-tag">Transformers</span>
          <span class="skill-tag">XGBoost</span>
        </div>
      </div>
      <div class="skill-category">
        <h3>Visualization</h3>
        <div class="skills-list">
          <span class="skill-tag">Plotly</span>
          <span class="skill-tag">Matplotlib</span>
          <span class="skill-tag">Shiny</span>
          <span class="skill-tag">Streamlit</span>
        </div>
      </div>
      <div class="skill-category">
        <h3>Tools & Platforms</h3>
        <div class="skills-list">
          <span class="skill-tag">Git</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Azure</span>
          <span class="skill-tag">Airflow</span>
        </div>
      </div>
    </div>
  </div>
</section>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Featured Projects",
  "itemListElement": [
    {% for project in site.featured_projects %}
    {
      "@type": "CreativeWork",
      "position": {{ forloop.index }},
      "name": "{{ project.title | escape }}",
      "description": "{{ project.description | strip_newlines | escape }}",
      "url": "{{ project.link | absolute_url }}"{% if project.image %},
      "image": "{{ '/assets/img/' | append: project.image | relative_url | absolute_url }}"{% endif %}
    }{% if forloop.last == false %},{% endif %}
    {% endfor %}
  ]
}
</script>
