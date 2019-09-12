let server = require('./app')
let chai = require('chai')
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should()

describe('/GET get hello world', () => {
    it('it should GET a response of hello world', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.have.property('message')
                done();
            });
    });
});