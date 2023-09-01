---
layout: splash
permalink: /
header:
  overlay_color: '#5e616c'
  overlay_image: images/header-laptop.jpg
  actions:
    - label: "<i class='fas fa-download'></i> Install Now"
      url: /docs/getting-started
  caption:
description: >
  GantSign EnV: A development environment for Java, Python and Node.js built
  using Vagrant.
excerpt: >
  A development environment for Java, Python and Node.js built using
  Vagrant.<br />
  [![Build](https://github.com/gantsign/development-environment/actions/workflows/build.yml/badge.svg)](https://github.com/gantsign/development-environment/actions/workflows/build.yml)
feature_row:
  - title: Reproducible
    excerpt: >
      Whether it's for a new starter, or you're switching between projects, this
      project enables you to reliably provide a development environment ready
      for use.
    url: /docs/features/
    btn_label: Learn More
    btn_class: btn--primary
  - title: Configurable
    excerpt: >
      Version control all your project specific configuration. No more having to
      ask Dave because the wiki is out of date. Also supports user specific
      configuration like regional preferences.
    url: /docs/configuration
    btn_label: Learn More
    btn_class: btn--primary
  - title: MIT licensed
    excerpt: >
      Having benefitted from opensource so much over the years, it's nice to be
      able give back. This project is free to use under the terms of the MIT
      license.
    url: https://raw.githubusercontent.com/gantsign/development-environment/master/LICENSE
    btn_label: View
    btn_class: btn--primary
intro:
  - excerpt: >
      Get notified when new features are added &nbsp;
      [<i class="fab fa-twitter"></i> @gantsign](https://twitter.com/gantsign){: .btn .btn--twitter}
date: 2017-01-18T16:51:42+00:00
modified: 2021-04-07T23:30:42+01:00
---

<div class="home_news">
{% for post in site.posts limit: 3 %}
  {% include archive-single.html %}
{% endfor %}
</div>

{% include feature_row id="intro" type="center" %}

{% include feature_row %}
