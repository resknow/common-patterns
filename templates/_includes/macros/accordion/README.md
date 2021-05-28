### Usage

```html
{% from "macros/accordion/macro.njk" import accordion %}
```

```html
{{ accordion({ items: [ { title: "About Us", content: "
<p>
	Vestibulum rhoncus ut ante non lobortis. Vivamus vel magna nisi. Mauris
	semper augue tortor, eu imperdiet ipsum maximus ut. Quisque porttitor massa
	in euismod congue. Donec erat turpis, venenatis sed vulputate a, imperdiet
	id nisi. Duis nec consectetur neque. Morbi et fringilla nisi, eu lacinia
	sem. Integer sodales ipsum a ante facilisis, nec vestibulum nulla mollis.
</p>
" }, { title: "Our Services", content: "
<p>
	Duis at rhoncus magna. Praesent sit amet mauris nec massa porta venenatis.
	Aenean nec mi sit amet lectus mollis faucibus. Cras auctor pretium volutpat.
	Aliquam sit amet neque pretium, hendrerit purus vel, malesuada ex.
	Vestibulum sit amet neque blandit, laoreet turpis in, vulputate quam. Aenean
	molestie aliquam enim a blandit. Suspendisse egestas euismod massa at
	interdum.
</p>
" } ] }) }}
```

### Arguments

| Name               | Type   | Description                                                                 |
| ------------------ | ------ | --------------------------------------------------------------------------- |
| `id`               | String | Unique ID for this set of tabs, required if you have more than one per page |
| `items`            | Array  | Accordion content, each item requires title and content.                    |
| `items.[].title`   | String | Accordion title                                                             |
| `items.[].content` | String | Accordion content                                                           |
| `class`            | String | Optional class to add to the component wrapper                              |
