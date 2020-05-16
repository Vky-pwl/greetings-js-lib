(function (global, $) {

    // an object
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    //hidden within the scope of IIFE and never directly accesable
    var supportedLangs = ['en', 'hn', 'pun'];

    // informal greetings
    var greetings = {
        'en': 'Hello',
        'hn': 'Namaste',
        'pun': 'Satshreeakaal'
    }

    // formal greetings
    var formalGreetings = {
        'en': 'Greetings',
        'hn': 'Pranaam',
        'pun': 'Satshreeakaal'
    }

    //logger message
    var logMessages = {
        'en': 'Logged in',
        'hn': 'Chalu Saatr',
        'pun': 'Chalu Saatr'
    }

    // prototype holds methods (to save memory spaces)
    Greetr.prototype = {

        // 'this' keyword refers to calling object at execution time
        fullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        validate: function () {
            //check that is a valid language
            //reference the externally accesiable  'supportedLangs' within the clouser
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },
        greeting: function () {
            return `${greetings[this.language]} ${this.firstName} !`;
        },
        formalGreeting: function () {
            return `${formalGreetings[this.language]}, ${this.fullName()}`;
        },
        //chainable methods returns their own containg context
        greet: function (formal) {
            var msg = formal ? this.formalGreeting() : this.greeting();
            if (console) {
                console.log(msg);
            }
            // support chainable
            return this;
        },
        log: function () {
            if (console) {
                console.log(`${logMessages[this.language]} ${this.fullName()}`);
            }
            // support chainable
            return this;
        },

        setLang: function (lang) {
            this.language = lang;
            this.validate();
            // support chainable
            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg = formal ? this.formalGreeting() : this.greeting();

            $(selector).html(msg);

            // support chainable
            return this;

        }

    };


    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'hn';
        this.validate();
    }
    // trick borrowed from jQuery so we don't have to use the neww keyword
    Greetr.init.prototype = Greetr.prototype;

    //attach the Greetr to the global object, and provide shorthand 'G$'for ease 
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);