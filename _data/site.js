module.exports = {
  meta: {
    title: "A Template Is Better Than Nothing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    lang: "en",
    siteUrl: "https://words.by86400.today/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://words.by86400.today/",
    authorName: "86400",
    authorEmail: "johndoe@example.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Project notes, essays, and other bad ideas",
    description: "Mostly, I can't fit my thoughts into 280 characters, so I should have tried this much sooner."
  }
}