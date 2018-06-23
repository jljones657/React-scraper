const axios = require("axios");
const router = require("router");

router.get("/api/news", (req, res) => {
    axios
    .get("http://api.nytimes.com/svc/search/v2/articlesearch.json?", {params: req.query})
    .then(({data: { results}}) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;