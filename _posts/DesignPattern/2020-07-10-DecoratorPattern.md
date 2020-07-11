---
layout: post
current: post
cover: assets/images/Outstanding-Set-of-Software-Engineers-Vectors-3.jpg
navigation: True
title: 데코레이터 패턴(Decorator Pattern) with Typescript
date: 2020-07-10 11:18:00
tags: [DesignPattern]
class: post-template
subclass: 'post tag-DesignPattern'
logo: assets/images/ghost.png
author: eatingcookieman
---

{% include designPattern-table-of-contents.html %}

## 카페나 한번 해볼까?

민수는 대학교 공부는 자신의 길이 아님을 깨닫고 무작정 사회로 뛰쳐 나왔습니다. 밤샘 과제를 하며 자신을 달래주던 커피가 생각난 민수는 카페를 열기로 결심합니다! 커피를 먹을 줄만 알았지 만들 줄은 몰랐던 민수는 간단하게 '에스프레소'와 
아메리카노'만 만들기로 결심합니다.

## 커피 만들기

민수는 이전에 출석이나 나가던 객체지향 프로그래밍 수업이 떠올랐습니다. 수업을 듣지 않던 민수는 내용이 기억날 리가 없었지만 그래도 이거 하나는 기억하나봅니다.

> 객체지향 프로그래밍은 상속을 통해 재사용성을 높여준다

민수는 상속을 왜 하는지, 정말 상속이 재사용성을 높여주는 지는 몰랐지만 어찌됐든 저 문장이 꽤나 멋있어 보였기 때문에 다음과 같이 커피를 만들어보기로 합니다.

