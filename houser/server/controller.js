module.exports={
    getHouses: (req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses()
        .then( houses => { res.status(200).send(houses); })
        .catch( err => {
            console.log(err);
            res.status(500).send(err);
        });
    },
    addHouse: (req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { applicant, address, city, state, zipcode } = req.body;

        dbInstance.add_house([ applicant, address, city, state, zipcode ])
        .then( houses => { res.status(200).send(houses); })
        .catch( err => {
            console.log(err);
            res.status(500).send(err);
        });
    },
    updateHouse: (req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        const { applicant, address, city, state, zipcode } = req.body;

        dbInstance.update_house([ params.id, applicant, address, city, state, zipcode ])
        .then( houses => { res.status(200).send(houses); })
        .catch( err => {
            console.log(err);
            res.status(500).send(err);
        });
    },
    deleteHouse: (req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_house([ params.id ])
        .then( houses => { res.status(200).send(houses); })
        .catch( err => {
            console.log(err);
            res.status(500).send(err);
        });
    }
};