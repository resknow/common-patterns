### Usage

```
{% from "macros/gallery/macro.njk" import gallery %}

{{ accordion({
    images: [
        {
            src: '/assets/images/gallery/1.jpg',
            thumbnail: '/assets/images/gallery/1-thumbnail.jpg',
            alt: 'Gallery image',
            width: 500,
            height: 500
        },
    ]
}) }}
```

### Arguments

| Name                 | Type   | Description                                                                 |
| -------------------- | ------ | --------------------------------------------------------------------------- |
| `id`                 | String | Unique ID for this set of tabs, required if you have more than one per page |
| `images`             | Array  | Gallery content                                                             |
| `items.[].src`       | String | Full size image                                                             |
| `items.[].thumbnail` | String | Thumbnail image                                                             |
| `items.[].alt`       | String | Image alt text                                                              |
| `items.[].width`     | Number | Image width                                                                 |
| `items.[].height`    | Number | Image height                                                                |
| `class`              | String | Optional class to add to the component wrapper                              |
| `colMinWidth`        | String | Grid column min-width                                                       |
