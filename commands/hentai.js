const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("file-system")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'HENTAI_GIF',
        'hentai_irl'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`hentai.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./hentai.jpg`)
            })
        })
}
