# Social dish exports

Generated Facebook and Instagram dish PNGs go to `social/output/`, which is ignored by git and kept separate from the website.

Optional source photos can be placed in `social/assets/dishes/` using the menu dish id:

```text
social/assets/dishes/salata-od-tunjevine.jpg
```

Generate one English dish in both formats:

```bash
npm run generate:social-dish -- --dish salata-od-tunjevine
```

Generate with a specific image:

```bash
npm run generate:social-dish -- --dish salata-od-tunjevine --image social/assets/dishes/salata-od-tunjevine.jpg
```

Outputs:

- `1080x1080` square post
- `1080x1920` story

Generate the English educational carousel sets:

```bash
npm run generate:social-carousels
```

Carousel outputs are written to:

```text
social/output/carousels/
```
