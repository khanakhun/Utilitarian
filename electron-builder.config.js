module.exports = {
    win: {
        target: [
            {
                target: "nsis",
                arch: ["x64", "ia32"],
            },
        ],
    },
    mac: {
        target: [
            {
                target: "dmg",
                arch: ["universal"],
            },
        ],
    },
};
