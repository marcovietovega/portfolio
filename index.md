---
layout: default
title: "Home"
---

<section class="hero" style="background: url('{{ '/assets/img/hero.jpg' | relative_url }}') center/cover no-repeat;">
  <div class="hero-content">
    <h1>{{ site.hero.title }}</h1>
    <h2>{{ site.hero.subtitle}}</h2>
    <p>{{ site.hero.description }}</p>

    <div class="social-icons">
      <a href="https://github.com/{{ site.author.social.github }}" target="_blank" title="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/{{ site.author.social.linkedin }}" target="_blank" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:{{ site.author.email }}" target="_blank" title="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>

  </div>
</section>

<section class="featured-section">
  <div class="container">
    <h2 class="section-title">{{ site.sections.projects.title }}</h2>
    <p class="section-subtitle">{{ site.sections.projects.subtitle }}</p>
    
    <div class="cards-grid">
      {% for project in site.featured_projects %}
      <div class="card clickable-card" data-href="{{ project.link }}">
        <div class="card-image">
          <img src="{{ '/assets/img/' | append: project.image | relative_url }}" alt="Project image for {{ project.title }}" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-description">{{ project.description }}</p>
          <div class="card-tags">
            {% for tag in project.tags %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    
    <div class="section-cta">
      <a href="{{ site.sections.projects.cta_link | relative_url }}" class="btn-primary">{{ site.sections.projects.cta_text }}</a>
    </div>
  </div>
</section>

<section class="featured-section blog-section">
  <div class="container">
    <h2 class="section-title">{{ site.sections.blog.title }}</h2>
    <p class="section-subtitle">{{ site.sections.blog.subtitle }}</p>
    
    <div class="cards-grid">
      {% for post in site.featured_blog_posts %}
      <div class="card clickable-card" data-href="{{ post.link }}"{% if post.external %} target="_blank"{% endif %}>
        <div class="card-image">
          <img src="{{ '/assets/img/' | append: post.image | relative_url }}" alt="Blog post image for {{ post.title }}" loading="lazy">
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span class="card-date">{{ post.date }}</span>
          </div>
          <h3 class="card-title">{{ post.title }}</h3>
          <p class="card-description">{{ post.description }}</p>
          <div class="card-tags">
            {% for tag in post.tags %}
            <span class="tag" onclick="event.stopPropagation();">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    
    <div class="section-cta">
      <a href="{{ site.sections.blog.cta_link | relative_url }}" class="btn-primary">{{ site.sections.blog.cta_text }}</a>
    </div>
  </div>
</section>
