const router = require("express").Router();
const booksController = require("../controllers/booksController");
const axios = require('axios');

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

router
    .route('/search/:term')
    .get((req, res) => {
        console.log(req.params);
        apiKey = 'AIzaSyDu6Ydp-IBeDkDUDHgvmysXckDh1ofv80Q'
        const searchterm = req.params.term || 'food';
        axios.get(`https://www.googleapis.com/books/v1/volumes?key=${apiKey}&q=${searchterm}`)
        .then(response => {
            console.log(response.data);
            return res.json(response.data);
        });
        

    })

module.exports = router;