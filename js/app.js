new Vue ({
    el: "#app",
    data() {
        
        return{
           profile: '',
           twitter: "https://www.twitter.com/",
           instagram: "https://www.instagram.com/",
           snapchat: "https://www.snapchat.com/",
           email: "https://www.gmail.com/",

           navOne: ["HOME", "ABOUT"],
           navTwo: ["GALLERY", "CONTACT"]
        };
        
    },
    created: function() {
        axios
        .get("https://hirng-x2021.glitch.me/api")
        .then(res => {
            this.profile = res.data
            const account = res.data.social_media

            
            this.instagram += account.instagram
            this.snapchat += account.snapchat
            this.email += account.email
        })
        .catch(err => console.log(err));     
    },

    // methods: {
    //     addTwitter: function() {
    //         return this.twitter += account.twitter
    //     },

    //     addInstagram: function() {
    //         return this.instagram += account.instagram

    //     },

    //     addSnapchat: function() {
    //         return this.snapchat += account.snapchat
    //     },

    //     addEmail: function() {
    //         return this.email += account.email
    //     }
    // }
})