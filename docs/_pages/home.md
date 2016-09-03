---
layout: splash
permalink: /
header:
  overlay_color: '#5e616c'
  overlay_image: header-laptop.jpg
  cta_label: "<i class='fa fa-download'></i> Install Now"
  cta_url: /docs/getting-started
  caption:
description:
  GantSign EnV: a Java development environment built using Vagrant.
excerpt: >
  A Java development environment built using Vagrant.<br />
  [![Build Status](https://travis-ci.org/gantsign/development-environment.svg?branch=master)](https://travis-ci.org/gantsign/development-environment)
feature_row:
  - title: Reproducible
    excerpt: >
      Whether it's for a new starter, or you're switching between projects, this
      project enables you to reliably provide a development environment ready
      for use.
    url: /docs/features/
    btn_label: Learn More
  - title: Configurable
    excerpt: >
      Version control all your project specific configuration. No more having to
      ask Dave because the wiki is out of date. Also supports user specific
      configuration like regional preferences.
    url: /docs/configuration
    btn_label: Learn More
  - title: MIT licensed
    excerpt: >
      Having benefitted from opensource so much over the years, it's nice to be
      able give back. This project is free to use under the terms of the MIT
      license.
    url: https://raw.githubusercontent.com/gantsign/development-environment/master/LICENSE
    btn_label: View
intro:
  - excerpt: >
      Get notified when new features are added &nbsp;
      [<i class="fa fa-twitter"></i> @gantsign](https://twitter.com/gantsign){: .btn .btn--twitter}
date: 2016-08-31T23:33:51+01:00
modified: 2016-09-02T19:20:23+01:00
---

<div class="home_news">
{% for post in site.posts limit: 3 %}
  {% include archive-single.html %}
{% endfor %}
</div>

{% include feature_row id="intro" type="center" %}

{% include feature_row %}
