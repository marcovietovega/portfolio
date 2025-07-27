---
layout: default
title: "Projects"
---

<div class="projects-page">

<section class="page-header" style="background: url('{{ '/assets/img/projects-bg.jpg' | relative_url }}') center/cover no-repeat;">
  <div class="container">
    <h1 class="page-title">My Projects</h1>
    <p class="page-subtitle">A collection of data science and analytics projects showcasing my skills and expertise.</p>
  </div>
</section>

<section class="projects-section">
  <div class="container">
    <div class="projects-grid">
      {% for project in site.featured_projects %}
      <div class="project-card clickable-card" data-href="{{ project.link }}">
        <div class="project-image">
          <img src="{{ '/assets/img/' | append: project.image | relative_url }}" alt="Project image for {{ project.title }}" loading="lazy">
        </div>
        <div class="project-content">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            {% for tag in project.tags %}
            <span class="tag" onclick="event.stopPropagation();">{{ tag }}</span>
            {% endfor %}
          </div>
          <div class="project-links">
            {% if project.link contains 'http' %}
              <a href="{{ project.link }}" target="_blank" class="btn-project">Visit Site</a>
            {% else %}
              <a href="{{ project.link }}" class="btn-project">View Project</a>
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
          <span class="skill-tag">Pandas</span>
          <span class="skill-tag">NumPy</span>
          <span class="skill-tag">Scikit-learn</span>
          <span class="skill-tag">TensorFlow</span>
        </div>
      </div>
      <div class="skill-category">
        <h3>Visualization</h3>
        <div class="skills-list">
          <span class="skill-tag">Plotly</span>
          <span class="skill-tag">Matplotlib</span>
          <span class="skill-tag">Shiny</span>
          <span class="skill-tag">D3.js</span>
        </div>
      </div>
      <div class="skill-category">
        <h3>Tools & Platforms</h3>
        <div class="skills-list">
          <span class="skill-tag">Git</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Jupyter</span>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
