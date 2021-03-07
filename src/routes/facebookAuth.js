const router = require('express').Router();
const passport = require('passport');

const { signToken, cookieOptions} = require('../services/auth');


//Auth using google account
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/redirect', passport.authenticate('facebook'), async (req, res) => {
<<<<<<< HEAD
    //res.send(req.user)
    // console.log(req.user);
    const token = signToken(req.user.id);
=======
    
    const { id, name, email } = req.user;
    const token = signToken(id, name, email);
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2

    //Stuff JWT into the cookie
    res.cookie('jwt', token, cookieOptions);
    res.status(200).json({
        status: 'success',
        message: `Welcome to WHITEBOARD, ${req.user.name}`,
        data: req.user,
        token
    });
});
    


module.exports = router;