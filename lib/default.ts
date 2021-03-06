/// A default config file, that adds some basic functionality,
///  and to act as a reference to how the config shall be
///  laid out.  All fields are accounted for here.

export default {
    name: "Simp'O'Matic",
    tag: "#1634",
    permissions: 8,
    lang: 'en',

    commands: {
        prefix: '!',
        max_history: 40,
        not_understood: "Command not understood",
        aliases: {
            'img': 'image',
            'i': 'image',
            'h': 'help',
            's': 'search',
            'web': 'search',
            'g': 'search',
            'google': 'search',
            'bing': 'search',
            'yt': 'youtube',
            'y': 'youtube',
            'd': 'define',
            'def': 'define',
            'oed': 'define',
            'oxford': 'define',
            'ud': 'urban',
            'u': 'urban',
            'blacklist': 'ignore',
            'whitelist': 'ignore whitelist',
            'w': 'weather',
            'reply': 'respond',
            'reject': 'delete',
            'wa': 'wolfram',
            'wolf': 'wolfram',
            'toilet': 'figlet',
            'wiki': 'wikipedia',
            'aliases': 'alias',
            'boomerfy': 'boomer',
            'mocking': 'mock',
            'pull': 'fork',
            'git': 'github',
            'bug': 'issue',
            'source': 'github',
            'save': 'export'
        },
    },

    rules: {
        // Below are the different kinds of _rules_.
        respond: [
            {
                match: "/^\\s*thanks.*\\s*$/i",
                response: 'Obama.'
            },
        ],
        reject: [
            {
                match: "/\\.{4,}/",
                response: null
            },
        ],
        replace: [  // Message editing functionality not a thing yet...
            {
                match: "/tbh/i",
                response: 'desu'
            },
        ],
        // Blacklist (initially everyone can do everything,
        //  except for those listed specifically on this list).
        blacklist: {
            channels: [
                'music', 'news'
            ],
            users: {
                // Should all be numbers/hashes, this one is bogus:
                "instcel": {
                    commands: true,
                    commands_elevated: false,
                    speech: true,
                },
                // For real this time:
                // -> `accelarion#0764`
                //     a.k.a. instcel,
                //     a.k.a. instgen,
                //     a.k.a. installgentoo.
                "409461942495871016": {
                    commands: true,
                    commands_elevated: false,
                    speech: true
                }
            },
            groups: {
                // Should all be numbers/hashes, these are bogus.
                "obese": {
                    commands_elevated: false,
                },
                "bpd": {
                    commands: false,
                }
            },
        },

        // In case you blacklist @everyone or something,
        // you can override completely, to obtain all permissions just
        // by putting them on the whitelist.
        whitelist: {
            users: [
                // Dr. Henry Kissinger#5457
                "265958795254038535",
                // Danny#1986
                "541761315887120399"
            ],
            groups: [
                // Will all be numbers/hashes too.
                "bourgeoisie"
            ]
        }
    }

}
