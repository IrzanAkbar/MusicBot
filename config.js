module.exports = {
    TOKEN: "MTMyNTc4NTE2OTAzNDA4ODQ2OA.GYgrv-.tAbNDKOPW7ZCPY57Ymr3xSTsABS2CN5fzrEihk",
    ownerID: ["780349670509248562"], //write your discord user id. example: ["id"] or ["id1","id2"]
    botInvite: "https://discord.com/oauth2/authorize?client_id=1325785169034088468&response_type=code&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D1325785169034088468%26scope%3Dbot&integration_type=0&scope=identify+guilds+applications.commands", //write your discord bot invite.
    supportServer: "yes", //write your discord bot support server invite.
    mongodbURL: "mongodb+srv://Zann:cKM64lhUbwA5CMDj@cluster0.vkr0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", //write your mongodb url.
    status: '❤️ irzan.us',
    commandsDir: './commands', //Please don't touch
    language: "id", //ar, de, en, es, fr, id, it, ja, nl, pt, ru, tr, zh_TW
    embedColor: "ffa954", //hex color code
    errorLog: "", //write your discord error log channel id.


    playlistSettings: {
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },


    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
        },


        voiceConfig: {
            leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
            leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

            leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
                status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
                cooldown: 10000000, //1000 = 1 second
            },

        },

        maxVol: 200, //You can specify the maximum volume level.
    },


    sponsor: {
        status: true, //true or false
        url: "https://irzan.us", //write your discord sponsor url.
    },


    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },


    shardManager: {
        shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
    },


}