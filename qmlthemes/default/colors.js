/* This file is part of the KDE project
 * SPDX-FileCopyrightText: 2014 Arjen Hiemstra <ahiemstra@heimr.nl>
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

var values = {
    base: {
        base: "#a89984",
        text: "#ebdbb2",
        header: "#282828",
        headerText: "#ebdbb2",
    },

    components: {
        button: {
            base: "#928374",
            text: "#ebdbb2",
            highlight: "##d5c4a1",
            checked: Qt.rgba(1.0, 1.0, 1.0, 0.7),
        },
        colorSwatch: {
            border: "#d5c4a1",
        },
        dialog: {
            modalOverlay: Qt.rgba(0.0, 0.0, 0.0, 0.5),
            background: {
                start: "#fbf1c7",
                stop: "#ebdbb2",
            },
            header: "#bdae93",
            headerText: "#ebdbb2",
            progress: {
                background: "#ebdbb2",
                border: "#d5c4a1",
                bar: "#928374",
            },
            button: "#bdae93",
            buttonText: "#ebdbb2",
        },
        expandingListView: {
            selection: {
                border: "##d5c4a1",
                fill: Qt.rgba(1.0, 1.0, 1.0, 0.4),
                text: Qt.rgba(0.0, 0.0, 0.0, 0.65),
            },
            list: {
                background: Qt.rgba(1.0, 1.0, 1.0, 0.4),
                item: "#ebdbb2",
                itemBorder: "##d5c4a1",
                itemText: Qt.rgba(0.0, 0.0, 0.0, 0.65),
            },
        },
        header: "#ebdbb2",
        label: "#3c3836",
        listItem: {
            background: {
                start: "#fbf1c7",
                stop: "#ebdbb2",
            },
            title: "#282828",
            description: "#333333",
        },
        messageStack: {
            background: "#928374",
            border: "#d5c4a1",
            text: "#ebdbb2",
            button: {
                fill: "#928374",
                border: "#d5c4a1",
            },
        },
        newImageList: {
            start: "#fbf1c7",
            stop: "#ebdbb2",
        },
        newsList: {
            listItem: {
                start: "#fbf1c7",
                stop: "#ebdbb2",
                moreLink: "#928374",
            },
            title: "#282828",
            date: "#665c54",
            description: "#282828",
            backLink: "#928374",
        },
        panelTextField: {
            border: "##d5c4a1",
            background: Qt.rgba(1.0, 1.0, 1.0, 0.4),
            enabled: Qt.rgba(0.0, 0.0, 0.0, 0.0),
            disabled: Qt.rgba(0.0, 0.0, 0.0, 0.7),
        },
        rangeInput: {

        },
        recentFilesList: {
            start: "#fbf1c7",
            stop: "#ebdbb2",
        },
        scrollDecorator: {
            base: "#d5c4a1",
            border: "transparent"
        },
        slider: {
            background: {
                fill: Qt.rgba(1.0, 1.0, 1.0, 0.75),
                border: "#d5c4a1",
            },
            handle: {
                fill: "#d5c4a1",
                border: "transparent",
            },
        },
        textField: {
            background: Qt.rgba(1.0, 1.0, 1.0, 0.75),
            border: {
                normal: "#d5c4a1",
                error: "cc241d",
                focus: "#928374",
            },
            placeholder: Qt.rgba(0.0, 0.0, 0.0, 0.5),
        },
        textFieldMultiline: {
            background: Qt.rgba(1.0, 1.0, 1.0, 0.75),
            border: "#d5c4a1",
        },
    },

    panels: {
        dropArea: {
            fill: Qt.rgba(1.0, 1.0, 1.0, 0.25),
            border: "#ebdbb2",
        },

        base: {
            base: "#a89984",
            text: "#ebdbb2",
            header: "#282828",
            headerText: "#ebdbb2",
        },

        presets: {
            base: "#a89984",
            text: "#ebdbb2",
            header: "#282828",
            headerText: "#ebdbb2",

            preset: {
                active: "#d5c4a1",
                inactive: "transparent",
            }
        },

        layers: {
            base: "#a89984",
            text: "#ebdbb2",
            header: "#282828",
            headerText: "#ebdbb2",
            subheader: "#d5c4a1",
            editorButtons: {
                active: "#ebdbb2",
                inactive: "transparent",
                text: "#928374",
                border: "#d5c4a1",
            },
            layer: {
                active: Qt.rgba(1.0, 1.0, 1.0, 0.5),
                inactive: Qt.rgba(1.0, 1.0, 1.0, 0.2),
                background: "#d5c4a1",
                text: "#282828",
                visible: "#ebdbb2",
                locked: "#ebdbb2",
            },
        },

        selection: {
            base: "#a89984",
            text: "#ebdbb2",
            header: "#282828",
            headerText: "#ebdbb2",

            buttons: {
                color: Qt.rgba(1.0, 1.0, 1.0, 0.4),
                text: "282828",
                border: "#d5c4a1"
            }
        },

        filter: {
            base: "#a89984",
            text: "#ebdbb2",
            header: "#282828",
            headerText: "#ebdbb2",
        },

        color: {
            base: "#a89984",
            text: "#ebdbb2",
            header: "#282828",
            headerText: "#ebdbb2",
        },

        tool: {
            base: "#a89984",
            text: "#ebdbb2",
            header: "#282828",
            headerText: "#ebdbb2",
            subheader: "#d5c4a1",
        },

        menu: {
            base: "#282828",
            text: "#ebdbb2",
            buttonHighlight: "#d5c4a1",
        },

        newImage: {
            background: "#ebdbb2",
            header: {
                start: "#7c6f64",
                stop: "#504945",
                text: "#ebdbb2",
            }
        },

        openImage: {
            background: "#ebdbb2",
            header: {
                start: "#7c6f64",
                stop: "#504945",
                text: "#ebdbb2",
            }
        },
    },

    pages: {
        welcome: {
            background: "#ebdbb2",
            open: {
                header: {
                    start: "#7c6f64",
                    stop: "#504945",
                    text: "#ebdbb2",
                },
            },
            create: {
                header: {
                    start: "#504945",
                    stop: "#7c6f64",
                    text: "#ebdbb2",
                },
            },
            news: {
                header: {
                    start: "#7c6f64",
                    stop: "#504945",
                    text: "#ebdbb2",
                },
            },
        },
        open: {
            background: "#ebdbb2",
            location: "#ebdbb2",
        },
        save: {
            background: "#ebdbb2",
            location: "#ebdbb2",
            footer: "#282828",
        },
        customImagePage: {
            background: "#ebdbb2",
            groupBox: "##d5c4a1",
            controls: {
                background: Qt.rgba(1.0, 1.0, 1.0, 0.4),
                border: "#ebdbb2",
            },
        }
    },
}
