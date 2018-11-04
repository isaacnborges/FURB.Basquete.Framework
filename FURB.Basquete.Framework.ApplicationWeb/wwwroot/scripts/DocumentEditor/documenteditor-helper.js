var DocumentLoader = (function () {
    function DocumentLoader(documentEditor) {
        this.documentEditor = undefined;
        this.documentEditor = documentEditor;
    }
    DocumentLoader.prototype.loadDefault = function (defaultDocument) {
        this.documentEditor.open(JSON.stringify(defaultDocument));
    };
    DocumentLoader.prototype.loadFile = function (path) {
        var _this = this;
        var baseUrl = '/api/documenteditor/import';
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', baseUrl, true);
        var waitingPopUp = document.getElementById('waiting-popup');
        var inActiveDiv = document.getElementById('popup-overlay');
        this.documentEditor.isReadOnly = true;
        waitingPopUp.style.display = 'block';
        inActiveDiv.style.display = 'block';
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200 || httpRequest.status === 304) {
                    _this.documentEditor.open(httpRequest.responseText);
                    _this.documentEditor.isReadOnly = false;
                    waitingPopUp.style.display = 'none';
                    inActiveDiv.style.display = 'none';
                }
                else {
                    waitingPopUp.style.display = 'none';
                    inActiveDiv.style.display = 'none';
                    _this.documentEditor.isReadOnly = false;
                    console.error(httpRequest.response);
                }
            }
        };
        var formData = new FormData();
        formData.append('files', path);
        this.documentEditor.documentName = path.name.substr(0, path.name.lastIndexOf('.'));
        httpRequest.send(formData);
    };
    DocumentLoader.prototype.destroy = function () {
        this.documentEditor = undefined;
    };
    return DocumentLoader;
}());
var TemplateLoader = (function () {
    function TemplateLoader() {
        this.notesDocument = {
            "sections": [
                {
                    "blocks": [
                        {
                            "paragraphFormat": {
                                "styleName": "Heading 1"
                            },
                            "inlines": [
                                {
                                    "text": "[List Title]"
                                }
                            ]
                        },
                        {
                            "paragraphFormat": {
                                "styleName": "Normal"
                            },
                            "inlines": [
                                {
                                    "text": "["
                                },
                                {
                                    "text": "If you’re ready to write, just select a line of text and start typing to replace it with your own."
                                },
                                {
                                    "text": "]"
                                }
                            ]
                        },
                        {
                            "paragraphFormat": {
                                "styleName": "List Bullet"
                            },
                            "inlines": [
                                {
                                    "text": "["
                                },
                                {
                                    "text": "Need a heading? "
                                },
                                {
                                    "text": "Apply"
                                },
                                {
                                    "text": " the heading style you want"
                                },
                                {
                                    "name": "_GoBack",
                                    "bookmarkType": 0
                                },
                                {
                                    "name": "_GoBack",
                                    "bookmarkType": 1
                                },
                                {
                                    "text": "."
                                },
                                {
                                    "text": "]"
                                }
                            ]
                        },
                        {
                            "paragraphFormat": {
                                "styleName": "List Bullet"
                            },
                            "inlines": [
                                {
                                    "text": "["
                                },
                                {
                                    "text": "This style is called List Bullet."
                                },
                                {
                                    "text": "]"
                                }
                            ]
                        }
                    ],
                    "headersFooters": {
                        "footer": {
                            "blocks": [
                                {
                                    "paragraphFormat": {
                                        "styleName": "Footer"
                                    },
                                    "inlines": [
                                        {
                                            "hasFieldEnd": true,
                                            "fieldType": 0
                                        },
                                        {
                                            "text": " PAGE   \\* MERGEFORMAT "
                                        },
                                        {
                                            "fieldType": 2
                                        },
                                        {
                                            "text": "2"
                                        },
                                        {
                                            "fieldType": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "sectionFormat": {
                        "headerDistance": 36,
                        "footerDistance": 50.400001525878906,
                        "pageWidth": 612,
                        "pageHeight": 792,
                        "leftMargin": 72,
                        "rightMargin": 72,
                        "topMargin": 72,
                        "bottomMargin": 72,
                        "differentFirstPage": true,
                        "differentOddAndEvenPages": false
                    }
                }
            ],
            "characterFormat": {
                "fontSize": 15,
                "fontFamily": "Arial",
                "fontColor": "#595959FF"
            },
            "paragraphFormat": {
                "afterSpacing": 6,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple"
            },
            "lists": [
                {
                    "listId": 0,
                    "abstractListId": 0
                },
                {
                    "listId": 1,
                    "abstractListId": 1
                },
                {
                    "listId": 2,
                    "abstractListId": 2
                },
                {
                    "listId": 3,
                    "abstractListId": 3
                },
                {
                    "listId": 4,
                    "abstractListId": 4
                },
                {
                    "listId": 5,
                    "abstractListId": 5
                },
                {
                    "listId": 6,
                    "abstractListId": 6
                },
                {
                    "listId": 7,
                    "abstractListId": 7
                },
                {
                    "listId": 8,
                    "abstractListId": 8
                },
                {
                    "listId": 9,
                    "abstractListId": 9
                }
            ],
            "abstractLists": [
                {
                    "abstractListId": 0,
                    "levels": [
                        {
                            "startAt": 1,
                            "restartLevel": 0,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab",
                            "numberFormat": "%1.",
                            "paragraphFormat": {
                                "leftIndent": 74.5999984741211,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 74.5999984741211,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 1,
                    "levels": [
                        {
                            "startAt": 1,
                            "restartLevel": 0,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab",
                            "numberFormat": "%1.",
                            "paragraphFormat": {
                                "leftIndent": 60.45000076293945,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 60.45000076293945,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 2,
                    "levels": [
                        {
                            "startAt": 1,
                            "restartLevel": 0,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab",
                            "numberFormat": "%1.",
                            "paragraphFormat": {
                                "leftIndent": 46.29999923706055,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 46.29999923706055,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 3,
                    "levels": [
                        {
                            "startAt": 1,
                            "restartLevel": 0,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab",
                            "numberFormat": "%1.",
                            "paragraphFormat": {
                                "leftIndent": 32.150001525878906,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 32.150001525878906,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 4,
                    "levels": [
                        {
                            "listLevelPattern": "Bullet",
                            "followCharacter": "Tab",
                            "numberFormat": "",
                            "characterFormat": {
                                "fontFamily": "Symbol"
                            },
                            "paragraphFormat": {
                                "leftIndent": 74.5999984741211,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 74.5999984741211,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 5,
                    "levels": [
                        {
                            "listLevelPattern": "Bullet",
                            "followCharacter": "Tab",
                            "numberFormat": "",
                            "characterFormat": {
                                "fontFamily": "Symbol"
                            },
                            "paragraphFormat": {
                                "leftIndent": 60.45000076293945,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 60.45000076293945,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 6,
                    "levels": [
                        {
                            "listLevelPattern": "Bullet",
                            "followCharacter": "Tab",
                            "numberFormat": "",
                            "characterFormat": {
                                "fontFamily": "Symbol"
                            },
                            "paragraphFormat": {
                                "leftIndent": 46.29999923706055,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 46.29999923706055,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 7,
                    "levels": [
                        {
                            "listLevelPattern": "Bullet",
                            "followCharacter": "Tab",
                            "numberFormat": "",
                            "characterFormat": {
                                "fontFamily": "Symbol"
                            },
                            "paragraphFormat": {
                                "leftIndent": 32.150001525878906,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 32.150001525878906,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 8,
                    "levels": [
                        {
                            "startAt": 1,
                            "restartLevel": 0,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab",
                            "numberFormat": "%1.",
                            "paragraphFormat": {
                                "leftIndent": 18,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 18,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                },
                {
                    "abstractListId": 9,
                    "levels": [
                        {
                            "listLevelPattern": "Bullet",
                            "followCharacter": "Tab",
                            "numberFormat": "",
                            "characterFormat": {
                                "fontFamily": "Symbol"
                            },
                            "paragraphFormat": {
                                "leftIndent": 18,
                                "firstLineIndent": -18,
                                "tabs": [
                                    {
                                        "tabJustification": "List",
                                        "position": 18,
                                        "tabLeader": "None",
                                        "deletePosition": 0
                                    }
                                ]
                            }
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 1,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 2,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 3,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 4,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 5,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 6,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 7,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        },
                        {
                            "startAt": 0,
                            "restartLevel": 8,
                            "listLevelPattern": "Arabic",
                            "followCharacter": "Tab"
                        }
                    ]
                }
            ],
            "background": {
                "color": "#FFFFFFFF"
            },
            "styles": [
                {
                    "type": "Paragraph",
                    "name": "Normal",
                    "next": "Normal"
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 1",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 1 Char",
                    "characterFormat": {
                        "fontSize": 24,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level1"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 2",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 2 Char",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 20,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level2"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 3",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 3 Char",
                    "characterFormat": {
                        "fontSize": 20,
                        "fontFamily": "Arial"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level3"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 4",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 4 Char",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 20,
                        "fontFamily": "Arial"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level4"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 5",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 5 Char",
                    "characterFormat": {
                        "fontSize": 17,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level5"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 6",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 6 Char",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 17,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level6"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 7",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 7 Char",
                    "characterFormat": {
                        "fontSize": 17,
                        "fontFamily": "Arial"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level7"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 8",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 8 Char",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 17,
                        "fontFamily": "Arial"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level8"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 9",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 9 Char",
                    "characterFormat": {
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 23,
                        "outlineLevel": "Level9"
                    }
                },
                {
                    "type": "Character",
                    "name": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "List Bullet",
                    "basedOn": "Normal",
                    "next": "List Bullet",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 9
                        }
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 1 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 24,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Number",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 8
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Header",
                    "basedOn": "Normal",
                    "link": "Header Char",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Header Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Footer",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Footer Char",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Footer Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Character",
                    "name": "Placeholder Text",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontColor": "#595959FF"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Title",
                    "basedOn": "Normal",
                    "link": "Title Char",
                    "characterFormat": {
                        "fontSize": 33,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 3,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Title Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 33,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Subtitle",
                    "basedOn": "Normal",
                    "link": "Subtitle Char",
                    "characterFormat": {
                        "fontSize": 20
                    },
                    "paragraphFormat": {
                        "afterSpacing": 26,
                        "listFormat": {
                            "listLevelNumber": 1
                        }
                    }
                },
                {
                    "type": "Character",
                    "name": "Subtitle Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 20
                    }
                },
                {
                    "type": "Character",
                    "name": "Intense Reference",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Character",
                    "name": "Book Title",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": false,
                        "italic": false,
                        "underline": "Single"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 2 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 20,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 3 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 20,
                        "fontFamily": "Arial"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 4 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 20,
                        "fontFamily": "Arial"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 5 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 17,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 6 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 17,
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 7 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 17,
                        "fontFamily": "Arial"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 8 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 17,
                        "fontFamily": "Arial"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 9 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Arial",
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Character",
                    "name": "Subtle Emphasis",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontColor": "#404040"
                    }
                },
                {
                    "type": "Character",
                    "name": "Emphasis",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Character",
                    "name": "Intense Emphasis",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "italic": true,
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Character",
                    "name": "Strong",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Quote",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Quote Char",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 18
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 12
                    }
                },
                {
                    "type": "Character",
                    "name": "Quote Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 18
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Intense Quote",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Intense Quote Char",
                    "characterFormat": {
                        "bold": true,
                        "italic": true,
                        "fontSize": 18
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 12
                    }
                },
                {
                    "type": "Character",
                    "name": "Intense Quote Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "italic": true,
                        "fontSize": 18
                    }
                },
                {
                    "type": "Character",
                    "name": "Subtle Reference",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontColor": "#262626FF"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Caption",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "characterFormat": {
                        "italic": true,
                        "fontSize": 12
                    },
                    "paragraphFormat": {
                        "afterSpacing": 10,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC Heading",
                    "basedOn": "Heading 1",
                    "next": "Normal",
                    "paragraphFormat": {
                        "outlineLevel": "BodyText"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Balloon Text",
                    "basedOn": "Normal",
                    "link": "Balloon Text Char",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Segoe UI"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Balloon Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Segoe UI"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Bibliography",
                    "basedOn": "Normal",
                    "next": "Normal"
                },
                {
                    "type": "Paragraph",
                    "name": "Block Text",
                    "basedOn": "Normal",
                    "characterFormat": {
                        "italic": true,
                        "fontColor": "#214C5E"
                    },
                    "paragraphFormat": {
                        "leftIndent": 57.599998474121094,
                        "rightIndent": 57.599998474121094
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text",
                    "basedOn": "Normal",
                    "link": "Body Text Char"
                },
                {
                    "type": "Character",
                    "name": "Body Text Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text 2",
                    "basedOn": "Normal",
                    "link": "Body Text 2 Char",
                    "paragraphFormat": {
                        "lineSpacing": 2,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text 2 Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text 3",
                    "basedOn": "Normal",
                    "link": "Body Text 3 Char",
                    "characterFormat": {
                        "fontSize": 11
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text 3 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text First Indent",
                    "basedOn": "Body Text",
                    "link": "Body Text First Indent Char",
                    "paragraphFormat": {
                        "firstLineIndent": 18
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text First Indent Char",
                    "basedOn": "Body Text Char"
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text Indent",
                    "basedOn": "Normal",
                    "link": "Body Text Indent Char",
                    "paragraphFormat": {
                        "leftIndent": 14.149999618530273
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text Indent Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text First Indent 2",
                    "basedOn": "Body Text Indent",
                    "link": "Body Text First Indent 2 Char",
                    "paragraphFormat": {
                        "leftIndent": 18,
                        "firstLineIndent": 18
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text First Indent 2 Char",
                    "basedOn": "Body Text Indent Char"
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text Indent 2",
                    "basedOn": "Normal",
                    "link": "Body Text Indent 2 Char",
                    "paragraphFormat": {
                        "leftIndent": 14.149999618530273,
                        "lineSpacing": 2,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text Indent 2 Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text Indent 3",
                    "basedOn": "Normal",
                    "link": "Body Text Indent 3 Char",
                    "characterFormat": {
                        "fontSize": 11
                    },
                    "paragraphFormat": {
                        "leftIndent": 14.149999618530273
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text Indent 3 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Closing",
                    "basedOn": "Normal",
                    "link": "Closing Char",
                    "paragraphFormat": {
                        "leftIndent": 212.60000610351562,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Closing Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Character",
                    "name": "annotation reference",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "annotation text",
                    "basedOn": "Normal",
                    "link": "Comment Text Char",
                    "characterFormat": {
                        "fontSize": 11
                    },
                    "paragraphFormat": {
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Comment Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "annotation subject",
                    "basedOn": "annotation text",
                    "next": "annotation text",
                    "link": "Comment Subject Char",
                    "characterFormat": {
                        "bold": true
                    }
                },
                {
                    "type": "Character",
                    "name": "Comment Subject Char",
                    "basedOn": "Comment Text Char",
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 11
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Date",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Date Char"
                },
                {
                    "type": "Character",
                    "name": "Date Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Document Map",
                    "basedOn": "Normal",
                    "link": "Document Map Char",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Segoe UI"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Document Map Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Segoe UI"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "E-mail Signature",
                    "basedOn": "Normal",
                    "link": "E-mail Signature Char",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "E-mail Signature Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Character",
                    "name": "Endnote Reference",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "baselineAlignment": "Superscript"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Endnote Text",
                    "basedOn": "Normal",
                    "link": "Endnote Text Char",
                    "characterFormat": {
                        "fontSize": 11
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Endnote Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "envelope address",
                    "basedOn": "Normal",
                    "characterFormat": {
                        "fontSize": 12,
                        "fontFamily": "Arial"
                    },
                    "paragraphFormat": {
                        "leftIndent": 144,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "envelope return",
                    "basedOn": "Normal",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Arial"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "FollowedHyperlink",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "underline": "Single",
                        "fontColor": "#895F96"
                    }
                },
                {
                    "type": "Character",
                    "name": "Footnote Reference",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "baselineAlignment": "Superscript"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Footnote Text",
                    "basedOn": "Normal",
                    "link": "Footnote Text Char",
                    "characterFormat": {
                        "fontSize": 11
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Footnote Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11
                    }
                },
                {
                    "type": "Character",
                    "name": "Hashtag",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontColor": "#2B579A"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Acronym",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "HTML Address",
                    "basedOn": "Normal",
                    "link": "HTML Address Char",
                    "characterFormat": {
                        "italic": true
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Address Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Cite",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Code",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Definition",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Keyboard",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "HTML Preformatted",
                    "basedOn": "Normal",
                    "link": "HTML Preformatted Char",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Preformatted Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Sample",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 12,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Typewriter",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Variable",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true
                    }
                },
                {
                    "type": "Character",
                    "name": "Hyperlink",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "underline": "Single",
                        "fontColor": "#276D5B"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 1",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 15,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 2",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 30,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 3",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 45,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 4",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 60,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 5",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 75,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 6",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 90,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 7",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 105,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 8",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 120,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index 9",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 135,
                        "firstLineIndent": -15,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Index Heading",
                    "basedOn": "Normal",
                    "next": "Index 1",
                    "characterFormat": {
                        "bold": true,
                        "fontFamily": "Arial"
                    }
                },
                {
                    "type": "Character",
                    "name": "Line Number",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "List",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 14.149999618530273,
                        "firstLineIndent": -14.149999618530273
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List 2",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 28.299999237060547,
                        "firstLineIndent": -14.149999618530273
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List 3",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 42.45000076293945,
                        "firstLineIndent": -14.149999618530273
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List 4",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 56.599998474121094,
                        "firstLineIndent": -14.149999618530273
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List 5",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 70.75,
                        "firstLineIndent": -14.149999618530273
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Bullet 2",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 7
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Bullet 3",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 6
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Bullet 4",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 5
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Bullet 5",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 4
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Continue",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 14.149999618530273
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Continue 2",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 28.299999237060547
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Continue 3",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 42.45000076293945
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Continue 4",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 56.599998474121094
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Continue 5",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 70.75
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Number 2",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 3
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Number 3",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 2
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Number 4",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 1
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Number 5",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "listFormat": {
                            "listId": 0
                        }
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "List Paragraph",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 36
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Macro Text",
                    "link": "Macro Text Char",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "tabs": [
                            {
                                "tabJustification": "Left",
                                "position": 24,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 48,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 72,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 96,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 120,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 144,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 168,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 192,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 216,
                                "tabLeader": "None",
                                "deletePosition": 0
                            }
                        ]
                    }
                },
                {
                    "type": "Character",
                    "name": "Macro Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Character",
                    "name": "Mention",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontColor": "#2B579A"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Message Header",
                    "basedOn": "Normal",
                    "link": "Message Header Char",
                    "characterFormat": {
                        "fontSize": 12,
                        "fontFamily": "Arial"
                    },
                    "paragraphFormat": {
                        "leftIndent": 56.70000076293945,
                        "firstLineIndent": -56.70000076293945,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Message Header Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 12,
                        "fontFamily": "Arial"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "No Spacing",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Normal (Web)",
                    "basedOn": "Normal",
                    "characterFormat": {
                        "fontSize": 12,
                        "fontFamily": "Times New Roman"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Normal Indent",
                    "basedOn": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 36
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Note Heading",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Note Heading Char",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Note Heading Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Character",
                    "name": "Page Number",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Plain Text",
                    "basedOn": "Normal",
                    "link": "Plain Text Char",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Plain Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Salutation",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Salutation Char"
                },
                {
                    "type": "Character",
                    "name": "Salutation Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Signature",
                    "basedOn": "Normal",
                    "link": "Signature Char",
                    "paragraphFormat": {
                        "leftIndent": 212.60000610351562,
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Signature Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Character",
                    "name": "Smart Hyperlink",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "underline": "Dotted"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Table of Authorities",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 15,
                        "firstLineIndent": -15,
                        "afterSpacing": 0
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Table of Figures",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "afterSpacing": 0
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOA Heading",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 12,
                        "fontFamily": "Arial"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 6
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 1",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 2",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 15,
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 3",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 30,
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 4",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 45,
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 5",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 60,
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 6",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 75,
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 7",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 90,
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 8",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 105,
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC 9",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "paragraphFormat": {
                        "leftIndent": 120,
                        "afterSpacing": 5
                    }
                },
                {
                    "type": "Character",
                    "name": "Unresolved Mention",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontColor": "#595959"
                    }
                }
            ]
        };
        this.specDesignDocument = {
            "sections": [
                {
                    "blocks": [
                        {
                            "paragraphFormat": {
                                "styleName": "Title"
                            },
                            "inlines": [
                                {
                                    "text": "Title"
                                }
                            ]
                        },
                        {
                            "paragraphFormat": {
                                "styleName": "Heading 1"
                            },
                            "inlines": [
                                {
                                    "text": "Heading 1"
                                }
                            ]
                        },
                        {
                            "paragraphFormat": {
                                "styleName": "Normal"
                            },
                            "inlines": [
                                {
                                    "text": "To get started right away, just "
                                },
                                {
                                    "text": "select the"
                                },
                                {
                                    "text": " placeholder text and start typing to replace it with your own."
                                }
                            ]
                        },
                        {
                            "paragraphFormat": {
                                "styleName": "Normal"
                            },
                            "inlines": [
                                {
                                    "text": "Find even more easy-to-use tools on the "
                                },
                                {
                                    "text": "tool bar"
                                },
                                {
                                    "text": ", such as to add a hyperlink or insert "
                                },
                                {
                                    "text": "an"
                                },
                                {
                                    "text": " "
                                },
                                {
                                    "text": "image, table, etc"
                                },
                                {
                                    "text": "."
                                },
                                {
                                    "name": "_GoBack",
                                    "bookmarkType": 0
                                },
                                {
                                    "name": "_GoBack",
                                    "bookmarkType": 1
                                }
                            ]
                        }
                    ],
                    "headersFooters": {
                        "footer": {
                            "blocks": [
                                {
                                    "paragraphFormat": {
                                        "styleName": "Footer"
                                    },
                                    "inlines": [
                                        {
                                            "hasFieldEnd": true,
                                            "fieldType": 0
                                        },
                                        {
                                            "text": " PAGE   \\* MERGEFORMAT "
                                        },
                                        {
                                            "fieldType": 2
                                        },
                                        {
                                            "text": "2"
                                        },
                                        {
                                            "fieldType": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "sectionFormat": {
                        "headerDistance": 36,
                        "footerDistance": 36,
                        "pageWidth": 612,
                        "pageHeight": 792,
                        "leftMargin": 72,
                        "rightMargin": 72,
                        "topMargin": 72,
                        "bottomMargin": 72,
                        "differentFirstPage": true,
                        "differentOddAndEvenPages": false
                    }
                }
            ],
            "characterFormat": {
                "fontSize": 11,
                "fontFamily": "Candara"
            },
            "paragraphFormat": {
                "afterSpacing": 8,
                "lineSpacing": 1.0791666507720947,
                "lineSpacingType": "Multiple"
            },
            "background": {
                "color": "#FFFFFFFF"
            },
            "styles": [
                {
                    "type": "Paragraph",
                    "name": "Normal",
                    "next": "Normal"
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 1",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 1 Char",
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 20,
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 12,
                        "afterSpacing": 0,
                        "outlineLevel": "Level1"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 2",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 2 Char",
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 16,
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 2,
                        "afterSpacing": 0,
                        "outlineLevel": "Level2"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 3",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 3 Char",
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 12,
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 2,
                        "afterSpacing": 0,
                        "outlineLevel": "Level3"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 4",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 4 Char",
                    "characterFormat": {
                        "bold": true,
                        "italic": true,
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 2,
                        "afterSpacing": 0,
                        "outlineLevel": "Level4"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 5",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 5 Char",
                    "characterFormat": {
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 2,
                        "afterSpacing": 0,
                        "outlineLevel": "Level5"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 6",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 6 Char",
                    "characterFormat": {
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 2,
                        "afterSpacing": 0,
                        "outlineLevel": "Level6"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 7",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 7 Char",
                    "characterFormat": {
                        "italic": true,
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 2,
                        "afterSpacing": 0,
                        "outlineLevel": "Level7"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 8",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 8 Char",
                    "characterFormat": {
                        "fontFamily": "Candara",
                        "fontColor": "#272727"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 2,
                        "afterSpacing": 0,
                        "outlineLevel": "Level8"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Heading 9",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Heading 9 Char",
                    "characterFormat": {
                        "italic": true,
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "beforeSpacing": 2,
                        "afterSpacing": 0,
                        "outlineLevel": "Level9"
                    }
                },
                {
                    "type": "Character",
                    "name": "Default Paragraph Font"
                },
                {
                    "type": "Character",
                    "name": "Heading 1 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 20,
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 2 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 16,
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 3 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 12,
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 4 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "italic": true,
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 5 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 6 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 7 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 8 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Candara",
                        "fontColor": "#272727"
                    }
                },
                {
                    "type": "Character",
                    "name": "Heading 9 Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Title",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Title Char",
                    "characterFormat": {
                        "fontSize": 36,
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Title Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 36,
                        "fontFamily": "Candara"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Subtitle",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Subtitle Char",
                    "characterFormat": {
                        "fontColor": "#404040"
                    },
                    "paragraphFormat": {
                        "listFormat": {
                            "listLevelNumber": 1
                        }
                    }
                },
                {
                    "type": "Character",
                    "name": "Subtitle Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontColor": "#404040"
                    }
                },
                {
                    "type": "Character",
                    "name": "Intense Emphasis",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontColor": "#0D5672"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Intense Quote",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Intense Quote Char",
                    "characterFormat": {
                        "italic": true,
                        "fontColor": "#0D5672"
                    },
                    "paragraphFormat": {
                        "leftIndent": 43.20000076293945,
                        "rightIndent": 43.20000076293945,
                        "beforeSpacing": 18,
                        "afterSpacing": 18,
                        "textAlignment": "Center"
                    }
                },
                {
                    "type": "Character",
                    "name": "Intense Quote Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "italic": true,
                        "fontColor": "#0D5672"
                    }
                },
                {
                    "type": "Character",
                    "name": "Intense Reference",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "bold": true,
                        "fontColor": "#0D5672"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Caption",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "characterFormat": {
                        "italic": true
                    },
                    "paragraphFormat": {
                        "afterSpacing": 10,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "TOC Heading",
                    "basedOn": "Heading 1",
                    "next": "Normal",
                    "paragraphFormat": {
                        "outlineLevel": "BodyText"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Balloon Text",
                    "basedOn": "Normal",
                    "link": "Balloon Text Char",
                    "characterFormat": {
                        "fontFamily": "Segoe UI"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Balloon Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Segoe UI"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text 3",
                    "basedOn": "Normal",
                    "link": "Body Text 3 Char",
                    "paragraphFormat": {
                        "afterSpacing": 6
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text 3 Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Body Text Indent 3",
                    "basedOn": "Normal",
                    "link": "Body Text Indent 3 Char",
                    "paragraphFormat": {
                        "leftIndent": 18,
                        "afterSpacing": 6
                    }
                },
                {
                    "type": "Character",
                    "name": "Body Text Indent 3 Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Character",
                    "name": "annotation reference",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "annotation text",
                    "basedOn": "Normal",
                    "link": "Comment Text Char",
                    "paragraphFormat": {
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Comment Text Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "annotation subject",
                    "basedOn": "annotation text",
                    "next": "annotation text",
                    "link": "Comment Subject Char",
                    "characterFormat": {
                        "bold": true
                    }
                },
                {
                    "type": "Character",
                    "name": "Comment Subject Char",
                    "basedOn": "Comment Text Char",
                    "characterFormat": {
                        "bold": true
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Document Map",
                    "basedOn": "Normal",
                    "link": "Document Map Char",
                    "characterFormat": {
                        "fontFamily": "Segoe UI"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Document Map Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Segoe UI"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Endnote Text",
                    "basedOn": "Normal",
                    "link": "Endnote Text Char",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Endnote Text Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "envelope return",
                    "basedOn": "Normal",
                    "characterFormat": {
                        "fontFamily": "Candara"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Footnote Text",
                    "basedOn": "Normal",
                    "link": "Footnote Text Char",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Footnote Text Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Character",
                    "name": "HTML Code",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Keyboard",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "HTML Preformatted",
                    "basedOn": "Normal",
                    "link": "HTML Preformatted Char",
                    "characterFormat": {
                        "fontFamily": "Consolas"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Preformatted Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Character",
                    "name": "HTML Typewriter",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontSize": 11,
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Macro Text",
                    "link": "Macro Text Char",
                    "characterFormat": {
                        "fontFamily": "Consolas"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "tabs": [
                            {
                                "tabJustification": "Left",
                                "position": 24,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 48,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 72,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 96,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 120,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 144,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 168,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 192,
                                "tabLeader": "None",
                                "deletePosition": 0
                            },
                            {
                                "tabJustification": "Left",
                                "position": 216,
                                "tabLeader": "None",
                                "deletePosition": 0
                            }
                        ]
                    }
                },
                {
                    "type": "Character",
                    "name": "Macro Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Plain Text",
                    "basedOn": "Normal",
                    "link": "Plain Text Char",
                    "characterFormat": {
                        "fontFamily": "Consolas"
                    },
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Plain Text Char",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontFamily": "Consolas"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Block Text",
                    "basedOn": "Normal",
                    "characterFormat": {
                        "italic": true,
                        "fontColor": "#0D5672"
                    },
                    "paragraphFormat": {
                        "leftIndent": 57.599998474121094,
                        "rightIndent": 57.599998474121094
                    }
                },
                {
                    "type": "Character",
                    "name": "FollowedHyperlink",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "underline": "Single",
                        "fontColor": "#215D4B"
                    }
                },
                {
                    "type": "Character",
                    "name": "Hyperlink",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "underline": "Single",
                        "fontColor": "#2E653E"
                    }
                },
                {
                    "type": "Character",
                    "name": "Placeholder Text",
                    "basedOn": "Default Paragraph Font",
                    "characterFormat": {
                        "fontColor": "#595959"
                    }
                },
                {
                    "type": "Paragraph",
                    "name": "Header",
                    "basedOn": "Normal",
                    "link": "Header Char",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Header Char",
                    "basedOn": "Default Paragraph Font"
                },
                {
                    "type": "Paragraph",
                    "name": "Footer",
                    "basedOn": "Normal",
                    "next": "Normal",
                    "link": "Footer Char",
                    "paragraphFormat": {
                        "afterSpacing": 0,
                        "lineSpacing": 1,
                        "lineSpacingType": "Multiple"
                    }
                },
                {
                    "type": "Character",
                    "name": "Footer Char",
                    "basedOn": "Default Paragraph Font"
                }
            ]
        };
    }
    TemplateLoader.prototype.getTemplate = function (name) {
        switch (name) {
            case 'Spec Design':
                return JSON.stringify(this.specDesignDocument);
            case 'Notes':
                return JSON.stringify(this.notesDocument);
        }
        return undefined;
    };
    return TemplateLoader;
}());
var TocProperties = (function () {
    function TocProperties(docEditor) {
        var _this = this;
        this.initializeTocPane = function () {
            _this.element = ej.base.createElement('div', { id: _this.elementId + '_tocProperties', styles: 'padding:9px;width:269px' });
            _this.tocHeaderDiv();
            _this.initTemplates();
            _this.tocOptionsDiv();
            _this.contentStylesDropdown();
            _this.checkboxContent();
            _this.buttonDiv();
            _this.wireEvents();
            _this.updateTocProperties();
        };
        this.updateTocProperties = function () {
            _this.rightalignPageNumber.checked = true;
            _this.showPageNumber.checked = true;
            _this.hyperlink.checked = true;
        };
        this.wireEvents = function () {
            _this.cancelBtn.element.addEventListener('click', function () { _this.onClose(); });
            _this.updateBtn.element.addEventListener('click', _this.onInsertToc);
            _this.closeButton.addEventListener('click', function () { _this.onClose(); });
        };
        this.onClose = function () {
            if (_this.toolbar.showPropertiesPane
                && _this.toolbar.previousContext !== 'TableOfContents') {
                _this.toolbar.showPropertiesPaneOnSelection();
            }
            else {
                _this.toolbar.showPropertiesPane = false;
                _this.showTocPane(false);
                _this.toolbar.enableDisablePropertyPaneButton(false);
                _this.toolbar.propertiesPane.showPropertiesPane(false);
            }
        };
        this.tocHeaderDiv = function () {
            var headerDiv = ej.base.createElement('div', {
                id: _this.elementId + 'toc_id',
                styles: 'display: block;'
            });
            _this.element.appendChild(headerDiv);
            var title = ej.base.createElement('label', {
                className: 'e-de-prop-header-label'
            });
            title.textContent = 'Table of Contents';
            headerDiv.appendChild(title);
            _this.closeButton = ej.base.createElement('span', {
                className: 'e-de-icon-Close',
                styles: 'cursor: pointer;float:right;display:inline-block;color: #4A4A4A;'
            });
            headerDiv.appendChild(_this.closeButton);
        };
        this.initTemplates = function () {
            _this.template1();
            var div = ej.base.createElement('div', { styles: 'display:block;border-top: 1px solid #E0E0E0;margin-bottom:5px' });
            _this.element.appendChild(div);
        };
        this.template1 = function () {
            _this.template1Div = ej.base.createElement('div', {
                className: 'toc-template1'
            });
            _this.element.appendChild(_this.template1Div);
            var templateContent1 = ej.base.createElement('div', {
                className: 'toc-template1-content1'
            });
            templateContent1.textContent = 'HEADING______ 1';
            _this.template1Div.appendChild(templateContent1);
            var templateContent2 = ej.base.createElement('div', {
                className: 'toc-template1-content2'
            });
            templateContent2.textContent = 'HEADING______ 2';
            _this.template1Div.appendChild(templateContent2);
            var templateContent3 = ej.base.createElement('div', {
                className: 'toc-template1-content3'
            });
            templateContent3.textContent = 'HEADING______ 3';
            _this.template1Div.appendChild(templateContent3);
        };
        this.tocOptionsDiv = function () {
            var optionsDiv = ej.base.createElement('div', {
                className: 'toc-optionsDiv'
            });
            _this.element.appendChild(optionsDiv);
            var label = ej.base.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Options';
            optionsDiv.appendChild(label);
        };
        this.contentStylesDropdown = function () {
            var contentStyleElement = ej.base.createElement('div', { id: 'contentstyle_div', styles: 'margin-bottom: 10px;' });
            contentStyleElement.setAttribute('title', 'Number of heading or outline levels to be shown in table of contents.');
            _this.element.appendChild(contentStyleElement);
            var label = ej.base.createElement('label', { className: 'e-de-prop-sub-label', styles: 'margin-right:8px;' });
            label.textContent = 'Levels';
            contentStyleElement.appendChild(label);
            _this.element.appendChild(contentStyleElement);
            var dataSource = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            _this.borderLevelStyle = _this.createDropDownBtn(_this.elementId + '_borderLevelDiv', contentStyleElement, '', dataSource, 2);
            _this.borderLevelStyle.change = function (args) {
                _this.borderLevelStyle.value = args.item.value;
            };
            _this.element.appendChild(contentStyleElement);
        };
        this.checkboxContent = function () {
            var checkboxElement = ej.base.createElement('div', { id: 'toc_checkboxDiv', styles: 'margin-bottom:20px' });
            _this.element.appendChild(checkboxElement);
            var showPageNumberDiv = ej.base.createElement('div', { className: 'e-de-prop-sub-label' });
            showPageNumberDiv.setAttribute('title', 'Show page numbers in table of contents.');
            checkboxElement.appendChild(showPageNumberDiv);
            var showpagenumberCheckboxElement = ej.base.createElement('input', { id: 'showpagenumber', styles: 'width:12px;height:12px;margin-bottom:8px', className: 'e-de-prop-sub-label' });
            showPageNumberDiv.appendChild(showpagenumberCheckboxElement);
            _this.showPageNumber = new ej.buttons.CheckBox({
                label: 'Show page numbers',
            });
            _this.showPageNumber.appendTo(showpagenumberCheckboxElement);
            var rightAlignDiv = ej.base.createElement('div', { className: 'e-de-prop-sub-label' });
            rightAlignDiv.setAttribute('title', 'Right align page numbers in table of contents.');
            checkboxElement.appendChild(rightAlignDiv);
            var rightalignpagenumberCheckboxElement = ej.base.createElement('input', { id: 'rightalignpagenumber', styles: 'width:12px;height:12px', className: 'e-de-prop-sub-label' });
            rightAlignDiv.appendChild(rightalignpagenumberCheckboxElement);
            _this.rightalignPageNumber = new ej.buttons.CheckBox({
                label: 'Right align page numbers',
            });
            _this.rightalignPageNumber.appendTo(rightalignpagenumberCheckboxElement);
            var hyperlinkDiv = ej.base.createElement('div', { className: 'e-de-prop-sub-label' });
            hyperlinkDiv.setAttribute('title', 'Use hyperlinks instead of page numbers.');
            checkboxElement.appendChild(hyperlinkDiv);
            var hyperlinkCheckboxElement = ej.base.createElement('input', { id: 'hyperlinkdiv', styles: 'width:12px;height:12px', className: 'e-de-prop-sub-label' });
            hyperlinkDiv.appendChild(hyperlinkCheckboxElement);
            _this.hyperlink = new ej.buttons.CheckBox({
                label: 'Use hyperlinks',
            });
            _this.hyperlink.appendTo(hyperlinkCheckboxElement);
        };
        this.buttonDiv = function () {
            var footerElement = ej.base.createElement('div', { id: 'footerDiv', styles: 'float:right' });
            _this.element.appendChild(footerElement);
            var updatebuttoncontentStyleElement = ej.base.createElement('button', { id: 'footerupdatebuttonDiv' });
            footerElement.appendChild(updatebuttoncontentStyleElement);
            _this.updateBtn = new ej.buttons.Button({
                content: 'Update', cssClass: 'btn-update', isPrimary: true
            });
            _this.updateBtn.appendTo(updatebuttoncontentStyleElement);
            var cancelbuttoncontentStyleElement = ej.base.createElement('button', { id: 'footercancelbuttonDiv' });
            footerElement.appendChild(cancelbuttoncontentStyleElement);
            _this.cancelBtn = new ej.buttons.Button({
                content: 'Cancel', cssClass: 'btn-cancel'
            });
            _this.cancelBtn.appendTo(cancelbuttoncontentStyleElement);
        };
        this.showTocPane = function (isShow, prevContextType) {
            if (!isShow && _this.element.style.display === 'none' || (isShow && _this.element.style.display === 'block')) {
                return;
            }
            _this.element.style.display = isShow ? 'block' : 'none';
            _this.updateBtn.content = _this.documentEditor.selection.contextType === 'TableOfContents' ? 'Update' : 'Insert';
            _this.prevContext = _this.documentEditor.selection.contextType;
            _this.documentEditor.resize();
            if (isShow) {
                _this.updateBtn.element.focus();
            }
        };
        this.onInsertToc = function () {
            var tocSettings = {
                startLevel: 1,
                endLevel: parseInt(_this.borderLevelStyle.value, 0),
                includeHyperlink: _this.hyperlink.checked,
                includePageNumber: _this.showPageNumber.checked,
                rightAlign: _this.rightalignPageNumber.checked
            };
            _this.documentEditor.editor.insertTableOfContents(tocSettings);
        };
        this.documentEditor = docEditor;
        this.elementId = this.documentEditor.element.id;
        this.initializeTocPane();
    }
    TocProperties.prototype.createDropdownOption = function (ulTag, text) {
        var liTag = ej.base.createElement('li', {
            styles: 'display:block',
            className: 'ui-wfloating-menuitem ui-wfloating-menuitem-md de-list-items  de-list-item-size'
        });
        ulTag.appendChild(liTag);
        var innerHTML;
        if (text === 'None') {
            innerHTML = '<div>' + text + '</div>';
        }
        else if (text === '1.5px') {
            innerHTML = '<div>' + text + '<span class="ui-list-line" style="margin-left:10px;border-bottom-width:' + text + '"></span></div>';
        }
        else {
            innerHTML = '<div>' + text + '<span class="ui-list-line" style="margin-left:20px;border-bottom-width:' + text + '"></span></div>';
        }
        var liInnerDiv = ej.base.createElement('div', {
            className: 'ui-list-header-presetmenu',
            id: 'ui-zlist0', innerHTML: innerHTML
        });
        liTag.appendChild(liInnerDiv);
        return liTag;
    };
    TocProperties.prototype.createDropDownBtn = function (id, parentDiv, iconCss, content, selectedIndex) {
        var buttonElement = ej.base.createElement('input', { id: id });
        parentDiv.appendChild(buttonElement);
        var dropDownBtn = new ej.dropdowns.DropDownList({ index: selectedIndex, dataSource: content, width: '75px', popupWidth: '75px', cssClass: 'e-de-prop-font-button' }, buttonElement);
        return dropDownBtn;
    };
    return TocProperties;
}());
var HeaderFooterProperties = (function () {
    function HeaderFooterProperties(documentEditor) {
        var _this = this;
        this.isHeaderTopApply = false;
        this.isFooterTopApply = false;
        this.wireEvents = function () {
            _this.headerFromTop.element.addEventListener('click', function () { _this.isHeaderTopApply = true; });
            _this.footerFromTop.element.addEventListener('click', function () { _this.isFooterTopApply = true; });
            _this.headerFromTop.element.addEventListener('keydown', _this.onHeaderValue);
            _this.footerFromTop.element.addEventListener('keydown', _this.onFooterValue);
            _this.headerFromTop.element.addEventListener('blur', function () { _this.changeHeaderValue(); _this.isHeaderTopApply = false; });
            _this.footerFromTop.element.addEventListener('blur', function () { _this.changeFooterValue(); _this.isFooterTopApply = false; });
        };
        this.onClose = function () {
            _this.toolbar.showHeaderProperties = true;
            _this.documentEditor.selection.closeHeaderFooter();
        };
        this.changeFirstPageOptions = function () {
            if (!_this.documentEditor.isReadOnly) {
                _this.documentEditor.selection.sectionFormat.differentFirstPage = _this.firstPage.checked;
                setTimeout(function () { _this.documentEditor.focusIn(); }, 10);
            }
        };
        this.changeoddOrEvenOptions = function () {
            if (!_this.documentEditor.isReadOnly) {
                _this.documentEditor.selection.sectionFormat.differentOddAndEvenPages = _this.oddOrEven.checked;
                setTimeout(function () { _this.documentEditor.focusIn(); }, 10);
            }
        };
        this.changeHeaderValue = function () {
            if (!_this.isHeaderTopApply) {
                return;
            }
            if (!_this.documentEditor.isReadOnly) {
                var headerTop = _this.headerFromTop.value;
                if (headerTop > _this.headerFromTop.max) {
                    headerTop = _this.headerFromTop.max;
                }
                _this.documentEditor.selection.sectionFormat.headerDistance = headerTop;
            }
        };
        this.onHeaderValue = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.changeHeaderValue(); _this.isHeaderTopApply = false; }, 30);
            }
        };
        this.onFooterValue = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.changeFooterValue(); _this.isFooterTopApply = false; }, 30);
            }
        };
        this.changeFooterValue = function () {
            if (!_this.isFooterTopApply) {
                return;
            }
            if (!_this.documentEditor.isReadOnly) {
                var footerTop = _this.footerFromTop.value;
                if (footerTop > _this.footerFromTop.max) {
                    footerTop = _this.footerFromTop.max;
                }
                _this.documentEditor.selection.sectionFormat.footerDistance = footerTop;
            }
        };
        this.documentEditor = documentEditor;
        this.initHeaderFooterPane();
        this.wireEvents();
    }
    HeaderFooterProperties.prototype.initHeaderFooterPane = function () {
        this.initializeHeaderFooter();
        this.element.style.display = 'none';
    };
    HeaderFooterProperties.prototype.showHeaderFooterPane = function (isShow) {
        if (isShow) {
            this.toolbar.enableDisablePropertyPaneButton(false);
            this.onSelectionChange();
        }
        if (!isShow && this.element.style.display === 'none' || (isShow && this.element.style.display === 'block')) {
            return;
        }
        this.element.style.display = isShow ? 'block' : 'none';
        this.documentEditor.resize();
    };
    HeaderFooterProperties.prototype.initializeHeaderFooter = function () {
        var _this = this;
        var elementId = 'header_footer_properties';
        this.element = ej.base.createElement('div', { id: this.documentEditor.element.id + elementId, styles: 'width:269px;' });
        var headerDiv = this.createDivTemplate('_header_footer', this.element, 'padding:10px;');
        var headerLabel = ej.base.createElement('label', { className: 'e-de-prop-header-label' });
        headerLabel.innerHTML = 'Header & Footer';
        var closeIcon = ej.base.createElement('span', {
            id: '_header_footer_close',
            className: 'e-de-icon-Close',
            styles: 'display:inline-block;float:right;cursor:pointer'
        });
        closeIcon.addEventListener('click', function () { _this.onClose(); });
        headerDiv.appendChild(headerLabel);
        headerDiv.appendChild(closeIcon);
        var optionsLabelDiv = this.createDivTemplate(elementId + '_options', this.element, 'padding-left: 10px');
        var optionsLabel = ej.base.createElement('label', { className: 'e-de-prop-label', styles: 'height:20px;' });
        optionsLabel.innerHTML = 'Options';
        optionsLabelDiv.appendChild(optionsLabel);
        var optionsDiv = this.createDivTemplate(elementId + '_optionsDiv', optionsLabelDiv);
        var firstPageDiv = this.createDivTemplate(elementId + '_firstPageDiv', optionsDiv, 'margin-bottom:3px;');
        var firstPage = ej.base.createElement('input', { id: 'firstPage', className: 'e-de-prop-sub-label' });
        firstPageDiv.appendChild(firstPage);
        this.firstPage = new ej.buttons.CheckBox({ label: 'Different First Page', change: this.changeFirstPageOptions, cssClass: 'e-de-prop-sub-label' });
        this.firstPage.appendTo(firstPage);
        this.firstPage.element.closest('.e-checkbox-wrapper').setAttribute('title', 'Different header and footer for first page.');
        var oddOrEvenDiv = this.createDivTemplate(elementId + '_oddOrEvenDiv', optionsDiv);
        var oddOrEven = ej.base.createElement('input', { id: 'oddOrEven', className: 'e-de-sub-prop-label' });
        oddOrEvenDiv.appendChild(oddOrEven);
        this.oddOrEven = new ej.buttons.CheckBox({ label: 'Different Odd & Even Pages', change: this.changeoddOrEvenOptions, cssClass: 'e-de-prop-sub-label' });
        this.oddOrEven.appendTo(oddOrEven);
        this.oddOrEven.element.closest('.e-checkbox-wrapper').setAttribute('title', 'Different header and footer for odd and even pages.');
        var optionsLine = ej.base.createElement('div', { className: 'e-de-prop-header-line', styles: 'margin-top:7px;' });
        optionsLabelDiv.appendChild(optionsLine);
        var positionLabelDiv = this.createDivTemplate(elementId + '_positionLabelDiv', this.element, 'padding-top:10px;padding-left: 10px;');
        var positionLabel = ej.base.createElement('label', { className: 'e-de-prop-label', styles: 'height:20px;' });
        positionLabel.innerHTML = 'Position';
        positionLabelDiv.appendChild(positionLabel);
        var positionDiv = this.createDivTemplate(elementId + '_positionDiv', positionLabelDiv);
        var headerTopDiv = this.createDivTemplate(elementId + '_headerTopDiv', positionDiv, 'margin-right:8px;display:inline-flex;margin-bottom:8px;');
        var headerTopLabel = ej.base.createElement('label', { className: 'e-de-prop-sub-label', styles: 'width: 128px;margin-top: 10px;' });
        headerTopLabel.innerHTML = 'Header from Top';
        headerTopDiv.appendChild(headerTopLabel);
        var headerFromTop = ej.base.createElement('input', { id: 'headerFromTop', className: 'e-de-prop-sub-label' });
        headerTopDiv.appendChild(headerFromTop);
        this.headerFromTop = new ej.inputs.NumericTextBox({ value: 36, cssClass: 'e-de-prop-header-numeric', width: 85, showSpinButton: false, format: 'n0', decimals: 2, max: 1584, min: 0 });
        this.headerFromTop.appendTo(headerFromTop);
        this.headerFromTop.element.parentElement.setAttribute('title', 'Distance from top of the page to top of the header.');
        var footerBottomDiv = this.createDivTemplate(elementId + '_footerBottomDiv', positionDiv, 'margin-right:8px;display:inline-flex;');
        var footerBottomLabel = ej.base.createElement('label', { styles: 'width:128px;margin-top: 10px;', className: 'e-de-prop-sub-label' });
        footerBottomLabel.innerHTML = 'Footer from Bottom';
        footerBottomDiv.appendChild(footerBottomLabel);
        var footerFromTop = ej.base.createElement('input', { id: 'footerFromTop', className: 'e-de-prop-sub-label' });
        footerBottomDiv.appendChild(footerFromTop);
        this.footerFromTop = new ej.inputs.NumericTextBox({ value: 36, cssClass: 'e-de-prop-header-numeric', width: 85, showSpinButton: false, format: 'n0', decimals: 2, max: 1584, min: 0 });
        this.footerFromTop.appendTo(footerFromTop);
        this.footerFromTop.element.parentElement.setAttribute('title', 'Distance from bottom of the page to bottom of the footer.');
        var positionLine = ej.base.createElement('div', { className: 'e-de-prop-header-line', styles: 'margin-top:10px;' });
        positionLabelDiv.appendChild(positionLine);
    };
    HeaderFooterProperties.prototype.createDivTemplate = function (id, parentDiv, style) {
        return createDivTemplate(id, parentDiv, style);
    };
    HeaderFooterProperties.prototype.onSelectionChange = function () {
        if (this.documentEditor.selection.sectionFormat.differentFirstPage) {
            this.firstPage.checked = true;
        }
        else {
            this.firstPage.checked = false;
        }
        if (this.documentEditor.selection.sectionFormat.differentOddAndEvenPages) {
            this.oddOrEven.checked = true;
        }
        else {
            this.oddOrEven.checked = false;
        }
    };
    return HeaderFooterProperties;
}());
var TextProperties = (function () {
    function TextProperties(documentEditor, id) {
        var _this = this;
        this.isInitial = true;
        this.showTextProperties = function (isShow) {
            if (isShow) {
                _this.onSelectionChange();
            }
            if (!isShow && _this.element.style.display === 'none' || (isShow && _this.element.style.display === 'block')) {
                return;
            }
            _this.element.style.display = isShow ? 'block' : 'none';
            _this.documentEditor.resize();
        };
        this.generateUniqueID = function () {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        };
        this.documentEditor = documentEditor;
        this.text = new Text(this.documentEditor);
        this.paragraph = new Paragraph(this.documentEditor);
        this.initializeTextProperties(id);
        this.wireEvents();
    }
    Object.defineProperty(TextProperties.prototype, "appliedHighlightColor", {
        get: function () {
            return this.text.appliedHighlightColor;
        },
        set: function (value) {
            this.text.appliedHighlightColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextProperties.prototype, "appliedBulletStyle", {
        get: function () {
            return this.paragraph.appliedBulletStyle;
        },
        set: function (value) {
            this.paragraph.appliedBulletStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextProperties.prototype, "appliedNumberingStyle", {
        get: function () {
            return this.paragraph.appliedNumberingstyle;
        },
        set: function (value) {
            this.paragraph.appliedNumberingstyle = value;
        },
        enumerable: true,
        configurable: true
    });
    TextProperties.prototype.initializeTextProperties = function (id) {
        this.element = ej.base.createElement('div', { id: this.documentEditor.element.id + 'id_' + this.generateUniqueID(), styles: 'width:269px;' });
        this.text.initializeTextPropertiesDiv(this.element);
        this.paragraph.initializeParagraphPropertiesDiv(this.element);
        this.paragraph.updateStyleNames();
    };
    TextProperties.prototype.wireEvents = function () {
        this.text.wireEvent();
        this.paragraph.wireEvent();
    };
    TextProperties.prototype.onSelectionChange = function () {
        this.text.onSelectionChange();
        this.paragraph.onSelectionChange();
    };
    return TextProperties;
}());
var ImageProperties = (function () {
    function ImageProperties(docEditor) {
        var _this = this;
        this.isWidthApply = false;
        this.isHeightApply = false;
        this.initializeImageProperties = function () {
            _this.element = ej.base.createElement('div', { id: _this.elementId + '_imageProperties', styles: 'width:269px;' });
            _this.element.style.display = 'none';
            _this.initImageProp();
            _this.wireEvents();
        };
        this.initImageProp = function () {
            var imageDiv = ej.base.createElement('div', { id: _this.elementId + '_imageDiv', className: 'e-de-property-div-padding', styles: 'border:0px' });
            _this.element.appendChild(imageDiv);
            var label = ej.base.createElement('label', { className: 'e-de-prop-label', styles: 'padding:3px' });
            label.textContent = 'Image';
            imageDiv.appendChild(label);
            var outerDiv = ej.base.createElement('div', { styles: 'margin-left:2px;margin-top:10px' });
            imageDiv.appendChild(outerDiv);
            _this.widthElement = _this.createImagePropertiesDiv('_widthDiv', outerDiv, '_widthInput', 'W', 'Width');
            _this.widthNumericBox = new ej.inputs.NumericTextBox({ min: 0, max: 23500, cssClass: 'e-de-image-property', showSpinButton: false, format: 'n0', decimals: 2 });
            _this.widthNumericBox.appendTo(_this.widthElement);
            _this.heightElement = _this.createImagePropertiesDiv('_heightDiv', outerDiv, '_heightInput', 'H', 'Height');
            _this.heightNumericBox = new ej.inputs.NumericTextBox({ min: 0, max: 23500, cssClass: 'e-de-image-property', showSpinButton: false, format: 'n0', decimals: 2 });
            _this.heightNumericBox.appendTo(_this.heightElement);
            var aspectRatioDiv = ej.base.createElement('div', { id: _this.elementId + '_aspectRatioDiv', styles: 'height:14px;margin-left:5px;float:left' });
            aspectRatioDiv.setAttribute('title', 'Aspect ratio');
            outerDiv.appendChild(aspectRatioDiv);
            var aspectRatio = ej.base.createElement('input', { id: _this.elementId + '_aspectRatio', className: 'e-de-prop-label' });
            aspectRatioDiv.appendChild(aspectRatio);
            _this.aspectRatioBtn = new ej.buttons.CheckBox({ label: 'Aspect ratio' }, aspectRatio);
        };
        this.createImagePropertiesDiv = function (id, outerDiv, inputId, spanContent, tooltip) {
            var divElement = ej.base.createElement('div', { id: _this.elementId + id, styles: 'position: relative;width: 100%;margin-right:6px; float:left;margin-bottom: 7px;' });
            divElement.setAttribute('title', tooltip);
            outerDiv.appendChild(divElement);
            var inputElement = ej.base.createElement('input', { id: _this.elementId + inputId, className: 'e-textbox', styles: 'width:100%;' });
            divElement.appendChild(inputElement);
            var spanElement = ej.base.createElement('span', { styles: 'position: absolute;left:8px;top:8px;color:#8C8C8C;' });
            spanElement.textContent = spanContent;
            divElement.appendChild(spanElement);
            return inputElement;
        };
        this.wireEvents = function () {
            _this.aspectRatioBtn.element.addEventListener('change', _this.onAspectRatioBtnClick);
            _this.widthNumericBox.element.addEventListener('click', function () { _this.isWidthApply = true; });
            _this.heightNumericBox.element.addEventListener('click', function () { _this.isHeightApply = true; });
            _this.widthNumericBox.element.addEventListener('keydown', _this.onImageWidth);
            _this.heightNumericBox.element.addEventListener('keydown', _this.onImageHeight);
            _this.widthNumericBox.element.addEventListener('blur', function () { _this.applyImageWidth(); _this.isWidthApply = false; });
            _this.heightNumericBox.element.addEventListener('blur', function () { _this.applyImageHeight(); _this.isHeightApply = false; });
        };
        this.onImageWidth = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyImageWidth(); _this.isWidthApply = false; }, 30);
            }
        };
        this.onImageHeight = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyImageHeight(); _this.isHeightApply = false; }, 30);
            }
        };
        this.applyImageWidth = function () {
            if (!_this.isMaintainAspectRatio) {
                var width = _this.widthNumericBox.value;
                var height = _this.heightNumericBox.value;
                if (width > _this.widthNumericBox.max) {
                    width = _this.widthNumericBox.max;
                }
                if (height > _this.heightNumericBox.max) {
                    height = _this.heightNumericBox.max;
                }
                if (!(width === null || height === null)) {
                    _this.documentEditor.selection.imageFormat.resize(width, height);
                }
            }
            else if (_this.isMaintainAspectRatio) {
                var width = _this.widthNumericBox.value;
                if (width > _this.widthNumericBox.max) {
                    width = _this.widthNumericBox.max;
                }
                var ratio = width / _this.documentEditor.selection.imageFormat.width;
                var height = _this.heightNumericBox.value * ratio;
                _this.heightNumericBox.value = height;
                if (!(width === null || height === null)) {
                    _this.documentEditor.selection.imageFormat.resize(width, height);
                }
            }
        };
        this.applyImageHeight = function () {
            if (!_this.isMaintainAspectRatio) {
                var width = _this.widthNumericBox.value;
                var height = _this.heightNumericBox.value;
                if (!(width === null || height === null)) {
                    _this.documentEditor.selection.imageFormat.resize(width, height);
                }
            }
            else if (_this.isMaintainAspectRatio) {
                var height = _this.heightNumericBox.value;
                var ratio = height / _this.documentEditor.selection.imageFormat.height;
                var width = _this.widthNumericBox.value * ratio;
                _this.widthNumericBox.value = width;
                if (!(width === null || height === null)) {
                    _this.documentEditor.selection.imageFormat.resize(width, height);
                }
            }
        };
        this.onAspectRatioBtnClick = function () {
            if (_this.isMaintainAspectRatio) {
                _this.isMaintainAspectRatio = false;
            }
            else {
                _this.isMaintainAspectRatio = true;
            }
        };
        this.documentEditor = docEditor;
        this.elementId = this.documentEditor.element.id;
        this.isMaintainAspectRatio = false;
        this.initializeImageProperties();
    }
    ImageProperties.prototype.showImageProperties = function (isShow) {
        if (this.element.style.display === 'block') {
            this.updateImageProperties();
        }
        if (!isShow && this.element.style.display === 'none' || (isShow && this.element.style.display === 'block')) {
            return;
        }
        this.element.style.display = isShow ? 'block' : 'none';
        this.documentEditor.resize();
    };
    ImageProperties.prototype.updateImageProperties = function () {
        this.widthNumericBox.value = this.documentEditor.selection.imageFormat.width;
        this.heightNumericBox.value = this.documentEditor.selection.imageFormat.height;
    };
    return ImageProperties;
}());
var TableProperties = (function () {
    function TableProperties(docEditor, imageProperty, textProperties) {
        var _this = this;
        this.isTopMarginApply = false;
        this.isRightMarginApply = false;
        this.isBottomMarginApply = false;
        this.isLeftMarginApply = false;
        this.borderColor = '#000000';
        this.initializeTablePropPane = function () {
            _this.tableProperties = ej.base.createElement('div', { id: _this.elementId + '_tableProperties', styles: 'width:269px;' });
            _this.initFillColorDiv();
            _this.initBorderStylesDiv();
            _this.initCellDiv();
            _this.initInsertOrDelCell();
            _this.initCellMargin();
            _this.initAlignText();
            _this.addTablePropertyTab();
            _this.wireEvent();
        };
        this.addTablePropertyTab = function () {
            _this.element = ej.base.createElement('div', { id: _this.elementId + '_propertyTabDiv', className: 'e-de-property-tab', styles: 'display:none;width:269px' });
            var items = [{ header: { text: 'Table' }, content: _this.tableProperties }, { header: { text: 'Text' }, content: _this.tableTextProperties.element }];
            _this.propertiesTab = new ej.navigations.Tab({ items: items, animation: { previous: { effect: 'None' }, next: { effect: 'None' } }, selected: _this.onTabSelection }, _this.element);
        };
        this.onTabSelection = function () {
            _this.documentEditor.resize();
        };
        this.wireEvent = function () {
            _this.shadingBtn.addEventListener('change', _this.changeBackgroundColor);
            _this.borderBtn.addEventListener('change', function (args) { setTimeout(function () { _this.borderColor = args.currentValue.hex; _this.tableOutlineBorder.element.focus(); }, 10); });
            _this.tableOutlineBorder.element.addEventListener('click', _this.onOutlineBorder);
            _this.tableAllBorder.element.addEventListener('click', _this.onAllBorder);
            _this.tableCenterBorder.element.addEventListener('click', _this.onInsideBorder);
            _this.tableLeftBorder.element.addEventListener('click', _this.onLeftBorder);
            _this.tableCenterVerticalBorder.element.addEventListener('click', _this.onVerticalBorder);
            _this.tableRightBorder.element.addEventListener('click', _this.onRightBorder);
            _this.tableTopBorder.element.addEventListener('click', _this.onTopBorder);
            _this.tableCenterHorizontalBorder.element.addEventListener('click', _this.onHorizontalBorder);
            _this.tableBottomBorder.element.addEventListener('click', _this.onBottomBorder);
            _this.insertRowAbove.element.addEventListener('click', _this.onInsertRowAbove);
            _this.insertRowBelow.element.addEventListener('click', _this.onInsertRowBelow);
            _this.insertColumnLeft.element.addEventListener('click', _this.onInsertColumnLeft);
            _this.insertColumnRight.element.addEventListener('click', _this.onInsertColumnRight);
            _this.deleteRow.element.addEventListener('click', _this.onDeleteRow);
            _this.deleteColumn.element.addEventListener('click', _this.onDeleteColumn);
            _this.horizontalMerge.element.addEventListener('click', _this.onMergeCell);
            _this.alignTop.element.addEventListener('click', _this.applyAlignTop);
            _this.alignBottom.element.addEventListener('click', _this.applyAlignBottom);
            _this.alignCenterHorizontal.element.addEventListener('click', _this.applyAlignCenterHorizontal);
            _this.topMargin.element.addEventListener('click', function () { _this.isTopMarginApply = true; });
            _this.rightMargin.element.addEventListener('click', function () { _this.isRightMarginApply = true; });
            _this.leftMargin.element.addEventListener('click', function () { _this.isLeftMarginApply = true; });
            _this.bottomMargin.element.addEventListener('click', function () { _this.isBottomMarginApply = true; });
            _this.topMargin.element.addEventListener('keydown', _this.onTopMargin);
            _this.rightMargin.element.addEventListener('keydown', _this.onRightMargin);
            _this.leftMargin.element.addEventListener('keydown', _this.onLeftMargin);
            _this.bottomMargin.element.addEventListener('keydown', _this.onBottomMargin);
            _this.topMargin.element.addEventListener('blur', function () { _this.applyTopMargin(); _this.isTopMarginApply = false; });
            _this.rightMargin.element.addEventListener('blur', function () { _this.applyRightMargin(); _this.isRightMarginApply = false; });
            _this.leftMargin.element.addEventListener('blur', function () { _this.applyLeftMargin(); _this.isLeftMarginApply = false; });
            _this.bottomMargin.element.addEventListener('blur', function () { _this.applyBottomMargin(); _this.isBottomMarginApply = false; });
        };
        this.getBorder = function (border) {
            var lineWidth = (_this.borderSize.content.indexOf('No Border') >= 0) ? 0 : parseInt(_this.borderSize.content, 0);
            var linestyle = (lineWidth === 0) ? 'Cleared' : 'Single';
            var borderSettings = {
                type: border,
                borderColor: _this.borderColor,
                lineWidth: lineWidth,
                borderStyle: linestyle
            };
            return borderSettings;
        };
        this.onOutlineBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('OutsideBorders'));
        };
        this.onAllBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('AllBorders'));
        };
        this.onInsideBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('InsideBorders'));
        };
        this.onLeftBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('LeftBorder'));
        };
        this.onVerticalBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('InsideVerticalBorder'));
        };
        this.onRightBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('RightBorder'));
        };
        this.onTopBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('TopBorder'));
        };
        this.onHorizontalBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('InsideHorizontalBorder'));
        };
        this.onBottomBorder = function () {
            _this.documentEditor.editor.applyBorders(_this.getBorder('BottomBorder'));
        };
        this.onTopMargin = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyTopMargin(); _this.isTopMarginApply = false; }, 30);
            }
        };
        this.onBottomMargin = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyBottomMargin(); _this.isBottomMarginApply = false; }, 30);
            }
        };
        this.onLeftMargin = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyLeftMargin(); _this.isLeftMarginApply = false; }, 30);
            }
        };
        this.onRightMargin = function (e) {
            if (e.keyCode === 13) {
                setTimeout(function () { _this.applyRightMargin(); _this.isRightMarginApply = false; }, 30);
            }
        };
        this.applyTopMargin = function () {
            if (!_this.isTopMarginApply) {
                return;
            }
            _this.documentEditor.selection.cellFormat.topMargin = (_this.topMargin.value > _this.topMargin.max)
                ? _this.topMargin.max : _this.topMargin.value;
        };
        this.applyBottomMargin = function () {
            if (!_this.isBottomMarginApply) {
                return;
            }
            _this.documentEditor.selection.cellFormat.bottomMargin = (_this.bottomMargin.value > _this.bottomMargin.max)
                ? _this.bottomMargin.max : _this.bottomMargin.value;
        };
        this.applyLeftMargin = function () {
            if (!_this.isLeftMarginApply) {
                return;
            }
            _this.documentEditor.selection.cellFormat.leftMargin = (_this.leftMargin.value > _this.leftMargin.max)
                ? _this.leftMargin.max : _this.leftMargin.value;
        };
        this.applyRightMargin = function () {
            if (!_this.isRightMarginApply) {
                return;
            }
            _this.documentEditor.selection.cellFormat.rightMargin = (_this.rightMargin.value > _this.rightMargin.max)
                ? _this.rightMargin.max : _this.rightMargin.value;
        };
        this.applyAlignTop = function () {
            _this.documentEditor.selection.cellFormat.verticalAlignment = 'Top';
        };
        this.applyAlignBottom = function () {
            _this.documentEditor.selection.cellFormat.verticalAlignment = 'Bottom';
        };
        this.applyAlignCenterHorizontal = function () {
            _this.documentEditor.selection.cellFormat.verticalAlignment = 'Center';
        };
        this.onMergeCell = function () {
            _this.documentEditor.editor.mergeCells();
        };
        this.onInsertRowAbove = function () {
            _this.documentEditor.editor.insertRow(true);
        };
        this.onInsertRowBelow = function () {
            _this.documentEditor.editor.insertRow(false);
        };
        this.onInsertColumnLeft = function () {
            _this.documentEditor.editor.insertColumn(true);
        };
        this.onInsertColumnRight = function () {
            _this.documentEditor.editor.insertColumn(false);
        };
        this.onDeleteRow = function () {
            _this.documentEditor.editor.deleteRow();
        };
        this.onDeleteColumn = function () {
            _this.documentEditor.editor.deleteColumn();
        };
        this.onSelectionChange = function () {
            if (_this.documentEditor.selection) {
                if (_this.documentEditor.editor && _this.documentEditor.editor.canMergeCells()) {
                    _this.horizontalMerge.disabled = false;
                }
                else {
                    _this.horizontalMerge.disabled = true;
                }
                if (_this.documentEditor.selection.contextType === 'TableText' || _this.documentEditor.selection.contextType === 'TableImage') {
                    _this.shadingBtn.value = _this.documentEditor.selection.cellFormat.background;
                }
                _this.topMargin.value = _this.documentEditor.selection.cellFormat.topMargin ? _this.documentEditor.selection.cellFormat.topMargin : 0;
                _this.bottomMargin.value = _this.documentEditor.selection.cellFormat.bottomMargin ? _this.documentEditor.selection.cellFormat.bottomMargin : 0;
                _this.rightMargin.value = _this.documentEditor.selection.cellFormat.rightMargin ? _this.documentEditor.selection.cellFormat.rightMargin : 0;
                _this.leftMargin.value = _this.documentEditor.selection.cellFormat.leftMargin ? _this.documentEditor.selection.cellFormat.leftMargin : 0;
            }
        };
        this.changeBackgroundColor = function (args) {
            if (!_this.documentEditor.isReadOnly) {
                _this.documentEditor.selection.cellFormat.background = args.currentValue.hex;
                setTimeout(function () { _this.documentEditor.focusIn(); }, 10);
            }
        };
        this.initFillColorDiv = function () {
            var fillDiv = ej.base.createElement('div', { id: _this.elementId + '_fillColorDiv', className: 'e-de-property-div-padding de-tbl-fill-clr' });
            _this.tableProperties.appendChild(fillDiv);
            var label = ej.base.createElement('label', { className: 'e-de-prop-sub-label', styles: 'margin-left:6px;margin-right:8px' });
            label.textContent = 'Fill';
            fillDiv.appendChild(label);
            var buttonStyle = 'width:92px;display:inline-flex;padding:3px';
            _this.shadingBtn = _this.createColorPickerTemplate(_this.elementId + '_tableShading', fillDiv, 'Fill color');
            fillDiv.lastElementChild.lastElementChild.lastElementChild.firstChild.classList.add('e-de-icon-BackgroundColor', 'e-de-colorpicker-icons');
        };
        this.initBorderStylesDiv = function () {
            var borderStyleDiv = ej.base.createElement('div', { className: 'e-de-property-div-padding' });
            _this.tableProperties.appendChild(borderStyleDiv);
            var label = ej.base.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Border Style';
            borderStyleDiv.appendChild(label);
            var parentDiv = ej.base.createElement('div', { id: _this.elementId + '_borderStyleDiv', styles: 'display:inline-flex;margin-right:9px;margin-bottom:3px' });
            var styleDiv = ej.base.createElement('div', { styles: 'width:120px;height:100px' });
            var div1 = ej.base.createElement('div', { className: 'e-btn-group' });
            styleDiv.appendChild(div1);
            var div2 = ej.base.createElement('div', { className: 'e-btn-group' });
            styleDiv.appendChild(div2);
            var div3 = ej.base.createElement('div', { className: 'e-btn-group' });
            styleDiv.appendChild(div3);
            var btnStyle = 'width:' + 40 + 'px;height:' + 34 + 'px';
            _this.tableOutlineBorder = _this.createButtonTemplate(_this.elementId + '_tableOutlineBorder', 'e-de-icon-OutsideBorder e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Outside borders');
            _this.tableAllBorder = _this.createButtonTemplate(_this.elementId + '_tableAllBorder', 'e-de-icon-AllBorders e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'All borders');
            _this.tableCenterBorder = _this.createButtonTemplate(_this.elementId + '_tableCenterBorder', 'e-de-icon-InsideBorders e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Inside borders');
            _this.tableLeftBorder = _this.createButtonTemplate(_this.elementId + '_tableLeftBorder', 'e-de-icon-LeftBorders e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle, 'Left border');
            _this.tableCenterVerticalBorder = _this.createButtonTemplate(_this.elementId + '_tableCenterVBorder', 'e-de-icon-InsideVerticalBorder e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle, 'Inside bertical border');
            _this.tableRightBorder = _this.createButtonTemplate(_this.elementId + '_tableRightBorder', 'e-de-icon-RightBorder e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle, 'Right border');
            _this.tableTopBorder = _this.createButtonTemplate(_this.elementId + '_tableTopBorder', 'e-de-icon-TopBorder e-de-tableprop-icons', div3, 'e-de-prop-font-button', btnStyle, 'Top border');
            _this.tableCenterHorizontalBorder = _this.createButtonTemplate(_this.elementId + '_tableCenterHBorder', 'e-de-icon-InsideHorizondalBorder e-de-tableprop-icons', div3, 'e-de-prop-font-button', btnStyle, 'Inside horizontal border');
            _this.tableBottomBorder = _this.createButtonTemplate(_this.elementId + '_tableBottomBorder', 'e-de-icon-BottomBorder e-de-tableprop-icons', div3, 'e-de-prop-font-button', btnStyle, 'Bottom border');
            parentDiv.appendChild(styleDiv);
            var styleTypeDiv = ej.base.createElement('div', { styles: 'width:120px;height:100px;padding-left:12px;', className: 'de-tbl-fill-clr' });
            _this.borderBtn = _this.createColorPickerTemplate(_this.elementId + '_tableBorderColor', styleTypeDiv, 'Border color');
            _this.borderBtn.value = '#000000';
            styleTypeDiv.lastElementChild.lastElementChild.lastElementChild.firstChild.classList.add('e-de-icon-HighlightColor', 'e-de-colorpicker-icons');
            var bordersizeButton = ej.base.createElement('button', { id: _this.elementId + '_tableBorderSize', styles: 'width:120px;height:28px;margin-top:8px' });
            styleTypeDiv.appendChild(bordersizeButton);
            _this.borderSize = _this.createBorderSizeDropdown('e-de-icon-StrokeSize', bordersizeButton);
            parentDiv.appendChild(styleTypeDiv);
            _this.borderSizeColorElement = document.getElementsByClassName('e-de-border-width');
            borderStyleDiv.appendChild(parentDiv);
        };
        this.initCellDiv = function () {
            var cellDiv = ej.base.createElement('div', { className: 'e-de-property-div-padding' });
            _this.tableProperties.appendChild(cellDiv);
            var label = ej.base.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Cell';
            cellDiv.appendChild(label);
            var parentDiv = ej.base.createElement('div');
            var btnStyle = 'width:' + 38 + 'px;height:' + 32 + 'px';
            _this.horizontalMerge = _this.createButtonTemplate(_this.elementId + '_tableOutlineBorder', 'e-de-icon-Cell e-de-tableprop-icons', parentDiv, 'e-de-prop-font-button', btnStyle, 'Merge cells');
            cellDiv.appendChild(parentDiv);
        };
        this.initInsertOrDelCell = function () {
            var tableOperationDiv = ej.base.createElement('div', { className: 'e-de-property-div-padding' });
            _this.tableProperties.appendChild(tableOperationDiv);
            var label = ej.base.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Insert / Delete';
            tableOperationDiv.appendChild(label);
            var parentDiv = ej.base.createElement('div', { styles: 'display:inline-flex' });
            var div1 = ej.base.createElement('div', { className: 'e-btn-group' });
            parentDiv.appendChild(div1);
            var div2 = ej.base.createElement('div', { className: 'e-btn-group' });
            parentDiv.appendChild(div2);
            var btnStyle = 'width:' + 38 + 'px;height:' + 32 + 'px;';
            _this.insertColumnLeft = _this.createButtonTemplate(_this.elementId + '_insertColumnLeft', 'e-de-icon-InsertLeft e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Insert columns to the left');
            _this.insertColumnRight = _this.createButtonTemplate(_this.elementId + '_insertColumnRight', 'e-de-icon-InsertRight e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Insert columns to the right');
            _this.insertRowAbove = _this.createButtonTemplate(_this.elementId + '_insertRowAbove', 'e-de-icon-InsertAbove e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Insert rows above');
            _this.insertRowBelow = _this.createButtonTemplate(_this.elementId + '_insertRowBelow', 'e-de-icon-InsertBelow e-de-tableprop-icons', div1, 'e-de-prop-font-button', btnStyle, 'Insert rows below');
            _this.deleteRow = _this.createButtonTemplate(_this.elementId + '_deleteRow', 'e-de-icon-DeleteRows e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle + 'margin-left:9px', 'Delete rows');
            _this.deleteColumn = _this.createButtonTemplate(_this.elementId + '_deleteColumn', 'e-de-icon-DeleteColumns e-de-tableprop-icons', div2, 'e-de-prop-font-button', btnStyle, 'Delete columns');
            tableOperationDiv.appendChild(parentDiv);
        };
        this.initCellMargin = function () {
            var cellMarginDiv = ej.base.createElement('div', { className: 'e-de-property-div-padding e-de-cellmargin-text' });
            _this.tableProperties.appendChild(cellMarginDiv);
            var label = ej.base.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Cell Margin';
            cellMarginDiv.appendChild(label);
            var parentDiv = ej.base.createElement('div', { styles: 'height: 60px;display:inline-flex' });
            var textboxDivStyle = 'width:' + 50 + 'px';
            var textboxParentDivStyle = 'width:' + 50 + 'px;float:left;margin-right:' + 9 + 'px';
            _this.topMargin = _this.createCellMarginTextBox('Top', _this.elementId + '_topMargin', parentDiv, textboxDivStyle, textboxParentDivStyle, 500, 'Top margin');
            _this.bottomMargin = _this.createCellMarginTextBox('Bottom', _this.elementId + '_bottomMargin', parentDiv, textboxDivStyle, textboxParentDivStyle, 500, 'Bottom margin');
            _this.leftMargin = _this.createCellMarginTextBox('Left', _this.elementId + '_leftMargin', parentDiv, textboxDivStyle, textboxParentDivStyle, 500, 'Left margin');
            _this.rightMargin = _this.createCellMarginTextBox('Right', _this.elementId + '_rightMargin', parentDiv, textboxDivStyle, textboxParentDivStyle, 500, 'Right margin');
            cellMarginDiv.appendChild(parentDiv);
        };
        this.initAlignText = function () {
            var alignmentDiv = ej.base.createElement('div', { className: 'e-de-property-div-padding', styles: 'border-bottom-width:0px' });
            _this.tableProperties.appendChild(alignmentDiv);
            var label = ej.base.createElement('label', { className: 'e-de-prop-label' });
            label.textContent = 'Align Text';
            alignmentDiv.appendChild(label);
            var parentDiv = ej.base.createElement('div', { styles: 'margin-bottom: 10px;' });
            var div = ej.base.createElement('div', { className: 'e-btn-group' });
            parentDiv.appendChild(div);
            var btnStyle = 'width:' + 38 + 'px;height:' + 32 + 'px;';
            _this.alignTop = _this.createButtonTemplate(_this.elementId + '_alignTop', 'e-de-icon-AlignTop e-de-tableprop-icons', div, 'e-de-prop-font-button', btnStyle, 'Align top');
            _this.alignBottom = _this.createButtonTemplate(_this.elementId + '_alignBottom', 'e-de-icon-AlignBottom e-de-tableprop-icons', div, 'e-de-prop-font-button', btnStyle, 'Align bottom');
            _this.alignCenterHorizontal = _this.createButtonTemplate(_this.elementId + '_alignCenterHorizontal', 'e-de-icon-AlignCenterTable e-de-tableprop-icons', div, 'e-de-prop-font-button', btnStyle, 'Align center');
            _this.alignCenterHorizontal.addEventListener('click', _this.applyAlignCenterHorizontal);
            alignmentDiv.appendChild(parentDiv);
        };
        this.createCellMarginTextBox = function (textboxLabel, textboxId, parentDiv, styles, parentStyle, maxValue, toolTipText) {
            var cellMarginParentDiv = ej.base.createElement('div', { styles: parentStyle });
            var cellMarginLabel = ej.base.createElement('label', { className: 'e-de-prop-sub-label' });
            cellMarginLabel.textContent = textboxLabel;
            cellMarginParentDiv.appendChild(cellMarginLabel);
            var cellMarginTextbox = ej.base.createElement('input', { className: 'e-textbox', id: textboxId, styles: styles });
            cellMarginParentDiv.appendChild(cellMarginTextbox);
            var cellMarginNumericText = new ej.inputs.NumericTextBox({ showSpinButton: false, min: 0, format: 'n0', max: maxValue }, cellMarginTextbox);
            parentDiv.appendChild(cellMarginParentDiv);
            cellMarginTextbox.setAttribute('title', toolTipText);
            return cellMarginNumericText;
        };
        this.createBorderSizeDropdown = function (iconcss, button) {
            var div = ej.base.createElement('div', { id: 'borderSizeTarget', styles: 'display:none' });
            var ulTag = ej.base.createElement('ul', {
                styles: 'display: block; outline: 0px; width: 120px; height: auto;',
                id: 'borderSizeListMenu'
            });
            div.appendChild(ulTag);
            var noneOption = _this.createDropdownOption(ulTag, 'No Border');
            noneOption.addEventListener('click', function () { _this.onBorderSizeChange('No Border'); });
            var oneOption = _this.createDropdownOption(ulTag, '1px');
            oneOption.addEventListener('click', function () { _this.onBorderSizeChange('1px'); });
            var oneHalfOption = _this.createDropdownOption(ulTag, '1.5px');
            oneHalfOption.addEventListener('click', function () { _this.onBorderSizeChange('1.5px'); });
            var twoOption = _this.createDropdownOption(ulTag, '2px');
            twoOption.addEventListener('click', function () { _this.onBorderSizeChange('2px'); });
            var threeOption = _this.createDropdownOption(ulTag, '3px');
            threeOption.addEventListener('click', function () { _this.onBorderSizeChange('3px'); });
            var fourOption = _this.createDropdownOption(ulTag, '4px');
            fourOption.addEventListener('click', function () { _this.onBorderSizeChange('4px'); });
            var fiveOption = _this.createDropdownOption(ulTag, '5px');
            fiveOption.addEventListener('click', function () { _this.onBorderSizeChange('5px'); });
            var borderOption = {
                target: div,
                iconCss: iconcss,
                cssClass: 'e-de-prop-bordersize',
                content: '1.5px'
            };
            var dropdown = new ej.splitbuttons.DropDownButton(borderOption);
            dropdown.beforeOpen = function () {
                div.style.display = 'block';
                for (var i = 0; i < _this.borderSizeColorElement.length; i++) {
                    _this.borderSizeColorElement[i].style.borderBottomColor = _this.borderColor;
                }
            };
            dropdown.beforeClose = function () { div.style.display = 'none'; };
            dropdown.appendTo(button);
            dropdown.element.setAttribute('title', 'Border width');
            return dropdown;
        };
        this.onBorderSizeChange = function (value) {
            _this.borderSize.content = value;
            setTimeout(function () { _this.tableOutlineBorder.element.focus(); }, 10);
        };
        this.createDropdownOption = function (ulTag, text) {
            var liTag = ej.base.createElement('li', {
                styles: 'display:block',
                className: 'ui-wfloating-menuitem ui-wfloating-menuitem-md de-list-items  de-list-item-size'
            });
            ulTag.appendChild(liTag);
            var innerHTML;
            if (text === 'No Border') {
                innerHTML = '<div>' + text + '</div>';
            }
            else if (text === '1.5px') {
                innerHTML = '<div>' + text + '<span class="ui-list-line e-de-border-width"  style="margin-left:10px;border-bottom-width:' + text + ';border-bottom-color:' + _this.borderColor + '"' + '></span></div>';
            }
            else {
                innerHTML = '<div>' + text + '<span class="ui-list-line e-de-border-width" style="margin-left:20px;border-bottom-width:' + text + ';border-bottom-color:' + _this.borderColor + '"' + '></span></div>';
            }
            var liInnerDiv = ej.base.createElement('div', {
                className: 'ui-list-header-presetmenu',
                id: 'ui-zlist0', innerHTML: innerHTML
            });
            liTag.appendChild(liInnerDiv);
            return liTag;
        };
        this.createDropDownBtn = function (id, styles, parentDiv, iconCss, content, items, target) {
            var buttonElement = ej.base.createElement('button', { id: id, styles: styles });
            parentDiv.appendChild(buttonElement);
            var dropDownBtn = new ej.splitbuttons.DropDownButton({ iconCss: iconCss, content: content, cssClass: 'e-de-prop-splitbutton' }, buttonElement);
            if (items) {
                dropDownBtn.items = items;
            }
            if (target) {
                dropDownBtn.target = target;
            }
            return dropDownBtn;
        };
        this.createColorPickerTemplate = function (id, divElement, toolTipText) {
            var inputElement = ej.base.createElement('input', { id: id });
            divElement.appendChild(inputElement);
            var colorPicker = new ej.inputs.ColorPicker({ showButtons: true, cssClass: 'e-de-prop-font-button e-de-prop-font-colorpicker' }, inputElement);
            colorPicker.element.closest('.e-de-prop-font-button').setAttribute('title', toolTipText);
            return colorPicker;
        };
        this.showTableProperties = function (isShow) {
            if (isShow) {
                if (_this.prevContext !== _this.documentEditor.selection.contextType) {
                    _this.propertiesTab.selectedItem = 0;
                    _this.tableTextProperties.appliedHighlightColor = _this.textProperties.appliedHighlightColor;
                    _this.tableTextProperties.appliedBulletStyle = _this.textProperties.appliedBulletStyle;
                    _this.tableTextProperties.appliedNumberingStyle = _this.textProperties.appliedNumberingStyle;
                }
                _this.onSelectionChange();
                _this.tableTextProperties.onSelectionChange();
                _this.textProperties.appliedHighlightColor = _this.tableTextProperties.appliedHighlightColor;
                _this.textProperties.appliedBulletStyle = _this.tableTextProperties.appliedBulletStyle;
                _this.textProperties.appliedNumberingStyle = _this.tableTextProperties.appliedNumberingStyle;
            }
            if (!isShow && _this.element.style.display === 'none' || (isShow && _this.element.style.display === 'block')) {
                return;
            }
            _this.element.style.display = isShow ? 'block' : 'none';
            _this.documentEditor.resize();
            _this.prevContext = _this.documentEditor.selection.contextType;
        };
        this.documentEditor = docEditor;
        this.tableTextProperties = new TextProperties(docEditor, 'textProperties');
        this.imageProperty = imageProperty;
        this.elementId = this.documentEditor.element.id;
        this.initializeTablePropPane();
        this.prevContext = this.documentEditor.selection.contextType;
        this.textProperties = textProperties;
    }
    TableProperties.prototype.createButtonTemplate = function (id, iconcss, div, buttonClass, styles, toolTipText, content, iconPos) {
        var buttonElement = ej.base.createElement('Button', { id: id, styles: styles });
        div.appendChild(buttonElement);
        var btn = new ej.buttons.Button({
            cssClass: buttonClass, iconCss: iconcss, iconPosition: (iconPos ? iconPos : 'Left'),
            content: content ? content : ''
        });
        btn.appendTo(buttonElement);
        buttonElement.setAttribute('title', toolTipText);
        return btn;
    };
    return TableProperties;
}());
var PropertiesPane = (function () {
    function PropertiesPane(docEditor, text, table, headerFooter, image, toc) {
        var _this = this;
        this.initializeProperitesPane = function () {
            _this.element = ej.base.createElement('div', { className: 'e-de-property-pane' });
            _this.element.appendChild(_this.textProperties.element);
            _this.element.appendChild(_this.tableProperties.element);
            _this.element.appendChild(_this.headerFooterProperties.element);
            _this.element.appendChild(_this.imageProperties.element);
            _this.element.appendChild(_this.tocProperties.element);
            _this.documentEditor.element.parentElement.appendChild(_this.element);
        };
        this.showPropertiesPane = function (isShow) {
            _this.element.style.display = isShow ? 'block' : 'none';
            _this.documentEditor.resize();
        };
        this.documentEditor = docEditor;
        this.textProperties = text;
        this.tableProperties = table;
        this.imageProperties = image;
        this.headerFooterProperties = headerFooter;
        this.tocProperties = toc;
        this.initializeProperitesPane();
    }
    return PropertiesPane;
}());
var ToolBar = (function () {
    function ToolBar(docEditor, parentElement, properties) {
        var _this = this;
        this.isPropertiesPaneEnabledIn = true;
        this.isReadOnly = false;
        this.showPropertiesPane = true;
        this.showHeaderProperties = false;
        this.isToolBarBtnClick = false;
        this.isContentChange = false;
        this.initializeToolbarItems = function () {
            var toolBarItemsDiv = ej.base.createElement('div', { styles: 'padding:6px;border:none', className: 'e-de-toolbar' });
            _this.toolbar = new ej.navigations.Toolbar({
                clicked: _this.onToolbarClick,
                items: [
                    {
                        prefixIcon: 'e-de-icon-New tb-icons e-de-icons', tooltipText: 'Create a new document.', id: 'new', text: 'New',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-Open tb-icons e-de-icons', tooltipText: 'Open a document.', id: 'open', text: 'Open',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        type: 'Separator', cssClass: 'e-de-seperator'
                    },
                    {
                        prefixIcon: 'e-de-icon-Undo tb-icons e-de-icons', tooltipText: 'Undo the last operation (Ctrl+Z).', id: 'undo', text: 'Undo',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-Redo tb-icons e-de-icons', tooltipText: 'Redo the last operation (Ctrl+Y).', id: 'redo', text: 'Redo',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        type: 'Separator', cssClass: 'e-de-seperator'
                    },
                    {
                        prefixIcon: 'e-de-icon-Picture tb-icons e-de-icons', tooltipText: 'Insert inline picture from a file.', id: 'image', text: 'Picture',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-Table tb-icons e-de-icons', tooltipText: 'Insert a table into the document', id: 'table', text: 'Table',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-Link tb-icons e-de-icons', tooltipText: 'Create a link in your document for quick access to webpages and files (Ctrl+K).', id: 'link', text: 'Link',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-Bookmark tb-icons e-de-icons', tooltipText: 'Insert a bookmark in a specific place in this document.', id: 'bookmark', text: 'Bookmark',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-TableOfContent tb-icons e-de-icons', tooltipText: 'Provide an overview of your document by adding a table of contents.', id: 'toc', text: 'Table of Contents',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        type: 'Separator', cssClass: 'e-de-seperator'
                    },
                    {
                        prefixIcon: 'e-de-icon-Header tb-icons e-de-icons', tooltipText: 'Add or edit the header.', id: 'header', text: 'Header',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-Footer tb-icons e-de-icons', tooltipText: 'Add or edit the footer.', id: 'footer', text: 'Footer',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-PageSetup tb-icons e-de-icons', tooltipText: 'Open the page setup dialog.', id: 'pagesetup', text: 'Page Setup',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-PageNumber tb-icons e-de-icons', tooltipText: 'Add page numbers.', id: 'pagenumber', text: 'Page Number',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        type: 'Separator', cssClass: 'e-de-seperator'
                    },
                    {
                        prefixIcon: 'e-de-icon-Find tb-icons e-de-icons', tooltipText: 'Find text in the document (Ctrl+F).', id: 'find', text: 'Find',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        type: 'Separator', cssClass: 'e-de-seperator'
                    },
                    {
                        prefixIcon: 'e-de-icon-Paste tb-icons e-de-icons', tooltipText: 'Toggle between the internal clipboard and system clipboard.\r\n\n Access to system clipboard through script is denied due to browsers security policy. Instead, \r\n 1. You can enable internal clipboard to cut, copy and paste within the component.\r\n 2. You can use the keyboard shortcuts (Ctrl+X, Ctrl+C and Ctrl+V) to cut, copy and paste with system clipboard.', id: 'useLocalClipboard', text: 'Local Clipboard',
                        cssClass: 'e-de-toolbar-btn'
                    },
                    {
                        prefixIcon: 'e-de-icon-Lock tb-icons e-de-icons', tooltipText: 'Restrict editing.', id: 'restrictEdit', text: 'Restrict Editing',
                        cssClass: 'e-de-toolbar-btn'
                    }
                ]
            });
            _this.toolbar.appendTo(toolBarItemsDiv);
            toolBarItemsDiv.style.width = 'calc(100% - 6%)';
            _this.toolBarDiv.appendChild(toolBarItemsDiv);
            var divElement = ej.base.createElement('div', { styles: 'float: right;width: auto;background-color: #fff;position:absolute;top:63px;right:20px;' });
            _this.showHideButton = ej.base.createElement('button', {
                className: 'e-de-togglebutton',
                id: 'showHidePane',
                styles: 'float:right;box-shadow: none;position:relative;background:transparent;border:none;'
            });
            _this.showHideButton.setAttribute('title', 'Show or hide property pane.');
            divElement.appendChild(_this.showHideButton);
            _this.toolBarDiv.appendChild(divElement);
            _this.togglePropPane = new ej.buttons.Button({ iconCss: 'e-de-icon-ShowHidePane' }, _this.showHideButton);
            _this.togglePropPane.element.addEventListener('click', _this.onPropertyPaneClick);
            document.getElementById('showHidePane').firstChild.classList.add('e-pane-enabled');
            var tocElement = document.getElementById('toc').getElementsByTagName('div')[0];
            _this.onTextWrapTOCButton(tocElement);
            var pageSetupElement = document.getElementById('pagesetup').getElementsByTagName('div')[0];
            _this.onTextWrap(pageSetupElement);
            var pageNumberElement = document.getElementById('pagenumber').getElementsByTagName('div')[0];
            _this.onTextWrap(pageNumberElement);
            var localClipboardElement = document.getElementById('useLocalClipboard').getElementsByTagName('div')[0];
            _this.onTextWrap(localClipboardElement);
            var restrictEditElement = document.getElementById('restrictEdit').getElementsByTagName('div')[0];
            _this.onTextWrap(restrictEditElement);
        };
        this.initializeCreateNewDocumentDialog = function () {
            _this.newDialog = new ej.popups.Dialog({
                header: 'New',
                showCloseIcon: true,
                closeOnEscape: true,
                isModal: true,
                beforeOpen: function () { _this.documentEditor.focusIn(); },
                buttons: [
                    {
                        'click': function () {
                            if (_this.documentEditor.documentName === '') {
                                _this.documentEditor.documentName = 'Untitled';
                            }
                            _this.loadDocumentTemplate();
                        },
                        buttonModel: {
                            content: 'Ok',
                            cssClass: 'e-de-template-btn-height',
                            isPrimary: true
                        }
                    },
                    {
                        'click': function () {
                            _this.newDialog.hide();
                        },
                        buttonModel: {
                            cssClass: 'e-de-template-btn-height',
                            content: 'Cancel'
                        }
                    }
                ],
                content: "<div id='mainContent'>" +
                    "<input type='text' class='e-input' id='docText' name='fileName' placeholder='Enter file name'>" +
                    "<div id=templateDiv><div id='blanktemplate' class='template'><div id='Blank' class='innerTemplate'>" +
                    "<img style='max-width:100%' class='image' src='data:image/jpg;base64,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HCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIDOQJ9gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APf6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k='/></div>" +
                    "<label for='blank' class='labelDiv'>Blank</label></div>" +
                    "<div id='notestemplate' class='template'><div id='Notes' class='innerTemplate'>" +
                    "<img style='max-width:100%' class='image' src='data:image/jpg;base64,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HCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIDOQJ9gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APf6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoo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KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPnH4yf8AJQZv+veL+VekfBT/AJEN/wDr9k/9BWvN/jJ/yUGb/r3i/lXpHwU/5EN/+v2T/wBBWgD0aiiigD4yru9L+LXiTSNLtdOtksTBbRiJN8JJwBgZO6vRf+FG+Gf+f7V/+/0f/wAbo/4Ub4Z/5/tX/wC/0f8A8boA4X/hdfir/nnp3/fhv/iqP+F1+Kv+eenf9+G/+Kruv+FG+Gf+f7V/+/0f/wAbo/4Ub4Z/5/tX/wC/0f8A8boA4X/hdfir/nnp3/fhv/iq674cfEfXPFXidtO1FbQQC3eX91GVOQVA5yfWrn/CjfDP/P8Aav8A9/o//jdbXhf4aaN4S1Y6lYXN/JMYmi2zyIVwSD2UHPHrQB1l7/x43H/XJv5V8c19lSxiWJ42yA6lTj3rzX/hRvhn/n+1f/v9H/8AG6APTa8k+Nvhqa8srTX7aMubVTDcADJEZOVb6Ak5/wB6vW6bJGksbRyIro4KsrDIIPUEUAfKHhXxVqHhHVxf2O1gy7JYX+7IvofT2Ney2Hxu8OXEIN5bXtpLj5lCCRfwIOT+QqHxH8FNL1GZ7jRrptOkbkwsu+In25yv6/SuPm+CHieN8R3Wmyr6iVx+eVoA7a/+N3hy3hJs7a9u5cfKpQRr+JJyPyNeM+KfFOoeLdXOoX5VcLsiiT7sa+g/qa7S0+BviGVx9qv9OgTvtZ3b8toH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t/8A0YtAH1nRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUARPbQStukhjdvVlBNN+x2v8Az7Q/9+xU9FAEcdvDE26OGNDjGVUCpKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApkkMU2PMjR8dNyg4p9FAEH2O1/wCfaH/v2KVbS2Vgy28QIOQQg4qaigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAorD/4THw9/wBBa3/M/wCFaGn6tYatG72F0k6ocMU7GgC5RUF1e2tjEJbu5ht4y20PNIEBPpk9+DRa3trfRGW0uYbiMNtLwyBwD6ZHfkUAT0UVR1HWtN0lQb+8ig3DIVj8x+gHJoAvUViWXi7QdRuI4LXUEeWQ4RCjKSfxArboAKKKKACiiigAooooAKKKKACiiigAooooAKKiuLmC0gae5mjhhXG6SRgqjJwMk+9R2mo2N/v+x3lvc7Mb/JlV9uemcHjofyoAs0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRTZJEhieWV1SNFLM7HAUDqSewoAdRVS11XTr6UxWl/a3EgXcUhmVyB64B6cirdABRRRQAUUUUAFFFFABRRmigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKo/wBs6V9q+y/2nZ/aN/l+V56792cbcZznPGKAL1FFGecd6ACiiigAooooAKKKKACiiigAooqC6vbWxiEt3cw28ZbaHmkCAn0ye/BoAnoqC1vbW+iMtpcw3EYbaXhkDgH0yO/IqegAooooAKKKKACiiigAooozjrQAUUUUAFFFFABRRRQAUUUUAFFFFABRRTZJEhieWV1SNFLM7HAUDqSewoAdRVS11XTr6UxWl/a3EgXcUhmVyB64B6cirdABRRRQAUUUUAFFFFABRRRQAUUZ5x3ooAKKKKACiiigAooooAKKKKACimySJDE8srqkaKWZ2OAoHUk9hVa11XTr6UxWl/a3EgXcUhmVyB64B6cigC3RVa71GxsNn2y8t7bfnZ50qpux1xk89R+dSW9zBdwLPbTRzQtnbJGwZTg4OCPegCWiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopGZUQu7BVUZJJwAKAForAm8a+HIJvKfVYi3qisw/MAitWw1G01S1FzZTrNCTjeucZ/GgC1RRRQAUUZx1ooAKKKKACiiigAooooAKKKKACignAyelFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVa71GxsNn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lxJ4t8FzxvNPL5DN8u6TzYn9uen6GgD2Sisfw14gg8R6ULqNfLlU7Jos/db/AA9K4C41zVtF8ffZbnUbl7NLoZR3JHlsePyB/SgD1eiivJvG/ifUofFE9tY388EMCrHticgFsZJ+vOPwoA9ZornPA+qSat4XgmnlaW4jZopXY5JIORn8CKj8e6tNpPhpntpmiuJpVjR0OGHc4/AEfjQB09Fcd8O59RvdIuL3ULua48yXZH5rlsBRyR9Sf0rH+I+s6lpusWkdlfT26Nb7mWNyATuPNAHpNFea3WseIPF9y1p4fZ4LGEBZLnfs3t6luv4DnufbJ1Lwp4r0S3a+F40qxjc721w5ZB68gH8qAPYKK4bwB4sudZMunag4kuIk3xy4wXXOCD7jIruaACqt3pmn37q95Y21wyjCmaJXIHtkVaooA8avoIbX4pQw28UcUS38AVI1CqOU6AV7LXj2q/8AJWY/+whB/NK9hoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA8O8MaZHq3jOG2mUNCJXkkU9CFycH6nAr3EAAAAYA7V494A/5Hk/7stew0Acf8Sb9rTwv5CMQ11MsZx/dGWP8AIfnVD4c/2Zp2hPdT3drHdXMhzvlUMFHAHJ9cn8aX4qRMdHsZR91bgqfqVOP5Gsbw14BtNd0KDUHv5Y3kLBkVAQpDEfyAP40Aelf2zpf/AEErP/v+v+Neb/ExNPnuLO/s7iCWZwY5RFIGyBgqTj8R+Van/CqbL/oJ3H/fsUf8Kpsv+gncf9+xQB1HhK7a98KabO7bm8kIT6lTt/pXkfh7TE1fxhBaSruiaZnkHqq5Yj8cY/GvZdD0pNE0eDTo5WlSHdh2GCcsW/rXlHgeZIvHkIfA3tKgJ9cH/CgD2YAKAAAAOABWdr2lRazotzZSKCXQmM/3XH3T+daVNkkWKJ5HOERSzH0AoA8o+F180OuXNkSfLnh3Y/2lPH6E074qf8hyy/69v/ZjVT4dBpvGXmquAIpHYDsDx/MirfxU/wCQ5Zf9e3/sxoA9It7dbvw/FbOzKs1qIyy4yAUxkZ71naB4P03w5cy3FpJcSSSJsJmZTgZzxhR/kVPc6omi+El1CRdwhtkIXONzEAAfmRXmllbeIfH95K0t2VtkPzliRGmegVR1P+SaAPV7jWdLtc/aNRtIsdnmUH+deS/EDWLHWNciksJBLHFCI2kAwGOSePUc101t8KrJQPtWpXEh7+Uip/PNcv450Kx0DUbS2sVcI8G9i7bix3EUAev6b/yC7T/rgn/oIryLSIx4o+Ifm3GHied5mB5BReVH04UV67pv/ILtP+uCf+givJfh5/o/jRIpMBzHImD6gZ4/I0AeyVj+JtCTxFoz2RkEUm9XjkK7tpB9PpkfjWxUVxcQ2lu89xKsUSDLO5wAKAMTwvoT+F9JntprsToZDKGCbdowAe59K828MNb6x42N9qcsSx7nuW85gATn5Rz6Ejj2r1cX9nrOn3aafdw3B8tkPltuwSDjNeOeE9Bh8Rau9lPcPABC0ilQCSQQMfkT+VAHtH9s6X/0ErP/AL/r/jWT4lm0fVvD15avf2bMYy8f75SQ4GVI59f51g/8Kpsv+gncf9+xR/wqmy/6Cdx/37FAFD4VXbLf6hZ7vleJZQvuDj/2YV6hXLeG/BNv4b1GS8ivJZmeIxbXUAAEg5/8drqaACuf8b/8ibqX+4v/AKEK6Cuf8b/8ibqX+4v/AKEKAMP4V/8AIDvf+vn/ANlFV/iv/wAeumf78n8lqx8K/wDkB3v/AF8/+yiq/wAV/wDj10z/AH5P5LQB1Hg7/kUNM/64/wBTW5WH4O/5FDTP+uP9TW5QAVU1SyXUtKurJsYniZMnsSOD+dW6KAPJvhleNaeIrqwkyvnxH5T/AH0P+Batf4qXuywsLENzJI0rAeijA/8AQj+VYOrr/wAI38TFufuwtcLPnp8j/e/m1WfFf/E9+JFtpw+aONo4CO2PvN+hP5UAZHiPSH8PSaLPENrvapIxx0lU5b+Yr1+fVIo9AfVVx5QtvtC57jbuFcx8TrD7R4eiuwPmtZhk/wCy3B/XbWDNrm74SxQ7/wB6Zvsh57A7v/QcD8aAIPhpZNe+JJ9Qly32aMtu/wBt+P5bq9O1n/kB6h/17Sf+gmub+Gun/ZPDP2lhh7uUv/wEfKP5E/jXSaz/AMgPUP8Ar2k/9BNAHn3wo/4+tU/3I/5tVr4r/wDHrpn+/J/Jaq/Cj/j61T/cj/m1Wviv/wAeumf78n8loA6jwd/yKGmf9cf6mo/G/wDyJupf7i/+hCpPB3/IoaZ/1x/qaj8b/wDIm6l/uL/6EKAOR+FenxvPf6g6gvGFijPpnJb+Q/WvTq8++FP/ACDdR/67L/KvQaAPJvinGq+ILRwMM1sM++GavVLb/j1h/wBxf5V5b8VP+Q5Zf9e3/sxr1K2/49Yf9xf5UAS0hAZSrAEEYIPelooA8c0knwr8RvszErD5xgOe8b/dJ/NT+FewTSpBBJNI22ONSzH0AGTXmPxR00w6hZ6nGMCVfKcj+8vIP5H9K0vEniUT/Dm2nR/3+oKsLY7Ef6z+RH40Ac54VgfxN48a/mXKJI104PbB+Ufnj8q73x5etZeEbsocPNthB9mPP6ZrO+GelfZNBkv3XEl4/wAv+4vA/Xd+lT/EqNn8JMw6JOjH6cj+tAGV8LNMjFrd6o6ZkZ/IjJ7AAE4+uR+VeiVxXwwlV/DE0YPzJctkfVVIrtaAPPPinpkbWdpqiqBKr+S5HdSCRn6EH863fAN6974RtPMJZ4S0JJPYHj9CKo/E6VU8LxxnG6S5UAfQMf8AP1qT4aIy+EwSMBrhyPccD+lAHHeJv+Spn/r5tv8A0FK9hrx7xN/yVM/9fNt/6Clew0AZviL/AJFnVv8Arzm/9ANcR8Jv+Yv/ANsf/Z67TxNIsXhbVWbobSRfxKkD+dcX8Jv+Yv8A9sf/AGegDmtSshqXxEuLI5CzX5RiOwLc/pXtcMMdvCkMKKkUahVVRgADtXkMP/JWT/1/t/M17DQAUUUUAFeL20Q8T/EZlnG6KW5ZmH/TNM4H5KBXtFeNeDSLX4hpFLw3mTR/jhv8KAPZAAoAAAA4AFU9X06LVtJubGZQVlQgZ7N2P4HBq7SMwVSzEAAZJPagDyT4ZXklt4kms2JCTwkFf9pTkfpu/OrPxT0/ytSs9QUcTRmN8f3lOR+h/Ss/wCTP46WVF+XbK5wOgIP+Iru/iBp/2/wncMoy9swnX6Dg/oT+VAGtomorf+HrO/kYfPAGkY9iB836g15TommnxTquuXTqSTBLMmR0kY/KP51qaDrn2f4Z6tDuxLAxiT6S8D9dxra+F1j5Oh3V4RhribaPdVHH6lqAM34VX2JdQ09j1VZkH0+Vv5rUXxUvt9/Y2CtxFGZWHuxwP/QT+dUtHH/CPfFA2vSJp2hA6fK/KfzWi4X/AIST4pGP70K3IU+myMc/ntP50Ael+HdP/srw9Y2ZGGjiG8f7R5b9Sa87+Kn/ACHLL/r2/wDZjXq9eUfFT/kOWX/Xt/7MaAO/8LWEem+GbCCNQC0KyOQOrMMk/r+la7KGUqwBUjBB6Gq2m/8AILtP+uCf+girVAHj3w9Hl+Nii5CiOVcZ7V7DXj3gD/keT/uy17DQAUUUUAePar/yVmP/ALCEH80r2GvHtV/5KzH/ANhCD+aV7DQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB494A/wCR5P8Auy17DWPp/hbRdLvvttnZ+VcYI3+a7devBJFbFAGP4n0f+3dAubJcCUgPET/fHI/Pp+NeceDvFbeGLifTNTjkW2Lkn5fmhfoePTivX6xNb8J6Trx8y7gKz4x50R2vj37H8QaAI38beHEhMn9qREAZwFYk/hjNeb67qd1468SQW9jC4iX93Crdhn5nb0/wArql+FemCTLX92Y/7oCg/nj+ldVo/h/TNCiKWFsEZhh5GO52+pP8ulAFyxtI7Cwt7SL/AFcEaxr7gDFeARy3Fvqr3Vru823lMoYDO3DdfpX0NXjvgNVfxu6OoZWSUEEZBFAHb6T8QNFvrNXurhbO4A+eOQHGfY9x+tYXjHx5aXGnS6bpEhlMw2SzgEKF7gZ6k9PpWtqPw10a8maW3ea0ZjkpGQU/I9PzqTS/h1omnTLNMJbyReQJiNgP+6Ov45oAofDTQpLKxm1W4QrJdALECOfLHOfxP8hWL8VP+Q5Zf9e3/sxr1cAAAAYA7Vk6r4a0jW50m1G086RF2KfMdcDOf4SKAMrxNZzX3w9aOBSzrBFJtA5IXBP6Zrl/h34m07Sra50+/lWDzJfNjkYfKeACCe3QfrXqEcaRRJEgwiKFUdcAVymq/DrRdRnaeLzbORuSISNhP+6Rx+GKAL93408P2cBlbUopcdEhO9j+X9a8n8Ua1c+INTGoSwNDblfLt1I42g+vc5PNeh2Hwz0W1lWS4knuyDnY7BUP4Dn9a2dc8K6brlhDayxmAQf6loQFKD0AxjHA4oAm0HVbDUNMtltLuGZ0gTeiuCy8Y5HUc+teaeLdOuvC/i5dWtUxDLL58TY+UN1ZT+vHoa77w14PtPDUs00FzNNJKu1t+AMZzwAP61tXtja6javbXkCTQv1Rxkf/AK6AMDTvH2g3tosk12LWXHzxSg5B9j0Irl/HXjSz1GwOlaZIZUdgZpsEKQDkKM9ecc+1a118LtJlkLW91dQAn7mQ4H0yM/rWjpHgHRNJmWfy5LqZTlWnIIU+wAA/PNADfAGjS6T4dDXCFJ7p/NZT1VcYUH8OfxrhtctbzwX4yGoWyfuHkMsJP3WU/eQ/TJH5GvY6rX2n2mp2rW17Ak0LdVYfqPQ+4oAwrDx7oF7bLJJeC2kx80UwIIP16Gud8Z+OrO502XTNKkMzTDbLMAQoXuBnqT09MVeufhbpMkha3u7qEE/dJDAfTjNaOk+ANE0uZZjHJdSqcq1wQQD7KAB+eaAKnw50OXTNHlvLlCk14QVUjkIOn55J/Ku0oooAK5/xv/yJupf7i/8AoQroKr31jb6lZSWl3H5kEow6biM856jmgDi/hX/yA73/AK+f/ZRVf4rg/ZNMOOPMk5/AV2ulaLp+iQPDp1v5MbtvYb2bJxj+In0putaJZa9YG0vUYpncrIcMh9QaAMPwbrulnw9ptl9ugF0F8vyS2G3ZPGK62uL0z4cWGm6nBere3LtBIJEUhQMj14rtKACiiigDzj4q6fmOw1JR90mBz9fmX+TVl/DuGXU/F02o3Db3hiaQsf7zfL/ImvUNS0yz1ezNpfQ+dASGK7ivI6cgg1BpOgaXofm/2daiDzsb/nZs4zj7xPqaAF16x/tPQb6zAy0sLBf97GR+oFeCRvPOkVkhJVpcqnq5wP6CvoysGHwZ4ft75LyLTws6SeYrea5AbOc4LY60AaunWaafpttZpjbBEsYI74GM1HrP/ID1D/r2k/8AQTV2mTQx3EEkMq7o5FKMM4yCMGgDzT4Uf8fWqf7kf82q18VwfsmmHHHmSc/gK7DSfD2laG8rada+QZQA58xmzjp94n1p+taJZa9YG0vUYpncrIcMh9QaAMPwbrulnw9ptl9ugF0F8vyS2G3ZPGKu+N/+RN1L/cX/ANCFZemfDiw03U4L1b25doJBIikKBkevFdZfWNvqVlJaXcfmQSjDpuIzznqOaAOG+FP/ACDdR/67L/KvQaz9K0PTtEikj0638lJCGcb2bJ/4ETWhQB5R8VP+Q5Zf9e3/ALMa9Stv+PWH/cX+VZ2q+GtI1udJtRtPOkRdinzHXAzn+EitVVCIFUYAGAKAFooooA57xtpn9qeFbtFXMkI8+P6ryf0yPxrxm2F3qT2emIxYeaVhXspcgH+Qr3vVr6LTNJur2YApDGWwf4j2H4nA/GvLvhrpf23xBJfuo8u0TI443tkD9N36UAerWVrHY2UFpCMRwxiNfoBioNZ01NX0e6sHIAmjKgns3UH8CBV6igDxjw1rlx4M1y4tNQhcQuQk6DqpHRh69fxBr0j/AITbw55Pm/2pFjGcbW3fljOasa14Z0vX1H223zKowsyHa4HpnuPY1zP/AAqvTPNz9vu/L/u/Ln88f0oA5XxNrtx4y1u3tNPhkMCEpBH3cnqx9On4AV6xommLo+i2lgpB8lAGI6FupP5k1X0XwzpWgKTZW+JWGGmkO5yPTPYewrXoA8d8exz6d44N+F/1nlTRE9CVAH81r0HT/G2g31okzX8Vu5HzRTNtZT6c9fqK0dX0Ww1y1+z38AkQHKkHDKfUGuTf4V6YZsrf3ax/3TtJ/PH9KAKXi/xUmvQ/2HoYa48w7ppQCBtXnA9uMk+1Hwm/5i//AGx/9nrsNI8LaTottLDa25JlXZJJI2Xceme34YqfSdA0zQ/O/s228jztvmfvGbOM4+8T6mgDzCH/AJKyf+v9v5mvYaxx4W0VdW/tQWf+m+YZfN81/veuM4/StigAooooAK8i8caXdaD4oXWbUFYppRMjgcLIOSD9Tz75Neu1DdWlvfWz291Ck0LjDI4yDQBzWk/EDRb6zV7q4WzuAPnjkBxn2PcVj+L/AB7Ztp0thpExmlmUo8yghUU9cZ6k/pVu7+F+jzOWt7i6t8/w7g6j8xn9at6Z8OtD0+VZZVlvHXkCcgr/AN8gc/jmgDM+Gegy2ltNq1zGUa4UJCCOdnUn6E4x9K7y4gS5tpYJBmOVCjD2IwakAAAAGAO1FAHzvcrcafLeaa7EBZdsq+pQkD+Zr3LwxY/2d4Z0+2xhlhDMP9pvmP6k1BeeDdAv72S7udPEk8jbnbzXGT9A2K3QMDA6UAeUfEq2ex8SWepQ/KZYwQ3+2h6/kVqx8LrFpr+/1STkooiUnuzHJP6D8677VtC03XI4k1G289YiSnzsuCev3SKk0vSLHRrU22n24hhLFyu4tknAzkknsKALteUfFT/kOWX/AF7f+zGvV6ydV8NaRrc6TajaedIi7FPmOuBnP8JFAFzTf+QXaf8AXBP/AEEVapsUaQxJFGMIihVHoBTqAPHvAH/I8n/dlrsvGHjC48NXdtDDaxTCWMuS7EY5x2rX0/wtoul3322zs/KuMEb/ADXbr14JIp+q+G9J1uWOXUbTznjXap8x1wP+AkUAHhvVZNb0C21GWJY3m35RTkDDFf6Vq1W0/T7XS7GOzs4vKt487E3FsZJJ5JJ6k1ZoA8e1X/krMf8A2EIP5pXsNePar/yVmP8A7CEH80r2GgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAryTwJaXMXjYvJbyom2X5mQgV63RQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABVe/eaPTrl7cEzrExjAGSWwccd+asUUAeL32p+LfEyLp0tvO67smNINgJHdjj+fFeleEfD/wDwjuiLbSFWuZG8yZl6bvQewH9a3qKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuQ8Ya7rukXdtHpNn58bxlnPkM+Dn2rr6KAPFbOLWNR8aWOpXmn3CO95C8jCBlUAMvPPQYFe1UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFUdR1nTtJ8v7fdx2/m52b/4sYz/ADFXq82+LP8AzCP+23/slAHXp4u0CSRUTVICzEADJ5P5VrXFxFa28lxO4jijUs7noAO9cD4f+H+lXel6fqUlxeiZ0SYqrrtz1/u5x+NdX4q/5FTVP+vZ/wCVAElj4i0jUrkW9nfwzTEEhFPJArTr50sruewvIb22YrLC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Jbkw8/3H4U/kymgD2WvL5vileJfSJHZWzWwlIVvm3FM8Hr1xXeeJL3+zvDeoXQOGSFgp/wBo8D9SK8TGkSHw0dY52C6+z4/4DnP9KAPfkdZEV0IKsMgjuK5Pxn4wm8NTWkFrBFLJKrO/mZ+UAgDGD9fyrQ8GX39oeE7CUtl0j8pvXKnb/IA/jXnXi5n174gGyiJIDpaqfT1/IlqAPU9DvLnUdEtL27jSOadPMKJnAB6dfbFY3irxrbeHWFtHF9ovWXd5ecKg9WP9K6eONIYkijGERQqj0ArgLrwFf6j4vk1O9mtXsnuN7R72LlB0XG3HQAdaAMYeOfFt7mW1tB5ZPHk2rMPz5qax+JmqWlyItWso5EB+bYpjkX8DwfpxXqaoqIERQqqMAAYAFcL8Ube1Oh29w6oLoThUb+Irg5H06UAdpZXkGoWUN3bPvhlUMp9q5Pxl4yvPDeo29tbW0EqyReYTJnIOSOx9qm+HDs3hCIMchZZAvsM5/mTXK/FT/kOWX/Xt/wCzGgDe1/x69rcpp+j2ou73A8w7Syq2PugDkn+Vc9P438X6c6yXtp5SE8LPaMgP8jXZ+B9Dh0rQILgoDd3aCWWQjnB5C/QDH45roL2zg1CzltLmMPDKpVlP+etAHMaV42XV/D99dQW4XULSIu1ucsG44IxyR/KvNvE+uXuu3sM99aLbPHHsVQrDIyTnn61rfDktB4xaIHgwyI3vjB/pVr4qf8hyy/69v/ZjQBt+E/Fmq6jqNrptzpyRW4iI80IwPyrxyeO1d5VXTf8AkF2n/XBP/QRVqgAooooA4P4qf8gOy/6+f/ZTWv4A/wCRJ07/ALaf+jGrI+Kn/IDsv+vn/wBlNa/gD/kSdO/7af8AoxqAOlooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiii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8qPy9vk788k5zuHrXV0UARW0P2e1hg3bvLRUzjGcDFS0UUAcfoHgX+w9dOp/2l5/Djy/I2/e99x/lTvGvhCXxGILi0mjjuoQVxJkK69eo6HP8666igDgPCXhfxFpWrwzX90PscSsvki4Zh0wML0rsdZ07+1tIubDzfK89Nu/bu2/hkZq9RQByPhbwP8A8I1qcl5/aP2nfCYtnkbMZZTnO4/3f1rrqKqapqEelaZcX0qM8cK7mVepoA474qf8gOy/6+f/AGU1r+AP+RJ07/tp/wCjGrhPGXjKz8Sadb21tbTxNHL5hMmMEYI7H3ru/AH/ACJOnf8AbT/0Y1AHS0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABVO+0qw1Py/t1nDceXnZ5iBtucZx+Qq5RQBkp4Y0JHV00m0DKcgiIcGtaiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoIyMHpRRQBkXHhbQrqQyS6Valz1Kptz+VT2Oh6VprbrPT7eF/wC+sY3fn1rQooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKWo6Rp+rLGt/axziMkoH7Z61YtraGzto7e3jWOGMYRF6AVLRQAUUUUAMliSaJ4pFDRupVlPcHqKpafoemaVI8lhZxwO4wxTuK0KKACiiigAooooAiuLeG7t3guIklhcYZHGQRVGx8PaRps3nWmnW8UvZwuSPoT0rTooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArPvtC0rUn33mn28z/AN9kG78+taFFAGTb+F9CtZPMh0q1D9i0YbH0z0rWAwMDpRRQAUUUUAFFFFABRRRQAUUUUAFFFFAGVceGtFu7trqfTLeSZjuZmT7x9SOhrTjjSKNY40VEUYVVGAB7CnUUAFFFFABRRRQAUUUUAFFFFABRRRQBm33h7SNSuPtF5p8E02Mb2Xkj39au29tBaQrDbwxwxL91I1CgfgKlooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKjuLeG6geC4jWWJxhkYZBFSUUAZH/AAiug/8AQIs/+/QrRtbW3srZLe1hSGFM7UQYAycnj6mpqKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiig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RXFspKS3z3A9l3Fv5VPPD4412P7Lcw6i0THlZI/KU/XIAP413PgzwcPDsb3N0ySX8q7SV6Rr6D1Pqf8AJAKnxS/5Fm2/6/F/9Aervw6IPg22AIOJJAfb5jV7xboj6/4fmtIiBOrCSLJwCw7fiCR+NeYaL4j1fwZPLaS2p8pm3Pbzgrg9Mqf/ANYoA9rrxi8vEv8A4oxXEbbkOowoD6hWVf6Vqy+NfEHiYf2dpGniFpPleSMlioP+1wFHvVJPCV/o/i/SY4rW5uIY5oHluEhYxg7gW5xgAf0oA2/iv/x66Z/vyfyWuo8Hf8ihpn/XH+prn/iZp97f22nCzs7i5KO5YQxl9vA64FdH4UgltvC2nQzxPFKkWGR1KsDk9QaAPN/AH/I8n/dlrZ+K1mxTTr0D5QXiY+5wR/JqpeCNJ1K08ZGe50+7hh2yfvJIWVeenJFei63pEGuaTNYT8LIPlcDlGHQigDL8Ipp2o+FrCVbW2dkiEUmYwTuUYOffjP41tf2bYf8APlbf9+l/wryKNvEfgC+kxH+4c8kqWhl9DnsfyNaE/wAUNWniMVtZW8UrcK4y5H0HrQB1Gs+JvDmiamdPn01ppwoJ8i3jYAnoOSOen511qKFjVVQIoAAUDoPTivMfCPg+/vtVXWtbSRVV/NVJvvyv1BI7DPPPX6V6hQB494A/5Hk/7stew14dBd3ng7xZNNLahpI2ddj5AdT0IP616t4W15/EWkG+e3EBErR7A27oBzn8aANuivO/iNa6vcajZHTYL6RBEQxtkcgHPfbXTeDIrqHwnYx3qTJcDzN6zAhx+8bGQeemKAN6vHvDP/JUx/183P8A6C9ew1494Z/5KmP+vm5/9BegD2GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK82+LP/ADCP+23/ALJXpNcx4v8ACcnif7Hsu1t/s+/O5N27dt9x/doAueFp4R4W0tTKgb7OgxuGelbdea23wtnguopjqsZEbhseSecHPrXpVABRRRQAUUUUAFFFFABRRRQAUUUUABAIIIyD2qFLS2jk8xLeJX/vBAD+dTUUAFFFFABRRRQAUySGKZdssaSL6MoNPooAZFDFAu2KJI19EUAU+iigAqL7Lb+b5vkReZ/f2DP51LRQAyWWOCMyTSJHGvVnYAD8TXF/EDxHawaC9ha3UUlxdEKwjcNtTuTj16fia6fXdMOsaLdaeJREZlADlc4wQen4Vw+n/CvZcq+oagHhU5McKEFvbJ6UAaPwz0r7JoUl/ImJLt/lJH8C8D9d36V29Mhhjt4I4YUCRRqFRV6ADoKfQAUUUUAFRywRTrtmiSQejqD/ADqSigBqRpEu2NFRR2UYFOoooAKKKKACiiigAqOW3gnGJoY5P99Qf51JRQA1I0iXbGioo7KMCnUUUAFFFFABQQCCCMg9qKKAIo7W3hcvFBEjHqyoATUtFFABTJYYp12zRJIvo6gj9afRQA1I0jQLGioo6BRgUSRpKhSRFdT1VhkGnUUANSNIkCRoqKOiqMAU6iigAooooAKiltoJ8edDHJjpvUH+dS0UAIqqihVAAHQAUtFFABUctvDOAJoY5AOzqD/OpKKAEVVRQqqFA7AYpaKKACiiigAooooAKKKKACiiigApGVXUqwBB6gilooAiitbeFi0UEUbHqVQA1LRRQAVHLBDOoWaKOQDoHUH+dSUUAIqqihVUKB2AxS0UUAFFFFABRRRQAUUUUAFMlhinXbNEki+jqCP1p9FADY40iQJGioo6BRgU6iigAooooAKKKKAEIDAggEHgg1HHa28Ll44IkY8kqgBNS0UAFFFFAEcsEM6hZoo5AOgdQf509VVFCqoUDsBilooAKKKKAGNNEjbXlRT6FgK8h8MEH4pAg5Bubnn/AIC9dX4m8By+INZa/S/SEMirsMRbp75qLw98PpdD1221FtRSYQ7vkERGcqV6596AO7ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q=='/></div>" +
                    "<label for='notes' class='labelDiv'>Notes</label></div>" +
                    "<div id='spectemplate' class='template'><div id='Spec Design' class='innerTemplate'>" +
                    "<img style='max-width:100%' class='image' src='data:image/jpg;base64,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HCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIDOQJ9gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APf6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK57xl4x0/wPoY1bU4bqW3Myw7bZVZtxBI4ZgMcHvQB0NFeP/wDDR3g//oG65/34h/8AjtH/AA0d4P8A+gbrn/fiH/47QB7BRXj/APw0d4P/AOgbrn/fiH/47R/w0d4P/wCgbrn/AH4h/wDjtAHsFFeP/wDDR3g//oG65/34h/8AjtH/AA0d4P8A+gbrn/fiH/47QB7BRXj/APw0d4P/AOgbrn/fiH/47R/w0d4P/wCgbrn/AH4h/wDjtAHsFFed+EvjL4e8ZeIItG06x1WO4kRnD3EUYQBRk5KuT+la/wASfF58E+C7rVYkD3bEQWysOPMbOCfYAE474xQB1tFfCWq+INX1y+a91TUrm6uC2/fJITtP+yOi/QYxXrvwK+IOqnxPH4Y1K8mu7S7RzbGZyxhkVS2ATztIB49cY75APpCiiigAooooAKKKKACuK+IPxHsvh7FYPeafdXf23zAnklQFKbeGJ6Z3cfQ12teI/tKQBvDeiXHGUvHT/vpM/wDstAEMn7S2nDHl+G7pvXdcqv8A7Ka9F+HXjkfEDw/caqNONgsV21sIzN5m4BUbdnaMffxj2618X19V/s+x7PhkGznfeyt9OFH9KAPVKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvMvjppWqa14EtrLSdPuL6dtQjZo4Iy7KoSQ7sDtnA/GvTaKAPiyP4ZeN5c7fDGpDH96Er/ADqWP4U+OpX2r4avQf8Aa2qPzJr7OooA+N/+FP8Aj7/oXLj/AL+x/wDxVYfiTwjrvhG4gg12x+yS3CGSNTKj7lzjPyk4/GvuSvnf9pcf8TLw6f8ApjP/ADSgDwqONpZEjQZdyFUepNd9/wAKS+If/Qvf+Ttv/wDHK4fT/wDkJWv/AF2T+Yr73oA+OX+Dnj+Nyp8OTEj+7PER+YaoJfhP47hYBvDV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FtoslylzLG7yPKibQxZiemewwPwqn8SfAH/CwtHtNP8A7T+wfZ7jz/M8jzd3ylcY3LjrQB8aV9Vfs+SF/hmVOPkvpVGPop/rXKf8My/9Td/5Tf8A7bXqHw48C/8ACv8Aw9caT/aP2/zrtrnzfI8rGURduNzf3M5z3oA7CiiigD5z+LfwbuLS5uPEXhi2Mto+ZLqyiX5oT3ZAOq9yB0+nTwwjBwa+/wCuC8X/AAh8K+LpJLmW2axv35N1Z4UsfVlxtb64z70AfM/hf4jeKfCAEWlam4tc5NrMPMi/BT0/DFej2P7Suqxqo1Dw9Z3DdzBO0WfzDVBq37N+vW7M2laxY3iA8LOrQuR+AYfqK5uf4GfECI/Jo8U3OMx3kQ/9CYUAdvJ+0zIUIj8Jqrdi2obh+Xlism9/aQ8Rygiy0fTLfJ4Mm+Qgf99LzXMp8EPiEzhToIQH+JryDA/J60rT9n7xvcsBMmnWoPUzXOcf98BqANb4ffEbxl4z+Juj2WoavJ9jLvJJBAixoVWNmwdoyRkDqT1r6WryX4bfBb/hCdcTW73Vlu7tI2RIoYtqLuGCdxOTxnsK9aoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiqmq3UllpF7dwqrSwQSSIH6EqpIzjtxXzk37SPiUqdmj6SGxwSJCPy30AfTFFcV8LvF2peNvB/9sapDawzm5eJVtlZV2rjnDMTnJPetbxj4t0/wV4dm1jUdzIrCOKJPvSyHoo/In6A0Ab9FfNY/aS17+0A50PTfsWeYgz+Zj/fzjP/AAGvoLw/rlp4k0Cy1mxLG2u4xIobqvYqfcEEH6UAaVFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA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igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+SPjt/yVfUf+uMH/AKLWtL9neRk+JE6r0fTpVb6b4z/MCsf43uz/ABd1pWOQggC+w8iM/wAya1f2ej/xcp/+vCX/ANCSgD6oooooA+N/jB/yVfX/APrsn/ota7f9mv8A5GTW/wDr0T/0OuA+KZz8UPEP/X238hXe/s2SAeKdZjxy1krZ+jj/ABoA+kJohPBJExIDqVJHuMV8DSxPBM8MqlZI2Ksp7EcEV9+V8nfGrwPceGfF1xqkEB/srU5DNG6j5Y5Ty6H05yR7H2NADvh18IoPiBoM2ox+IxZzQzmGS3+x+YV4BBz5g4IPp2Ndsn7M9qEAk8UTM3crZAD8t5ryLwJ471PwHrf26y/e28uFubVmwsyj37MOcHt7gkV9E6b8evAt7bq91eXOnyFctHPbO+D6ZQMDQByv/DNFl/0M9x/4CD/4quw8AfCKx8A67NqtvqtxdyS2zW5SSNVABZWzx/ufrTLv48eArYZi1C5uvaG0cf8AoYWr/gP4oWXxA1O/t9O025t4LONXMtw6hmLEgDaM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mWRVYAEqSpIBwRx7igC3RRRQAUUUUAFFFFABRRRQAUUUUAFFRXNzb2du9xdTxwQoMtJK4VV+pPAqLT9TsNWtzcabfW15AGKGS2lWRQw6jKkjPPSgC1RRRQAUUUUAFFFFABRRRQAUUVn6lr2jaOyrqmrWFiWGVF1cpFkeo3EUAaFFFFABRRRQAUUUUAFFFFABRRVCy13SNRupLWx1WxurmNdzwwXCO6jOMkA5AzQBfooooAKKKKACiis/Ute0bR2VdU1awsSwyourlIsj1G4igDQooooAKKp6jq2naPbi41PULWyhJ2iS5mWNSfTLEDNWIJ4bq3iuLeWOaCVA8ckbBldSMggjggjnNAElFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFZ9rrukX2oS6faarY3F7CC0ttDcI8iAEAllByOSBz6igDQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKp6jq+maRGsmp6jaWUbZ2tczrGDjrgsRQBcoqOCeG6t4ri3ljmglQPHJGwZXUjIII4II5zUlABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUVQstd0jUbqS1sdVsbq5jXc8MFwjuozjJAOQM1foAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAri/H1l48uzp3/CE6naWO3zPtf2hUO/O3ZjcjdPn6Y6967SigDwfxU/xo8I+HLrXL/xbpUtrbFPMW3gjL/MwQYDQAdWHen6Cnxr8ReHLTW7LxVpYguk3xxSwRrJjJHP7gjtnrXa/G3/kkOu/9u//AKUR1c+Eknm/Cvw+2MYtyv5Ow/pQBL4C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4jfFc+GS2bLRtKmklPYXEq4Q/Ubo2H+6ad+z1rck3hnUfDtzlbjS7klUbqqOTkfg4f8AOgDtfGXxE0nwTe6bZ39tfXNxqJYQx2aIxBBUc7mXqW469DS+JfiLoXhTxBp+i6l9q+1X2zyjHGCgDOUyxJGACMn2rz+SD/hOf2juf3mneGoVz/d8xeQPr5jf+Q6z/wBobT0uPEXhEvwLkywMec4Dx/8AxZoA7PXfjp4L0O9a1We61GRDhzYxB1U/7zMoP4Zrb8H/ABL8NeNpXt9KupFu0Xe1tcJsk2+o6gj6E10Gm6Hpej6eLDTtPtra0C7fKjjABHv6n3NeE+IdItvC37SPh7+xoEtY77ypnihXao3s8b4A6AhSfTmgD6FooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK474q6XPrPwx12zt1Z5fIEqqoyW8t1kwP++a7GigDy34D+JbTVvAEGkq6re6WWjljzyUZiyuB6c4+oPtXa+MfE1p4S8L3urXcqoYoyIUJGZJSDtUDuSf0ye1cX4h+CWlajrL6xoGqXfh6/clma0+5uPcAFSvvg49qh0/4H2kuoRXvivxHqfiOSH7iXLsqde+WZiPbIoAZ+z5oU+l+BJtQuEKNqVwZYwe8ajaD+J3fhisjxxs8C/HTQfFOfKsNVXybtscZA2MT7AGNvqpr2+OOOGJIokVI0UKqKMBQOgA7CuQ+I3gGH4g6FBp73v2KWCcTR3Hk+ZjggrjcODkd+woAwPgtZzXml6z4uvEIutfvnmXPaJWIUfmXH0ArldTuY/hf8d7nU5Bs0nW7SWZ+cDfgsR9fMT8nr2rQdJi0Hw/p+kwHdHZ26QhtuN20AFsepPP41y3xK+G8HxEsLGFr/7BcWcrOk/keblWGGXG5epCnOe1AGT8D9Gmt/CVz4gvh/p+u3T3cjY52ZO38yWb/gVct+0Hc+X4h8GDZnypZZOvXLxcf+O/rXt2m2MWl6XaafAAIbWFIUAGPlUAD+VcR8Q/hk3j3VNKvP7YFiunhsJ9l80uSwPXeuPujtQB6DXg/juZX/aU8KLIoCxxW6DPOSZJCP1Ne8V55rnwvbWvibYeMTrRiFm0JFn9m3ZCHON+8Yzz2oA6vxF4p0TwnYpea5qEdnC7bELKzMx9Aqgk/gKt6Tq1hrulwalplylzZzjdHKmcNzg9eQcgjBrkviV8NYPiLaWCPqclhPZM5jcRCRWD7dwK5HPyjBzxz1zW94Q8MWvg7wxZ6HaSvNHbglpX4LsxLMcduT07CgDcooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK8Ktfil8SNd8T6xpHhzQdFvf7PnkQ7wyMEDlQSWmUE8dq0JPFfxvifa3gvSCf9n5h+YnoA9loryHxfbfFTxF4H0KTTohp2rtJK2pW1lci3YfNiLaxfptGSN3Uj8PTPD8Oo2/h3TYdXmE2pR20a3MgOQ0gUbjnvz3oA0qKKKACiiigAoqK5jaa1miU4Z0ZQT2JFeFfs0oTB4muGcs0kluDn2Ehzn/gVAHvVFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUV5z45+IWpeGvHfhvw7YW1nImqyxJJJOGLRhpQmRgjtn8aAPRqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiivOfHPxC1Lw1478N+HbC2s5E1WWJJJJwxaMNKEyMEds/jQB6NRRRQAUUUUAFFFFABRRXzz+0bA0niDw6glZRcRPGw7cOuDjv940AfQ1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFedfFr4hah8P8ATdOn062tJ5ruR0IuQxACgHICkdzXoabti78F8Ddt6Z9qAHUV4F4fj2/tSaojMzhBM6ZP3S0ak4/76Ne+0AFFFFABRRRQAUUVU1W8On6Re3oCk28EkoDdPlUnn24oAt0Vwnwp8baj498OXmq6jb2tu0V41vGluGHARGyck5OX9q7ugAooooAKKKKACiiuU+JiF/hp4hw5QrZu4ZeoK/MP5UAdXRXkn7O0ZT4dXTltxl1OVznt+7jH9K9boAKK8T/aSRx4Z0aZXKgXbxsASMhkz/7LXqPg6JYPA+gRKSVTTbdRnrgRqKANuiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK8C8ZR4/aY8PKWZkf7PLtJ4DDcM/wDjooA99ooooAKKKKACiiigAooooAKKKKACiuO+JnjC68D+EW1ezggnn89IhHPnad2c9CDnitvwxqVxrHhTSNUu1iW4vbOK4kWIEIC6BsAEk459aANaiiigAooooAKKKKACiiigAoorwD4kQO/7RfhFGkOxjZyqPTE7fz2UAe/0UUUAFFeAftIQPLqPhZDIRHOZ0wOxBj5x/wACr3+gAooooAKKKKACiqerxCfRb6EnAe3kUkdsqRXjf7NpL6Lr8rktI1zGGYnJOFP+NAHuFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFfPOkwN/w1ZOplYrDLPIoPP3rc5A9OWoA+hqK8o03RviUPjHPqN7eyf8Ix5su1BdAwtDgiNRFnIcfLk4HIPJ7+r0AFFFFABRXz9+0HC7eK/C4ViROpjMfY4kXGf++q+gaACiiigAooooAKKKKACiiigAooryj4c6N8SrLxpqd54uvZJNNkjcIjXQkjaQsNpjQE7AAD2Xr09AD1eiiigAooooAKKKKACiiigAooooAKKK85+GXxC1Lxzq3iGC7trOG30140iMAbc+5pBkkkjog7d6APRqKKKACiiigAooooAKKKKACiivK/ilo3xH1TXtLbwfeSwafHGPN8m6EO2Xccs4JG5du3jnoeKAPVKKbGHEaCQguANxA4J706gAooooAKKKKACiiigAooooAKKzn1/Ro9TGmPq9guoMQBatcoJST0+TOf0rRoAKKKKACiiigAoorznxz8QtS8NeO/Dfh2wtrORNVliSSScMWjDShMjBHb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cDPqe5PueavUUUAFFFFAGfYaFpel319e2NjDBc30nmXMqLhpW9Sf88knqTWhRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBHPBFdW8tvPGskMqFJEYZDKRggj0IqvpWk2GiabDp+mWsdraQjCRRjAH+J9zVyigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAorC8QeM/DnhYL/bWr21o7DcsbEtIR6hFBYj8Kq6D8RPCXia5FtpGuW89w2dsLBonbHorgE/hQB09U5NX0yHUI9Pl1G0S9kOEtmnUSNwTwucngE/hUet63p3h3SJ9V1W4+z2MG3zJdjPt3MFHCgk8kDgV88XXjzw5P+0NZ+J/7RB0SGIobnyJOD9nZfu7d332x0oA+l6K53wv458P+M3vF0G9a6Fns81jC8YG/dtxuAJ+6fyrS1jXdK8P2f2vV9Qt7KDOA8zhdx9AOpPsKANCiuM034seCNX1SHTbHXUlu5pBHGn2eVQ7E4ADFAOvvXZ0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVkeKddTwz4W1LWZE3/ZIGkVD/E3RR+JIFa9cZ8WdNn1b4Xa9a2ylpfJWYKBkkRushA/BTQB5j8NrPwVq1nN4p8c61o17rl/O7mHUbyP9yoOADGxxzjjIwF24xUHxXtfh2+gf2r4Uv9HtdaspkZE02REMo3AHCpxkcNkehq18JPBPw98Z+D45L3Sln1i1ZkvB9rmUnLEq21XAwVx0HUGvRV+DvgBFCjw5DgDHM0pP5lqANLwtdw+Nfh7pd1q9nBdLe2yNcQzxBkd1PJKkYxuXI/CvIbTw9obftN3+kyaTYHTkgBjszbp5Ib7Mh4TG3qSenXmvetM02z0fTYNP0+AQWkC7IolJIUenPNeJI6237WkxmIQTxARknqfsij+hFAHr9lo2geEbG9udP0610+AJ5twbeILuCAnJx1wM15F4A0JfixrmpeNfFSG5s45zb2Gnux8pAADyO4AK/U5Jr2HxPYS6r4T1nToP9bd2M8Cf7zIVH6mvK/2dtatW8N6h4fkby9RtbppzC/BKMFGcezKQfTI9aAPR4/AXhOG+tb638PadbXNq4khkt4BEVYdD8uM/jXRUU2SRIo3kkdUjQFmZjgKB1JPpQA6iqenavpmsRPLpmo2l9GjbWe2nWUKfQlScGrlABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUEZGDRRQB5DrfwUlt9efXPBGuyaFduSWgAPl5PJAIOQv8AskEfyqJvCvxtmQQy+NtJWLoWjXD4xjqIAf1r2OigDN8P2F5pegWVlqF899eRRgTXLkkyP1J5rg/iN8K7jxVrdn4i0LU103WrYKu98hX2nKtleVYeuDkY9K9OooA4bwPpHxB0+/nk8YeIrLUbXydkMNtGow+R8xby0PQEdT1rG8X/AAeGpeID4k8Las+h6yzF5CgPlyMerccqT36g+nJJ9SooA8fj8G/GC7ZLXUfHdlFZZwz2q4m2/URKc/8AAq9A8ceHp/FfgzU9EtrsWs11GFSVgSAQwbBx2OMH2PeugooA8z+EXw0v/h/DqUmp31vPc3pQeXbFjGipuwcsASTu9OMd816ZRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/Z'/></div>" +
                    "<label for='spec' class='labelDiv'>Spec design</label></div>" +
                    "</div></div>",
            });
        };
        this.onToolbarClick = function (args) {
            switch (args.item.id) {
                case 'new':
                    _this.enableIcons();
                    _this.newDocument();
                    break;
                case 'open':
                    _this.openFileExplorer();
                    break;
                case 'undo':
                    _this.undoAction();
                    break;
                case 'redo':
                    _this.redoAction();
                    break;
                case 'image':
                    _this.openImageExplorer();
                    break;
                case 'table':
                    _this.onInsertTable();
                    break;
                case 'link':
                    _this.onInsertHyperlink();
                    break;
                case 'bookmark':
                    _this.onInsertBookmark();
                    break;
                case 'pagesetup':
                    _this.onPageSetup();
                    break;
                case 'pagenumber':
                    _this.onPageNumber();
                    break;
                case 'find':
                    _this.onSearch();
                    break;
                case 'hideProperty':
                    _this.onPropertyPaneClick();
                    break;
                case 'header':
                    _this.showHeaderProperties = true;
                    _this.documentEditor.selection.goToHeader();
                    break;
                case 'footer':
                    _this.showHeaderProperties = true;
                    _this.documentEditor.selection.goToFooter();
                    break;
                case 'toc':
                    _this.onToc();
                    break;
                case 'restrictEdit':
                    _this.onRestrictButtonClick();
                    break;
                case 'useLocalClipboard':
                    _this.onUseLocalClipboard();
                    break;
            }
        };
        this.showProperties = function (property) {
            switch (property) {
                case 'text':
                    _this.propertiesPane.textProperties.showTextProperties(true);
                    _this.enableDisablePropertyPaneButton(true);
                    _this.propertiesPane.tableProperties.showTableProperties(false);
                    _this.propertiesPane.headerFooterProperties.showHeaderFooterPane(false);
                    _this.propertiesPane.imageProperties.showImageProperties(false);
                    _this.propertiesPane.tocProperties.showTocPane(false);
                    break;
                case 'table':
                    _this.propertiesPane.tableProperties.showTableProperties(true);
                    _this.enableDisablePropertyPaneButton(true);
                    _this.propertiesPane.textProperties.showTextProperties(false);
                    _this.propertiesPane.headerFooterProperties.showHeaderFooterPane(false);
                    _this.propertiesPane.imageProperties.showImageProperties(false);
                    _this.propertiesPane.tocProperties.showTocPane(false);
                    break;
                case 'image':
                    _this.propertiesPane.imageProperties.showImageProperties(true);
                    _this.enableDisablePropertyPaneButton(true);
                    _this.propertiesPane.textProperties.showTextProperties(false);
                    _this.propertiesPane.tableProperties.showTableProperties(false);
                    _this.propertiesPane.headerFooterProperties.showHeaderFooterPane(false);
                    _this.propertiesPane.tocProperties.showTocPane(false);
                    break;
                case 'headerfooter':
                    _this.propertiesPane.headerFooterProperties.showHeaderFooterPane(true);
                    _this.propertiesPane.textProperties.showTextProperties(false);
                    _this.propertiesPane.tableProperties.showTableProperties(false);
                    _this.propertiesPane.imageProperties.showImageProperties(false);
                    _this.propertiesPane.tocProperties.showTocPane(false);
                    break;
                case 'toc':
                    _this.propertiesPane.tocProperties.showTocPane(true);
                    _this.propertiesPane.headerFooterProperties.showHeaderFooterPane(false);
                    _this.propertiesPane.textProperties.showTextProperties(false);
                    _this.propertiesPane.tableProperties.showTableProperties(false);
                    _this.propertiesPane.imageProperties.showImageProperties(false);
                    break;
            }
        };
        this.onToc = function () {
            if (_this.previousContext === 'TableOfContents' && _this.showPropertiesPane) {
                _this.documentEditor.focusIn();
                return;
            }
            if (_this.propertiesPane.headerFooterProperties.element.style.display === 'block') {
                _this.documentEditor.selection.closeHeaderFooter();
            }
            _this.enableDisablePropertyPaneButton(false);
            _this.propertiesPane.showPropertiesPane(true);
            _this.showProperties('toc');
        };
        this.onRestrictButtonClick = function () {
            _this.isReadOnly = !_this.isReadOnly;
            if (_this.isReadOnly) {
                _this.disableIcons();
            }
            else {
                _this.enableIcons();
            }
            _this.documentEditor.focusIn();
        };
        this.enableIcons = function () {
            _this.documentEditor.isReadOnly = false;
            _this.updateUndoRedoBtn();
            _this.toolbar.enableItems(document.getElementById('image').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('table').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('link').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('bookmark').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('toc').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('header').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('footer').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('pagesetup').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('pagenumber').parentElement, true);
            _this.toolbar.enableItems(document.getElementById('useLocalClipboard').parentElement, true);
            document.getElementById('showHidePane').parentElement.className = '';
            document.getElementById('restrictEdit').className = 'e-tbar-btn e-tbtn-txt e-control e-btn';
            document.getElementById('useLocalClipboard').className = 'e-tbar-btn e-tbtn-txt e-control e-btn e-btn-toggle';
            _this.showPropertiesPane = true;
            _this.showPropertiesPaneOnSelection();
        };
        this.disableIcons = function () {
            _this.documentEditor.isReadOnly = true;
            _this.toolbar.enableItems(document.getElementById('undo').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('redo').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('image').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('table').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('link').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('bookmark').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('toc').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('header').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('footer').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('pagesetup').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('pagenumber').parentElement, false);
            _this.toolbar.enableItems(document.getElementById('useLocalClipboard').parentElement, false);
            _this.propertiesPane.showPropertiesPane(false);
            _this.showPropertiesPane = false;
            document.getElementById('showHidePane').parentElement.className = 'e-overlay';
            document.getElementById('restrictEdit').className = 'e-tbar-btn e-tbtn-txt e-control e-btn e-btn-toggle';
        };
        this.onPageNumber = function () {
            _this.documentEditor.editor.insertPageNumber();
        };
        this.onUseLocalClipboard = function () {
            if (_this.documentEditor.enableLocalPaste && document.getElementById('useLocalClipboard').classList.contains('e-btn-toggle')) {
                document.getElementById('useLocalClipboard').className = 'e-tbar-btn e-tbtn-txt e-control e-btn';
                _this.documentEditor.enableLocalPaste = false;
            }
            else {
                _this.documentEditor.enableLocalPaste = true;
                document.getElementById('useLocalClipboard').className = 'e-tbar-btn e-tbtn-txt e-control e-btn e-btn-toggle';
            }
            _this.documentEditor.focusIn();
        };
        this.showPropertiesPaneOnSelection = function () {
            var currentContext = _this.documentEditor.selection.contextType;
            var isInHeaderFooter = currentContext.indexOf('Header') >= 0
                || currentContext.indexOf('Footer') >= 0;
            if (!isInHeaderFooter && !_this.showPropertiesPane) {
                _this.propertiesPane.showPropertiesPane(false);
                _this.documentEditor.focusIn();
                return;
            }
            if (!isInHeaderFooter) {
                if (_this.propertiesPane.headerFooterProperties.element.style.display === 'block') {
                    _this.propertiesPane.showPropertiesPane(false);
                    _this.documentEditor.selection.closeHeaderFooter();
                }
                _this.showHeaderProperties = true;
            } else if (isInHeaderFooter && _this.showHeaderProperties) {
                _this.showPropertiesPane = true;
            }
            if (_this.showPropertiesPane) {
                _this.propertiesPane.showPropertiesPane(true);
                if (isInHeaderFooter && _this.showHeaderProperties) {
                    _this.showProperties('headerfooter');
                }
                else {
                    if (currentContext.indexOf('Text') >= 0
                        && currentContext.indexOf('Table') < 0) {
                        _this.showProperties('text');
                    }
                    else if (currentContext.indexOf('Image') >= 0) {
                        _this.showProperties('image');
                    }
                    else if (currentContext.indexOf('TableOfContents') >= 0) {
                        _this.showProperties('toc');
                    }
                    else if (currentContext.indexOf('Table') >= 0) {
                        _this.showProperties('table');
                    }
                }
            }
            _this.previousContext = _this.documentEditor.selection.contextType;
        };
        this.onPropertyPaneClick = function () {
            if (_this.previousContext === 'TableOfContents' && _this.showPropertiesPane) {
                _this.documentEditor.focusIn();
                return;
            }
            else if (_this.propertiesPane.tocProperties.element.style.display === 'block' && _this.showPropertiesPane) {
                _this.enableDisablePropertyPaneButton(true);
                _this.showPropertiesPaneOnSelection();
                return;
            }
            if (_this.previousContext.indexOf('Header') >= 0
                || _this.previousContext.indexOf('Footer') >= 0) {
                _this.showHeaderProperties = !_this.showHeaderProperties;
            }
            else {
                _this.showPropertiesPane = !_this.showPropertiesPane;
            }
            _this.enableDisablePropertyPaneButton(_this.showPropertiesPane);
            _this.showPropertiesPaneOnSelection();
            _this.documentEditor.focusIn();
        };
        this.updateUndoRedoBtn = function () {
            var undo = document.getElementById('undo');
            var redo = document.getElementById('redo');
            if (!ej.base.isNullOrUndefined(_this.documentEditor.editorHistory) && _this.documentEditor.editorHistory.canUndo()) {
                _this.toolbar.enableItems(undo.parentElement, true);
            } else {
                this.toolbar.enableItems(undo.parentElement, false);
            }
            if (!ej.base.isNullOrUndefined(_this.documentEditor.editorHistory) && _this.documentEditor.editorHistory.canRedo()) {
                _this.toolbar.enableItems(redo.parentElement, true);
            } else {
                _this.toolbar.enableItems(redo.parentElement, false);
            }
        };
        this.onInsertImage = function (args) {
            var documenteditor = _this.documentEditor;
            if (navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') || navigator.userAgent.match('Edge')
                || navigator.userAgent.match('MSIE') || navigator.userAgent.match('.NET')) {
                if (args.target.files[0]) {
                    var path = args.target.files[0];
                    var reader = new FileReader();
                    reader.onload = function (frEvent) {
                        var base64String = frEvent.target.result;
                        var image = document.createElement('img');
                        image.addEventListener('load', function () {
                            documenteditor.editor.insertImage(base64String, image.width, image.height);
                        });
                        image.src = base64String;
                    };
                    reader.readAsDataURL(path);
                }
            }
            else {
                var image = document.createElement('img');
                image.addEventListener('load', function () {
                    documenteditor.editor.insertImage(args.target.value);
                });
                image.src = args.target.value;
            }
        };
        this.onInsertBookmark = function () {
            _this.documentEditor.showDialog('Bookmark');
        };
        this.onInsertHyperlink = function () {
            _this.documentEditor.showDialog('Hyperlink');
        };
        this.onInsertTable = function () {
            _this.documentEditor.showDialog('Table');
        };
        this.onPageSetup = function () {
            _this.documentEditor.showDialog('PageSetup');
        };
        this.onSearch = function () {
            _this.documentEditor.showOptionsPane();
        };
        this.newDocument = function () {
            if (_this.isContentChange) {
                var msg = confirm('Do you want to save the changes to ' + _this.documentEditor.documentName + '?');
                if (msg === true) {
                    _this.documentEditor.save(_this.documentEditor.documentName, 'Sfdt');
                }
            }
            _this.showCreateNewDocumentdialog();
            _this.templateSelection(null);
            var templates = document.getElementsByClassName('template');
            for (var i = 0; i < templates.length; i++) {
                templates[i].addEventListener('click', function (e) { _this.templateSelection(e); });
            }
        };
        this.openFileExplorer = function () {
            _this.file.value = '';
            _this.file.click();
        };
        this.openImageExplorer = function () {
            _this.insertImage.value = '';
            _this.insertImage.click();
        };
        this.undoAction = function () {
            if (_this.documentEditor.editorHistory) {
                _this.documentEditor.editorHistory.undo();
            }
        };
        this.redoAction = function () {
            if (_this.documentEditor.editorHistory) {
                _this.documentEditor.editorHistory.redo();
            }
        };
        this.onFileChange = function (args) {
            if (args.target.files[0]) {
                var path = args.target.files[0];
                if (path.name.substr(path.name.lastIndexOf('.')) === '.sfdt') {
                    var fileReader = new FileReader();
                    fileReader.onload = function (e) {
                        var contents = e.target.result;
                        _this.documentEditor.open(contents);
                    };
                    fileReader.readAsText(path);
                    _this.documentEditor.documentName = path.name.substr(0, path.name.lastIndexOf('.'));
                }
                else {
                    _this.documentLoader.loadFile(path);
                }
            }
            _this.updateUndoRedoBtn();
            event.preventDefault();
        };
        this.hasClass = function (el, className) {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        };
        this.showCreateNewDocumentdialog = function () {
            if (document.getElementById('dialogContainer') === null || document.getElementById('dialogContainer') === undefined) {
                var container = document.createElement('div');
                container.id = 'dialogContainer';
                container.className = 'e-de-ndlg-target';
                document.body.appendChild(container);
                _this.newDialog.appendTo('#dialogContainer');
                container.parentElement.style.position = 'fixed';
                container.style.width = 'auto';
                container.style.height = 'auto';
                _this.fileNameTextBox = document.getElementById('docText');
            }
            _this.newDialog.show();
            _this.newDialog.close = function () { _this.documentEditor.focusIn(); };
            _this.fileNameTextBox.value = '';
            _this.fileNameTextBox.focus();
        };
        this.templateSelection = function (e) {
            var existing = document.getElementsByClassName('selection');
            if (existing.length > 0 && _this.hasClass(existing[0], 'selection')) {
                var reg = new RegExp('(\\s|^)' + 'selection' + '(\\s|$)');
                existing[0].className = existing[0].className.replace(reg, ' ');
            }
            if (e !== null) {
                if (_this.hasClass(e.target, 'template') && !_this.hasClass(e.target.children[0], 'selection')) {
                    e.target.children[0].className += ' ' + 'selection';
                }
                else if (_this.hasClass(e.target, 'image') && !_this.hasClass(e.target.parentElement, 'selection')) {
                    e.target.parentElement.className += ' ' + 'selection';
                }
                else if (_this.hasClass(e.target, 'innerTemplate') && !_this.hasClass(e.target, 'selection')) {
                    e.target.className += ' ' + 'selection';
                }
                else if (e.target.nodeName === 'LABEL' && !_this.hasClass(e.target.previousSibling, 'selection')) {
                    e.target.previousSibling.className += ' ' + 'selection';
                }
                existing = document.getElementsByClassName('selection');
            }
            _this.newDialog.element.querySelector('.e-footer-content').children[0].focus();
        };
        this.loadDocumentTemplate = function () {
            var selectedItem = document.getElementsByClassName('selection');
            _this.documentEditor.documentName = _this.fileNameTextBox.value;
            if (selectedItem.length > 0) {
                var selectedItemId = selectedItem[0].id;
                if (selectedItemId === 'Blank') {
                    _this.documentEditor.openBlank();
                }
                else {
                    _this.documentEditor.open(_this.templateLoader.getTemplate(selectedItemId));
                }
            }
            else {
                _this.documentEditor.openBlank();
            }
            _this.newDialog.hide();
        };
        this.getDocmentTemplate = function () {
            var templateArray = [];
            templateArray.push({ 'templateId': 'blank', 'value': '' });
            templateArray.push({ 'templateId': 'notes', 'value': '' });
            templateArray.push({ 'templateId': 'spec', 'value': '' });
            return templateArray;
        };
        this.toolBarDiv = parentElement;
        this.toolBarDiv.style.border = '1px solid #e4e4e4';
        this.documentEditor = docEditor;
        this.initializeFileTypeElements();
        this.initializeToolbarItems();
        this.initializeCreateNewDocumentDialog();
        this.propertiesPane = properties;
        this.propertiesPane.headerFooterProperties.toolbar = this;
        this.propertiesPane.tocProperties.toolbar = this;
        this.previousContext = this.documentEditor.selection.contextType;
        this.onUseLocalClipboard();
    }
    Object.defineProperty(ToolBar.prototype, "isPropertiesPaneEnabled", {
        get: function () {
            return this.isPropertiesPaneEnabledIn;
        },
        set: function (value) {
            this.isPropertiesPaneEnabledIn = value;
            this.propertiesPane.showPropertiesPane(value);
        },
        enumerable: true,
        configurable: true
    });
    ToolBar.prototype.onTextWrapTOCButton = function (btn) {
        var text = btn.innerHTML;
        var index = text.indexOf('C');
        btn.innerHTML = text.slice(0, index);
        var divElement = ej.base.createElement('div', { className: 'e-de-text-wrap' });
        divElement.innerHTML = text.slice(index, text.length);
        btn.appendChild(divElement);
    };
    ToolBar.prototype.onTextWrap = function (btn) {
        var text = btn.innerHTML;
        var index = text.indexOf(' ');
        btn.innerHTML = text.slice(0, index);
        var splitChar = text.split(' ');
        for (var i = 1; i < splitChar.length; i++) {
            var divElement = ej.base.createElement('div', { className: 'e-de-text-wrap' });
            divElement.innerHTML = splitChar[i];
            btn.appendChild(divElement);
        }
    };
    ToolBar.prototype.enableDisablePropertyPaneButton = function (isShow) {
        if (isShow) {
            this.showHideButton.firstChild.classList.remove('e-pane-disabled');
            this.showHideButton.firstChild.classList.add('e-pane-enabled');
        }
        else {
            this.showHideButton.firstChild.classList.add('e-pane-disabled');
            this.showHideButton.firstChild.classList.remove('e-pane-enabled');
        }
    };
    ToolBar.prototype.initializeFileTypeElements = function () {
        this.file = this.createFileTypeInput('uploadfileButton');
        this.file.addEventListener('change', this.onFileChange);
        this.file.setAttribute('accept', '.doc,.docx,.rtf,.txt,.sfdt');
        this.insertImage = this.createFileTypeInput('insertImageButton');
        this.insertImage.setAttribute('accept', '.jpeg,.jpg,.png,.gif,.bmp');
        this.insertImage.addEventListener('change', this.onInsertImage);
    };
    ToolBar.prototype.createFileTypeInput = function (elemId) {
        var fileType = ej.base.createElement('input', {
            id: elemId,
            attrs: { 'type': 'file' }, styles: 'position:fixed; left:-100em'
        });
        this.toolBarDiv.parentElement.appendChild(fileType);
        return fileType;
    };
    ToolBar.prototype.destroy = function () {
        if (this.documentLoader) {
            this.documentLoader.destroy();
            this.documentLoader = undefined;
        }
    };
    return ToolBar;
}());
var TitleBar = (function () {
    function TitleBar(element, docEditor, isShareNeeded) {
        var _this = this;
        this.initializeTitleBar = function (isShareNeeded) {
            _this.documentTitle = ej.base.createElement('label', { id: 'documenteditor_title_name', styles: 'text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text' });
            _this.documentTitleContentEditor = ej.base.createElement('div', { id: 'documenteditor_title_contentEditor', className: 'single-line', styles: 'border: 1px solid #2B3481;' });
            _this.documentTitleContentEditor.appendChild(_this.documentTitle);
            _this.tileBarDiv.appendChild(_this.documentTitleContentEditor);
            _this.documentTitleContentEditor.setAttribute('title', 'Document Name. Click or tap to rename this document.');
            var btnStyles = 'float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;'
                + 'border-radius: 2px;color:#ffffff;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400';
            _this.print = _this.addButton('e-de-icon-Print e-de-padding-right', 'Print', btnStyles, 'de-print', 'Print this document (Ctrl+P).', false);
            _this.open = _this.addButton('e-de-icon-Open e-de-padding-right', 'open', btnStyles, 'de-open', 'Open', false);
            var items = [
                { text: 'Microsoft Word (.docx)', id: 'word' },
                { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' },
            ];
            _this.export = _this.addButton('e-de-icon-Download e-de-padding-right', 'Download', btnStyles, 'documenteditor-share', 'Download this document.', true, items);
            if (!isShareNeeded) {
                _this.export.element.style.display = 'none';
            }
            else {
                _this.open.element.style.display = 'none';
            }
        };
        this.wireEvents = function () {
            _this.print.element.addEventListener('click', _this.onPrint);
            _this.open.element.addEventListener('click', function (e) {
                if (e.target.id === 'de-open') {
                    var fileUpload = document.getElementById('uploadfileButton');
                    fileUpload.value = '';
                    fileUpload.click();
                }
            });
            _this.documentTitleContentEditor.addEventListener('keydown', function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    _this.documentTitleContentEditor.contentEditable = 'false';
                    if (_this.documentTitleContentEditor.textContent === '') {
                        _this.documentTitleContentEditor.textContent = 'Document1';
                    }
                }
            });
            _this.documentTitleContentEditor.addEventListener('blur', function () {
                if (_this.documentTitleContentEditor.textContent === '') {
                    _this.documentTitleContentEditor.textContent = 'Document1';
                }
                _this.documentTitleContentEditor.contentEditable = 'false';
                _this.documentEditor.documentName = _this.documentTitle.textContent;
            });
            _this.documentTitleContentEditor.addEventListener('click', function () {
                _this.updateDocumentEditorTitle();
            });
        };
        this.updateDocumentEditorTitle = function () {
            _this.documentTitleContentEditor.contentEditable = 'true';
            _this.documentTitleContentEditor.focus();
            window.getSelection().selectAllChildren(_this.documentTitleContentEditor);
        };
        this.updateDocumentTitle = function () {
            if (_this.documentEditor.documentName === '') {
                _this.documentEditor.documentName = 'Untitled';
            }
            _this.documentTitle.textContent = _this.documentEditor.documentName;
        };
        this.onPrint = function () {
            _this.documentEditor.print();
        };
        this.onExportClick = function (args) {
            var value = args.item.id;
            switch (value) {
                case 'word':
                    _this.save('Docx');
                    break;
                case 'sfdt':
                    _this.save('Sfdt');
                    break;
            }
        };
        this.save = function (format) {
            _this.documentEditor.save(_this.documentEditor.documentName === '' ? 'sample' : _this.documentEditor.documentName, format);
        };
        this.tileBarDiv = element;
        this.documentEditor = docEditor;
        this.initializeTitleBar(isShareNeeded);
        this.wireEvents();
    }
    TitleBar.prototype.setTooltipForPopup = function () {
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
    };
    TitleBar.prototype.addButton = function (iconClass, btnText, styles, id, tooltipText, isDropDown, items) {
        var _this = this;
        var button = ej.base.createElement('button', { id: id, styles: styles });
        this.tileBarDiv.appendChild(button);
        button.setAttribute('title', tooltipText);
        if (isDropDown) {
            var dropButton = new ej.splitbuttons.DropDownButton({ select: this.onExportClick, items: items, iconCss: iconClass, cssClass: 'e-caret-hide', content: btnText, open: function () { _this.setTooltipForPopup(); } }, button);
            return dropButton;
        }
        else {
            var ejButton = new ej.buttons.Button({ iconCss: iconClass, content: btnText }, button);
            return ejButton;
        }
    };
    return TitleBar;
}());
var StatusBar = (function () {
    function StatusBar(parentElement, docEditor) {
        var _this = this;
        this.startPage = 1;
        this.initializeStatusBar = function () {
            var label = ej.base.createElement('label', { styles: 'margin-top: 6px;margin-right: 2px' });
            label.textContent = 'Page ';
            _this.statusBarDiv.appendChild(label);
            _this.pageNumberLabel = ej.base.createElement('label', { id: 'documenteditor_page_no', styles: 'text-transform:capitalize;white-space:pre;overflow:hidden;user-select:none;cursor:text;height:17px;max-width:150px' });
            _this.editablePageNumber = ej.base.createElement('div', { id: 'editablePageNumber', styles: 'border: 1px solid #F1F1F1;display: inline-flex;height: 17px;padding: 0px 4px;', className: 'single-line e-de-pagenumber-text' });
            _this.editablePageNumber.appendChild(_this.pageNumberLabel);
            _this.updatePageNumber();
            _this.statusBarDiv.appendChild(_this.editablePageNumber);
            _this.editablePageNumber.setAttribute('title', 'The current page number in the document. Click or tap to navigate specific page.');
            var label1 = ej.base.createElement('label', { id: 'documenteditor_pagecount', styles: 'margin-left:2px;letter-spacing: 1.05px;' });
            label1.textContent = 'of';
            _this.statusBarDiv.appendChild(label1);
            _this.pageCount = ej.base.createElement('label', { id: 'documenteditor_pagecount', styles: 'margin-left:6px;letter-spacing: 1.05px;' });
            _this.updatePageCount();
            _this.statusBarDiv.appendChild(_this.pageCount);
            var zoomBtn = ej.base.createElement('button', {
                id: 'documenteditor-zoom',
                className: 'e-de-statusbar-zoom'
            });
            _this.statusBarDiv.appendChild(zoomBtn);
            zoomBtn.setAttribute('title', 'Zoom level. Click or tap to open the Zoom options.');
            var items = [
                {
                    text: '200%',
                },
                {
                    text: '175%',
                },
                {
                    text: '150%',
                },
                {
                    text: '125%',
                },
                {
                    text: '100%',
                },
                {
                    text: '75%',
                },
                {
                    text: '50%',
                },
                {
                    text: '25%',
                },
                {
                    separator: true
                },
                {
                    text: 'Fit one page'
                },
                {
                    text: 'Fit page width',
                },
            ];
            _this.zoom = new ej.splitbuttons.DropDownButton({ content: '100%', items: items, select: _this.onZoom }, zoomBtn);
        };
        this.onZoom = function (args) {
            _this.setZoomValue(args.item.text);
            _this.updateZoomContent();
        };
        this.updateZoomContent = function () {
            _this.zoom.content = Math.round(_this.documentEditor.zoomFactor * 100) + '%';
        };
        this.setZoomValue = function (text) {
            if (text.match('Fit one page')) {
                _this.documentEditor.fitPage('FitOnePage');
            }
            else if (text.match('Fit page width')) {
                _this.documentEditor.fitPage('FitPageWidth');
            }
            else {
                _this.documentEditor.zoomFactor = parseInt(text, 0) / 100;
            }
        };
        this.updatePageCount = function () {
            _this.pageCount.textContent = _this.editorPageCount.toString();
        };
        this.updatePageNumber = function () {
            _this.pageNumberLabel.textContent = _this.startPage.toString();
        };
        this.updatePageNumberOnViewChange = function (args) {
            if (_this.documentEditor.selection
                && _this.documentEditor.selection.startPage >= args.startPage && _this.documentEditor.selection.startPage <= args.endPage) {
                _this.startPage = _this.documentEditor.selection.startPage;
            }
            else {
                _this.startPage = args.startPage;
            }
            _this.updatePageNumber();
        };
        this.wireEvents = function () {
            _this.editablePageNumber.addEventListener('keydown', function (e) {
                if (e.which === 13) {
                    e.preventDefault();
                    var pageNumber = parseInt(_this.editablePageNumber.textContent, 0);
                    if (pageNumber > _this.editorPageCount) {
                        _this.updatePageNumber();
                    }
                    else {
                        _this.documentEditor.scrollToPage(parseInt(_this.editablePageNumber.textContent, 0));
                    }
                    _this.editablePageNumber.contentEditable = 'false';
                    if (_this.editablePageNumber.textContent === '') {
                        _this.updatePageNumber();
                    }
                }
                if (e.which > 64) {
                    e.preventDefault();
                }
            });
            _this.editablePageNumber.addEventListener('blur', function () {
                if (_this.editablePageNumber.textContent === '' || parseInt(_this.editablePageNumber.textContent, 0) > _this.editorPageCount) {
                    _this.updatePageNumber();
                }
                _this.editablePageNumber.contentEditable = 'false';
            });
            _this.editablePageNumber.addEventListener('click', function () {
                _this.updateDocumentEditorPageNumber();
            });
        };
        this.updateDocumentEditorPageNumber = function () {
            _this.editablePageNumber.contentEditable = 'true';
            _this.editablePageNumber.focus();
            window.getSelection().selectAllChildren(_this.editablePageNumber);
        };
        this.statusBarDiv = parentElement;
        this.documentEditor = docEditor;
        this.initializeStatusBar();
        this.wireEvents();
    }
    Object.defineProperty(StatusBar.prototype, "editorPageCount", {
        get: function () {
            return this.documentEditor.pageCount;
        },
        enumerable: true,
        configurable: true
    });
    return StatusBar;
}());
var Paragraph = (function () {
    function Paragraph(documentEditor) {
        var _this = this;
        this.isRetrieving = false;
        this.appliedBulletStyle = 'dot';
        this.appliedNumberingstyle = 'arabic';
        this.appliedLineSpacing = '';
        this.applyLastAppliedNumbering = function () {
            switch (_this.appliedNumberingstyle) {
                case 'arabic':
                    _this.numberedNumberDotClick();
                    break;
                case 'lowletter':
                    _this.numberedLowLetterClick();
                    break;
                case 'upletter':
                    _this.numberedUpLetterClick();
                    break;
                case 'lowroman':
                    _this.numberedLowRomanClick();
                    break;
                case 'uproman':
                    _this.numberedUpRomanClick();
                    break;
            }
        };
        this.applyLastAppliedBullet = function () {
            switch (_this.appliedBulletStyle) {
                case 'dot':
                    _this.bulletDotClick();
                    break;
                case 'circle':
                    _this.bulletCircleClick();
                    break;
                case 'square':
                    _this.bulletSquareClick();
                    break;
                case 'arrow':
                    _this.bulletArrowClick();
                    break;
                case 'tick':
                    _this.bulletTickClick();
                    break;
                case 'flower':
                    _this.bulletFlowerClick();
                    break;
            }
        };
        this.updateOptions = function (args) {
            _this.updateStyleNames();
            args.popup.element.getElementsByClassName('create-style-footer')[0].addEventListener('click', _this.createStyle);
        };
        this.closeStyleValue = function (args) {
            if (!ej.base.isNullOrUndefined(_this.styleName)) {
                _this.style.value = _this.styleName;
                _this.style.dataBind();
            }
        };
        this.createStyle = function () {
            _this.style.hidePopup();
            if (!_this.documentEditor.isReadOnly) {
                _this.documentEditor.showDialog('Styles');
            }
        };
        this.leftAlignmentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleTextAlignment('Left');
            }
        };
        this.lineSpacingAction = function (args) {
            if (_this.isRetrieving) {
                return;
            }
            var text = args.item.text;
            switch (text) {
                case 'Single':
                    _this.documentEditor.selection.paragraphFormat.lineSpacing = 1;
                    break;
                case '1.15':
                    _this.documentEditor.selection.paragraphFormat.lineSpacing = 1.15;
                    break;
                case '1.5':
                    _this.documentEditor.selection.paragraphFormat.lineSpacing = 1.5;
                    break;
                case 'Double':
                    _this.documentEditor.selection.paragraphFormat.lineSpacing = 2;
                    break;
            }
            setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
        };
        this.selectStyleValue = function (args) {
            if (_this.isRetrieving || !args.isInteracted) {
                return;
            }
            setTimeout(function () { _this.applyStyleValue(args); }, 10);
        };
        this.rightAlignmentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleTextAlignment('Right');
            }
        };
        this.centerAlignmentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleTextAlignment('Center');
            }
        };
        this.justifyAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleTextAlignment('Justify');
            }
        };
        this.increaseIndentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.increaseIndent();
            }
        };
        this.decreaseIndentAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.decreaseIndent();
            }
        };
        this.numberedNoneClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.documentEditor.editor.clearList();
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedNumberDotClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'arabic';
                _this.documentEditor.editor.applyNumbering('%1.', 'Arabic');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedUpRomanClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'uproman';
                _this.documentEditor.editor.applyNumbering('%1.', 'UpRoman');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedUpLetterClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'upletter';
                _this.documentEditor.editor.applyNumbering('%1.', 'UpLetter');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedLowLetterClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'lowletter';
                _this.documentEditor.editor.applyNumbering('%1.', 'LowLetter');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.numberedLowRomanClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedNumberingstyle = 'lowroman';
                _this.documentEditor.editor.applyNumbering('%1.', 'LowRoman');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletDotClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'dot';
                _this.documentEditor.editor.applyBullet('\uf0b7', 'Symbol');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletCircleClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'circle';
                _this.documentEditor.editor.applyBullet('\uf06f' + '\u0020', 'Symbol');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletSquareClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'square';
                _this.documentEditor.editor.applyBullet('\uf0a7', 'Wingdings');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletFlowerClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'flower';
                _this.documentEditor.editor.applyBullet('\uf076', 'Wingdings');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletArrowClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'arrow';
                _this.documentEditor.editor.applyBullet('\uf0d8', 'Wingdings');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.bulletTickClick = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (_this.documentEditor.editor) {
                _this.appliedBulletStyle = 'tick';
                _this.documentEditor.editor.applyBullet('\uf0fc', 'Wingdings');
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.documentEditor = documentEditor;
    }
    Paragraph.prototype.initializeParagraphPropertiesDiv = function (wholeDiv) {
        this.textProperties = wholeDiv;
        var element = 'font_properties';
        var paragraphDiv = this.createDivTemplate(element + '_paragraph', wholeDiv, 'padding:10px;');
        var label = ej.base.createElement('label', { styles: 'width:26px;', className: 'e-de-prop-label' });
        label.innerHTML = 'Paragraph';
        paragraphDiv.appendChild(label);
        var styleDiv = this.createDivTemplate(element + '_styleDiv', paragraphDiv, 'margin-bottom: 8px;');
        var styleSelect = ej.base.createElement('input', { id: element + '_style', styles: 'width:248px;font-size: 12px;color: #000000;letter-spacing: 0.05px;padding-left:10px;' });
        styleDiv.appendChild(styleSelect);
        this.createStyleDropDownList(styleSelect);
        var indentWholeDiv = this.createDivTemplate(element + '_indentWholeDiv', paragraphDiv);
        indentWholeDiv.style.display = 'flex';
        var indentDiv = this.createDivTemplate(element + '_indentDiv', indentWholeDiv, 'width:164px;height:32px;display:flex;');
        indentDiv.className = 'e-de-prop-div-left e-btn-group';
        this.leftAlignment = this.createButtonTemplate(element + '_leftIndent', 'e-de-icon-AlignLeft e-font-icons', indentDiv, 'e-de-prop-indent-button', '40.5', 'Align left (Ctrl+L)');
        this.centerAlignment = this.createButtonTemplate(element + '_centerIndent', 'e-de-icon-AlignCenter e-font-icons', indentDiv, 'e-de-prop-indent-button', '40.5', 'Center (Ctrl+E)');
        this.rightAlignment = this.createButtonTemplate(element + '_rightIndent', 'e-de-icon-AlignRight e-font-icons', indentDiv, 'e-de-prop-indent-button', '40.5', 'Align right (Ctrl+R)');
        this.justify = this.createButtonTemplate(element + '_justify', 'e-de-icon-Justify e-font-icons', indentDiv, 'e-de-prop-indent-last-button', '40.5', 'Justify (Ctrl+J)');
        var incDecIndentDiv = this.createDivTemplate(element + '_indentDiv', indentWholeDiv, 'width:75px;height:32px;display:flex;');
        incDecIndentDiv.className = 'e-de-prop-div-left e-btn-group';
        incDecIndentDiv.style.marginLeft = '8px';
        this.decreaseIndent = this.createButtonTemplate(element + '_decreaseIndent', 'e-de-icon-DecreaseIndent e-font-icons', incDecIndentDiv, 'e-de-prop-indent-button', '37', 'Decrease indent');
        this.increaseIndent = this.createButtonTemplate(element + '_increaseIndent', 'e-de-icon-IncreaseIndent e-font-icons', incDecIndentDiv, 'e-de-prop-indent-last-button', '37', 'Increase indent');
        var listDiv = this.createDivTemplate(element + '_listDiv', paragraphDiv, 'margin-top:8px;display:flex;');
        var lineHeight = ej.base.createElement('button', { id: element + '_lineHeight' });
        listDiv.appendChild(lineHeight);
        this.lineSpacing = this.createLineSpacingDropdown(lineHeight);
        var listDropDown = this.createDivTemplate(element + '_listDropDiv', listDiv);
        listDropDown.className = 'de-split-button';
        listDropDown.style.paddingLeft = '10px';
        var bulletButton = ej.base.createElement('button', { id: element + '_bullet' });
        listDropDown.appendChild(bulletButton);
        var numberingList = ej.base.createElement('button', { id: element + '_numberingList' });
        listDropDown.appendChild(numberingList);
        this.createBulletListDropButton('e-de-icon-Bullets', bulletButton);
        this.createNumberListDropButton('e-de-icon-Numbering', numberingList);
    };
    Paragraph.prototype.createSeperator = function (parentDiv) {
        var seperator = ej.base.createElement('div', { className: 'e-de-prop-vline' });
        parentDiv.appendChild(seperator);
    };
    Paragraph.prototype.createDivTemplate = function (id, parentDiv, style) {
        return createDivTemplate(id, parentDiv, style);
    };
    Paragraph.prototype.createButtonTemplate = function (id, iconcss, div, buttonClass, width, toolTipText) {
        return createButtonTemplate(id, iconcss, div, buttonClass, width, toolTipText);
    };
    Paragraph.prototype.createLineSpacingDropdown = function (button) {
        var _this = this;
        var items = [{
            text: 'Single'
        }, {
            text: '1.15'
        }, {
            text: '1.5'
        }, {
            text: 'Double'
        }];
        var dropdown = new ej.splitbuttons.DropDownButton({
            items: items,
            iconCss: 'e-de-icon-LineSpacing',
            select: this.lineSpacingAction,
            cssClass: 'e-de-prop-splitbutton',
            beforeItemRender: function (args) {
                args.element.innerHTML = '<span></span>' + args.item.text;
                var span = args.element.children[0];
                if (args.item.text === _this.appliedLineSpacing) {
                    span.style.marginRight = '10px';
                    span.setAttribute('class', 'e-de-selected-item');
                }
                else {
                    args.element.children[0].style.marginRight = '25px';
                    args.element.children[0].classList.remove('e-de-selected-item');
                }
            }
        });
        dropdown.appendTo(button);
        button.setAttribute('title', 'Line spacing');
        return dropdown;
    };
    Paragraph.prototype.createNumberListDropButton = function (iconcss, button) {
        var _this = this;
        var div = ej.base.createElement('div', { id: 'target', styles: 'border: 1px solid black;width: 213px;height: auto;display:none' });
        var ulTag = ej.base.createElement('ul', {
            styles: 'display: block; outline: 0px;',
            id: 'listMenu',
            className: 'ui-wfloating-menu ui-bullets-menu de-list-container de-list-thumbnail'
        });
        div.appendChild(ulTag);
        var noneTag = this.createNumberNoneListTag(ulTag);
        noneTag.addEventListener('click', this.numberedNoneClick);
        var numberList = this.createNumberListTag(ulTag, '1.', '2.', '3.');
        numberList.addEventListener('click', this.numberedNumberDotClick);
        var lowLetter = this.createNumberListTag(ulTag, 'a.', 'b.', 'c.');
        lowLetter.addEventListener('click', this.numberedLowLetterClick);
        var upLetter = this.createNumberListTag(ulTag, 'A.', 'B.', 'C.');
        upLetter.addEventListener('click', this.numberedUpLetterClick);
        var lowRoman = this.createNumberListTag(ulTag, 'i.', 'ii.', 'iii.');
        lowRoman.addEventListener('click', this.numberedLowRomanClick);
        var upRoman = this.createNumberListTag(ulTag, 'I.', 'II.', 'III.');
        upRoman.addEventListener('click', this.numberedUpRomanClick);
        var splitButtonOptions = {
            target: div,
            iconCss: iconcss,
            cssClass: 'e-de-prop-splitbutton',
            beforeOpen: function () { div.style.display = 'block'; },
            beforeClose: function () { div.style.display = 'none'; }
        };
        var dropdown = new ej.splitbuttons.SplitButton(splitButtonOptions);
        dropdown.click = function () {
            _this.applyLastAppliedNumbering();
        };
        dropdown.appendTo(button);
        button.parentElement.setAttribute('title', 'Numbering');
    };
    Paragraph.prototype.createBulletListDropButton = function (iconcss, button) {
        var _this = this;
        var div = ej.base.createElement('div', { id: 'bullet_list', styles: 'border: 1px solid black; width: 198px;height: auto;display:none' });
        var ulTag = ej.base.createElement('ul', {
            styles: 'display: block; outline: 0px;', id: 'listMenu',
            className: 'ui-wfloating-menu ui-bullets-menu de-list-container de-list-thumbnail'
        });
        div.appendChild(ulTag);
        var noneTag = this.createBulletListTag(ulTag, 'e-de-icon-bullet-none');
        noneTag.addEventListener('click', this.numberedNoneClick);
        var dotBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-dot');
        dotBullet.addEventListener('click', this.bulletDotClick);
        var circleBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-circle');
        circleBullet.addEventListener('click', this.bulletCircleClick);
        var squareBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-square');
        squareBullet.addEventListener('click', this.bulletSquareClick);
        var flowerBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-flower');
        flowerBullet.addEventListener('click', this.bulletFlowerClick);
        var arrowBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-arrow');
        arrowBullet.addEventListener('click', this.bulletArrowClick);
        var tickBullet = this.createBulletListTag(ulTag, 'e-de-icon-bullet-tick');
        tickBullet.addEventListener('click', this.bulletTickClick);
        var menuOptions = {
            target: div,
            iconCss: iconcss,
            cssClass: 'e-de-prop-splitbutton',
            beforeOpen: function () { div.style.display = 'block'; },
            beforeClose: function () { div.style.display = 'none'; }
        };
        var dropdown = new ej.splitbuttons.SplitButton(menuOptions);
        dropdown.click = function () {
            _this.applyLastAppliedBullet();
        };
        dropdown.appendTo(button);
        button.parentElement.setAttribute('title', 'Bullets');
    };
    Paragraph.prototype.createNumberListTag = function (ulTag, text1, text2, text3) {
        var liTag = ej.base.createElement('li', {
            styles: 'display:block',
            className: 'ui-wfloating-menuitem ui-wfloating-menuitem-md de-list-items  de-list-item-size'
        });
        ulTag.appendChild(liTag);
        var innerHTML = '<div>' + text1 + '<span class="ui-list-line"></span></div><div>' + text2 + '<span class="ui-list-line">';
        innerHTML += '</span></div><div>' + text3 + '<span class="ui-list-line"> </span></div >';
        var liInnerDiv = ej.base.createElement('div', {
            className: 'ui-list-header-presetmenu',
            id: 'ui-zlist0', innerHTML: innerHTML
        });
        liTag.appendChild(liInnerDiv);
        return liTag;
    };
    Paragraph.prototype.createNumberNoneListTag = function (ulTag) {
        var liTag = ej.base.createElement('li', {
            styles: 'display:block;padding:0px !important',
            className: 'ui-wfloating-menuitem ui-wfloating-menuitem-md de-list-items  de-list-item-size'
        });
        ulTag.appendChild(liTag);
        var innerHTML = '<div class="e-de-list-items-size"><span class="ui-bullets e-de-list-items-size"' +
            'style="display:table-cell; text-align: center; vertical-align:middle">None</span></div>';
        var liInnerDiv = ej.base.createElement('div', {
            className: 'ui-list-header-presetmenu e-de-list-items-size',
            id: 'ui-zlist0', innerHTML: innerHTML
        });
        liTag.appendChild(liInnerDiv);
        return liTag;
    };
    Paragraph.prototype.createBulletListTag = function (ulTag, iconCss) {
        var liTag = ej.base.createElement('li', {
            styles: 'display:block;',
            className: 'ui-wfloating-menuitem ui-wfloating-bullet-menuitem-md de-list-items  de-list-item-size'
        });
        ulTag.appendChild(liTag);
        var liInnerDiv = ej.base.createElement('div', { className: 'ui-bullet-list-header-presetmenu', id: 'ui-zlist0' });
        var spanDiv = ej.base.createElement('div');
        liInnerDiv.appendChild(spanDiv);
        var span = ej.base.createElement('span', { className: iconCss });
        spanDiv.appendChild(span);
        liTag.appendChild(liInnerDiv);
        return liTag;
    };
    Paragraph.prototype.createStyleDropDownList = function (selectElement) {
        this.style = new ej.dropdowns.DropDownList({
            dataSource: [{ StyleName: 'Normal', Class: 'e-font-icons e-edit-font' }],
            cssClass: 'e-de-prop-dropdown',
            query: new ej.data.Query().select(['StyleName', 'Style']),
            fields: { text: 'StyleName', value: 'StyleName' },
            open: this.updateOptions,
            change: this.selectStyleValue,
            close: this.closeStyleValue,
            itemTemplate: '<span style="${Style}">${StyleName}</span>',
            footerTemplate: '<span class="create-style-footer">Manage Styles</span>'
        });
        this.style.appendTo(selectElement);
        selectElement.parentElement.setAttribute('title', 'Styles');
    };
    Paragraph.prototype.updateStyleNames = function () {
        this.styleName = !ej.base.isNullOrUndefined(this.style.itemData) ? this.style.itemData.StyleName : undefined;
        this.style.dataSource = this.constructStyleDropItems(this.documentEditor.getStyles('Paragraph'));
    };
    Paragraph.prototype.constructStyleDropItems = function (styles) {
        var collection = [];
        for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
            var styleObj = styles_1[_i];
            var obj = {};
            obj.StyleName = styleObj.name;
            obj.Style = this.parseStyle(styleObj.style);
            collection.push(obj);
        }
        return collection;
    };
    Paragraph.prototype.parseStyle = function (style) {
        var domStyle = '';
        var styleObj = JSON.parse(style);
        var textDecoration = '';
        if (!ej.base.isNullOrUndefined(styleObj.characterFormat.baselineAlignment) && styleObj.characterFormat.baselineAlignment !== 'Normal') {
            var vAlign = '';
            switch (styleObj.characterFormat.baselineAlignment) {
                case 'Superscript':
                    vAlign = 'super';
                    break;
                case 'Subscript':
                    vAlign = 'sub';
                    break;
            }
            if (vAlign.length > 1) {
                domStyle += 'vertical-align:' + vAlign + ';';
            }
        }
        if (!ej.base.isNullOrUndefined(styleObj.characterFormat.underline) && styleObj.characterFormat.underline !== 'None') {
            textDecoration += 'underline ';
        }
        if (!ej.base.isNullOrUndefined(styleObj.characterFormat.strikethrough) && styleObj.characterFormat.strikethrough !== 'None') {
            textDecoration += 'line-through ';
        }
        if (!ej.base.isNullOrUndefined(styleObj.characterFormat.fontSize)) {
            domStyle += 'font-size:' + styleObj.characterFormat.fontSize + 'px;';
        }
        if (!ej.base.isNullOrUndefined(styleObj.characterFormat.fontFamily)) {
            domStyle += 'font-family:' + styleObj.characterFormat.fontFamily + ';';
        }
        if (!ej.base.isNullOrUndefined(styleObj.characterFormat.bold) && styleObj.characterFormat.bold) {
            domStyle += 'font-weight:bold;';
        }
        if (!ej.base.isNullOrUndefined(styleObj.characterFormat.italic) && styleObj.characterFormat.italic) {
            domStyle += 'font-style:italic;';
        }
        if (!ej.base.isNullOrUndefined(styleObj.characterFormat.fontColor)) {
            domStyle += 'color: ' + styleObj.characterFormat.fontColor + ';';
        }
        if (textDecoration.length > 1) {
            domStyle += 'text-decoration:' + textDecoration + ';';
        }
        return domStyle;
    };
    Paragraph.prototype.wireEvent = function () {
        var _this = this;
        this.leftAlignment.addEventListener('click', function () { _this.leftAlignmentAction(); });
        this.rightAlignment.addEventListener('click', function () { _this.rightAlignmentAction(); });
        this.centerAlignment.addEventListener('click', function () { _this.centerAlignmentAction(); });
        this.justify.addEventListener('click', function () { _this.justifyAction(); });
        this.increaseIndent.addEventListener('click', function () { _this.increaseIndentAction(); });
        this.decreaseIndent.addEventListener('click', function () { _this.decreaseIndentAction(); });
        this.lineSpacing.addEventListener('select', function (args) { _this.lineSpacingAction(args); });
    };
    Paragraph.prototype.setLineSpacing = function () {
        var lineSpacing = this.documentEditor.selection.paragraphFormat.lineSpacing;
        if (lineSpacing === 1) {
            this.appliedLineSpacing = 'Single';
        }
        else if (lineSpacing === 1.15) {
            this.appliedLineSpacing = '1.15';
        }
        else if (lineSpacing === 1.5) {
            this.appliedLineSpacing = '1.5';
        }
        else if (lineSpacing === 2) {
            this.appliedLineSpacing = 'Double';
        }
        else {
            this.appliedLineSpacing = '';
        }
    };
    Paragraph.prototype.unwireEvents = function () {
        this.leftAlignment.click = undefined;
        this.rightAlignment.click = undefined;
        this.centerAlignment.click = undefined;
        this.justify.click = undefined;
        this.increaseIndent.click = undefined;
        this.decreaseIndent.click = undefined;
        this.lineSpacing.select = undefined;
        this.style.select = undefined;
    };
    Paragraph.prototype.applyStyleValue = function (args) {
        if (!this.documentEditor.isReadOnly && this.documentEditor.editor) {
            this.documentEditor.editor.applyStyle(args.itemData.StyleName);
        }
    };
    Paragraph.prototype.onSelectionChange = function () {
        this.isRetrieving = true;
        if (this.documentEditor.editor) {
            var style = this.documentEditor.selection.paragraphFormat.styleName;
            if (style) {
                this.style.value = style;
                this.style.dataBind();
            }
            else {
                this.style.value = '';
            }
            if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Left') {
                if (!this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.add('e-btn-toggle');
                }
                if (this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.remove('e-btn-toggle');
                }
                if (this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.remove('e-btn-toggle');
                }
                if (this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.remove('e-btn-toggle');
                }
            }
            else if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Right') {
                if (this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.remove('e-btn-toggle');
                }
                if (!this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.add('e-btn-toggle');
                }
                if (this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.remove('e-btn-toggle');
                }
                if (this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.remove('e-btn-toggle');
                }
            }
            else if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Center') {
                if (this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.remove('e-btn-toggle');
                }
                if (this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.remove('e-btn-toggle');
                }
                if (!this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.add('e-btn-toggle');
                }
                if (this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.remove('e-btn-toggle');
                }
            }
            else if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Justify') {
                if (this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.remove('e-btn-toggle');
                }
                if (this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.remove('e-btn-toggle');
                }
                if (this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.remove('e-btn-toggle');
                }
                if (!this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.add('e-btn-toggle');
                }
            }
            else if (this.documentEditor.selection.paragraphFormat.textAlignment === 'Justify') {
                if (this.leftAlignment.classList.contains('e-btn-toggle')) {
                    this.leftAlignment.classList.remove('e-btn-toggle');
                }
                if (this.rightAlignment.classList.contains('e-btn-toggle')) {
                    this.rightAlignment.classList.remove('e-btn-toggle');
                }
                if (this.centerAlignment.classList.contains('e-btn-toggle')) {
                    this.centerAlignment.classList.remove('e-btn-toggle');
                }
                if (!this.justify.classList.contains('e-btn-toggle')) {
                    this.justify.classList.add('e-btn-toggle');
                }
            }
        }
        this.setLineSpacing();
        this.isRetrieving = false;
    };
    return Paragraph;
}());
var Text = (function () {
    function Text(documentEditor) {
        var _this = this;
        this.isRetrieving = false;
        this.appliedHighlightColor = 'rgb(255, 255, 0)';
        this.createHighlightColorSplitButton = function (id, width, divElement, toolTipText) {
            var buttonElement = ej.base.createElement('button', { id: id });
            buttonElement.style.width = width + 'px';
            buttonElement.style.padding = '0px 1px 1px 1px';
            buttonElement.style.height = 30 + 'px';
            divElement.appendChild(buttonElement);
            var hgltSplitObj = new ej.splitbuttons.SplitButton({
                iconCss: 'de-hglt-color',
                target: _this.highlightColorElement, close: _this.closePopup, beforeOpen: _this.openPopup
            });
            hgltSplitObj.appendTo(buttonElement);
            hgltSplitObj.click = function () {
                _this.applyHighlightColor(_this.highlightColorInputElement.style.backgroundColor);
            };
            hgltSplitObj.element.firstChild.style.backgroundColor = 'rgb(255, 255, 0)';
            hgltSplitObj.element.closest('.e-split-btn-wrapper').setAttribute('title', toolTipText);
            return hgltSplitObj;
        };
        this.openPopup = function () {
            _this.highlightColorElement.style.display = 'block';
        };
        this.closePopup = function () {
            _this.highlightColorElement.style.display = 'none';
        };
        this.onHighLightColor = function (event) {
            if (_this.documentEditor.selection) {
                _this.applyHighlightColor(event.currentTarget.style.backgroundColor);
                _this.highlightColor.toggle();
            }
        };
        this.applyHighlightColorAsBackground = function (color) {
            _this.removeSelectedColorDiv();
            if (color === 'NoColor') {
                _this.highlightColorElement.querySelector('#noColorDiv').classList.add('e-color-selected');
            }
            else if (color === 'Yellow') {
                _this.highlightColorElement.querySelector('#yellowDiv').classList.add('e-color-selected');
            }
            else if (color === 'BrightGreen') {
                _this.highlightColorElement.querySelector('#brightGreenDiv').classList.add('e-color-selected');
            }
            else if (color === 'Turquoise') {
                _this.highlightColorElement.querySelector('#turquoiseDiv').classList.add('e-color-selected');
            }
            else if (color === 'Pink') {
                _this.highlightColorElement.querySelector('#hotPinkDiv').classList.add('e-color-selected');
            }
            else if (color === 'Red') {
                _this.highlightColorElement.querySelector('#redDiv').classList.add('e-color-selected');
            }
            else if (color === 'DarkBlue') {
                _this.highlightColorElement.querySelector('#darkBlueDiv').classList.add('e-color-selected');
            }
            else if (color === 'Teal') {
                _this.highlightColorElement.querySelector('#tealDiv').classList.add('e-color-selected');
            }
            else if (color === 'Green') {
                _this.highlightColorElement.querySelector('#greenDiv').classList.add('e-color-selected');
            }
            else if (color === 'Violet') {
                _this.highlightColorElement.querySelector('#violetDiv').classList.add('e-color-selected');
            }
            else if (color === 'DarkRed') {
                _this.highlightColorElement.querySelector('#darkRedDiv').classList.add('e-color-selected');
            }
            else if (color === 'DarkYellow') {
                _this.highlightColorElement.querySelector('#darkYellowDiv').classList.add('e-color-selected');
            }
            else if (color === 'Gray50') {
                _this.highlightColorElement.querySelector('#gray50Div').classList.add('e-color-selected');
            }
            else if (color === 'Gray25') {
                _this.highlightColorElement.querySelector('#gray25Div').classList.add('e-color-selected');
            }
            else if (color === 'Black') {
                _this.highlightColorElement.querySelector('#blackDiv').classList.add('e-color-selected');
            }
            else if (color === 'Blue') {
                _this.highlightColorElement.querySelector('#blueDiv').classList.add('e-color-selected');
            }
        };
        this.removeSelectedColorDiv = function () {
            _this.highlightColorElement.querySelector('#noColorDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#yellowDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#brightGreenDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#turquoiseDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#hotPinkDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#redDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#darkBlueDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#tealDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#greenDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#violetDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#darkRedDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#darkYellowDiv').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#gray50Div').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#gray25Div').classList.remove('e-color-selected');
            _this.highlightColorElement.querySelector('#blackDiv').classList.remove('e-color-selected');
        };
        this.applyHighlightColor = function (color) {
            _this.appliedHighlightColor = color;
            var hgltColor = _this.getHighLightColor(color);
            _this.documentEditor.selection.characterFormat.highlightColor = hgltColor;
        };
        this.getHighLightColor = function (color) {
            switch (color) {
                case 'rgb(255, 255, 0)':
                    return 'Yellow';
                case 'rgb(0, 255, 0)':
                    return 'BrightGreen';
                case 'rgb(0, 255, 255)':
                    return 'Turquoise';
                case 'rgb(255, 0, 255)':
                    return 'Pink';
                case 'rgb(0, 0, 255)':
                    return 'Blue';
                case 'rgb(255, 0, 0)':
                    return 'Red';
                case 'rgb(0, 0, 128)':
                    return 'DarkBlue';
                case 'rgb(0, 128, 128)':
                    return 'Teal';
                case 'rgb(0, 128, 0)':
                    return 'Green';
                case 'rgb(128, 0, 128)':
                    return 'Violet';
                case 'rgb(128, 0, 0)':
                    return 'DarkRed';
                case 'rgb(128, 128, 0)':
                    return 'DarkYellow';
                case 'rgb(128, 128, 128)':
                    return 'Gray50';
                case 'rgb(192, 192, 192)':
                    return 'Gray25';
                case 'rgb(0, 0, 0)':
                    return 'Black';
                default:
                    return 'NoColor';
            }
        };
        this.createFontColorPicker = function (id, width, divElement, toolTipText) {
            var inputElement = ej.base.createElement('input', { id: id, attrs: { 'type': 'color' } });
            inputElement.style.width = width + 'px';
            divElement.appendChild(inputElement);
            _this.fontColorInputElement = new ej.inputs.ColorPicker({ value: '#000000', showButtons: true }, inputElement);
            _this.fontColorInputElement.element.parentElement.setAttribute('title', toolTipText);
            return inputElement;
        };
        this.boldAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleBold();
            }
        };
        this.italicAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleItalic();
            }
        };
        this.underlineAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleUnderline('Single');
            }
        };
        this.strikethroughAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleStrikethrough();
            }
        };
        this.clearFormatAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.clearFormatting();
            }
        };
        this.subscriptAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleSubscript();
            }
        };
        this.superscriptAction = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.editor) {
                _this.documentEditor.editor.toggleSuperscript();
            }
        };
        this.changeFontColor = function (arg) {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.selection) {
                _this.documentEditor.selection.characterFormat.fontColor = arg.currentValue.hex;
                setTimeout(function () { _this.documentEditor.focusIn(); }, 30);
            }
        };
        this.changeFontFamily = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.selection && _this.fontFamily.value !== '') {
                setTimeout(function () { _this.documentEditor.selection.characterFormat.fontFamily = _this.fontFamily.value; }, 10);
            }
        };
        this.changeFontSize = function () {
            if (_this.isRetrieving) {
                return;
            }
            if (!_this.documentEditor.isReadOnly && _this.documentEditor.selection && _this.fontSize.value !== '') {
                setTimeout(function () { _this.documentEditor.selection.characterFormat.fontSize = _this.fontSize.value; }, 10);
            }
        };
        this.documentEditor = documentEditor;
    }
    Text.prototype.initializeTextPropertiesDiv = function (wholeDiv) {
        this.textProperties = wholeDiv;
        var element = 'font_properties';
        var textDiv = this.createDivTemplate(element + '_text', wholeDiv, 'padding:10px;border-bottom:0.5px solid #E0E0E0');
        var label = ej.base.createElement('label', { className: 'e-de-prop-label' });
        label.innerHTML = 'Text';
        textDiv.appendChild(label);
        var fontDiv = this.createDivTemplate(element + '_sizeStyle', textDiv, 'display:inline-flex;');
        var fontFamilyDiv = this.createDivTemplate(element + '_fontFamilyDiv', fontDiv, 'margin-right:9px;');
        var fontFamily = ej.base.createElement('input', {
            id: element + '_fontFamily',
            styles: 'font-size: 12px;color: #000000;letter-spacing: 0.05px;padding-left:10px;', className: 'e-prop-font-style'
        });
        fontFamilyDiv.appendChild(fontFamily);
        this.createDropDownListForFamily(fontFamily);
        var fontSizeDiv = this.createDivTemplate(element + '_fontSizeDiv', fontDiv);
        var fontSize = ej.base.createElement('input', {
            id: element + '_fontSize',
            styles: 'font-size: 12px;color: #000000;letter-spacing: 0.05px;padding-left:10px', innerHTML: 'type:number',
            className: 'e-prop-font-style',
        });
        fontSizeDiv.appendChild(fontSize);
        this.createDropDownListForSize(fontSize);
        var propertiesDiv = ej.base.createElement('div', {
            id: element + '_properties',
            styles: 'display:inline-flex;margin-top:8px;height: 32px'
        });
        textDiv.appendChild(propertiesDiv);
        var leftDiv = ej.base.createElement('div', {
            id: element + '_leftDiv',
            className: 'e-de-prop-div-left e-btn-group', styles: 'display:inline-flex;height:32px;width:163px'
        });
        propertiesDiv.appendChild(leftDiv);
        this.bold = this.createButtonTemplate(element + '_bold', 'e-de-icon-Bold e-font-icons', leftDiv, 'e-de-prop-font-button', '40.5', 'Bold (Ctrl+B)');
        this.italic = this.createButtonTemplate(element + '_italic', 'e-de-icon-Italic e-font-icons', leftDiv, 'e-de-prop-font-button', '40.5', 'Italic (Ctrl+I)');
        this.underline = this.createButtonTemplate(element + '_underline', 'e-de-icon-Underline e-font-icons', leftDiv, 'e-de-prop-font-button', '40.5', 'Underline (Ctrl+U)');
        this.strikethrough = this.createButtonTemplate(element + '_strikethrough', 'e-de-icon-Strikethrough e-font-icons', leftDiv, 'e-de-prop-font-last-button', '40.5', 'Strikethrough');
        var rightDiv = ej.base.createElement('div', { id: element + '_rightDiv', className: 'e-de-prop-div-right e-btn-group', styles: 'display:inline-flex;margin-left:8px' });
        propertiesDiv.appendChild(rightDiv);
        this.superscript = this.createButtonTemplate(element + '_superscript', 'e-de-icon-Superscript e-font-icons', rightDiv, 'e-de-prop-font-button', '38.5', 'Superscript (Ctrl+Shift++)');
        this.subscript = this.createButtonTemplate(element + '_subscript', 'e-de-icon-Subscript e-font-icons', rightDiv, 'e-de-prop-font-last-button', '38.5', 'Subscript (Ctrl+=)');
        var leftDiv2 = ej.base.createElement('div', { id: element + '_color', className: 'de-font-clr-picker e-de-prop-div-left', styles: 'display:inline-flex;margin-top:8px;height:32px' });
        textDiv.appendChild(leftDiv2);
        this.fontColor = this.createFontColorPicker(element + '_textColor', 40.5, leftDiv2, 'Font color');
        leftDiv2.firstElementChild.lastElementChild.lastElementChild.firstChild.classList.add('e-de-icon-FontColor', 'e-font-icons');
        this.initializeHighlightColorElement();
        this.highlightColor = this.createHighlightColorSplitButton(element + '_highlightColor', 34.5, leftDiv2, 'Text highlight color');
        this.highlightColor.element.nextElementSibling.firstElementChild.classList.add('e-de-icon-HighlightColor');
        this.highlightColorInputElement = this.highlightColor.element.firstChild;
        this.clearFormat = this.createButtonTemplate(element + '_clearFormat', 'e-de-icon-ClearAll e-font-icons', leftDiv2, 'e-de-prop-font-last-button', '40.5', 'Clear all formatting');
    };
    Text.prototype.initializeHighlightColorElement = function () {
        this.highlightColorElement = ej.base.createElement('div', { id: 'highlight_color_ppty', styles: 'display:none' });
        var yellowDiv = this.createHightlighColorPickerDiv('#ffff00', 'yellowDiv');
        var brightGreenDiv = this.createHightlighColorPickerDiv('#00ff00', 'brightGreenDiv');
        var turquoiseDiv = this.createHightlighColorPickerDiv('#00ffff', 'turquoiseDiv');
        var hotPinkDiv = this.createHightlighColorPickerDiv('#ff00ff', 'hotPinkDiv');
        var blueDiv = this.createHightlighColorPickerDiv('#0000ff', 'blueDiv');
        var redDiv = this.createHightlighColorPickerDiv('#ff0000', 'redDiv');
        var darkBlueDiv = this.createHightlighColorPickerDiv('#000080', 'darkBlueDiv');
        var tealDiv = this.createHightlighColorPickerDiv('#008080', 'tealDiv');
        var greenDiv = this.createHightlighColorPickerDiv('#008000', 'greenDiv');
        var violetDiv = this.createHightlighColorPickerDiv('#800080', 'violetDiv');
        var darkRedDiv = this.createHightlighColorPickerDiv('#800000', 'darkRedDiv');
        var darkYellowDiv = this.createHightlighColorPickerDiv('#808000', 'darkYellowDiv');
        var gray50Div = this.createHightlighColorPickerDiv('#808080', 'gray50Div');
        var gray25Div = this.createHightlighColorPickerDiv('#c0c0c0', 'gray25Div');
        var blackDiv = this.createHightlighColorPickerDiv('#000000', 'blackDiv');
        var nocolor = ej.base.createElement('div', { className: 'e-hglt-no-color' });
        this.highlightColorElement.appendChild(nocolor);
        var nocolorDiv = ej.base.createElement('div', { styles: 'width:24px;height:24px;background-color:#ffffff;margin:3px;', id: 'noColorDiv' });
        nocolor.appendChild(nocolorDiv);
        var nocolorDivValue = ej.base.createElement('div', { innerHTML: 'No color', className: 'de-hglt-no-color' });
        nocolorDiv.appendChild(nocolorDivValue);
        yellowDiv.addEventListener('click', this.onHighLightColor);
        brightGreenDiv.addEventListener('click', this.onHighLightColor);
        turquoiseDiv.addEventListener('click', this.onHighLightColor);
        hotPinkDiv.addEventListener('click', this.onHighLightColor);
        blueDiv.addEventListener('click', this.onHighLightColor);
        redDiv.addEventListener('click', this.onHighLightColor);
        darkBlueDiv.addEventListener('click', this.onHighLightColor);
        tealDiv.addEventListener('click', this.onHighLightColor);
        greenDiv.addEventListener('click', this.onHighLightColor);
        violetDiv.addEventListener('click', this.onHighLightColor);
        darkRedDiv.addEventListener('click', this.onHighLightColor);
        darkYellowDiv.addEventListener('click', this.onHighLightColor);
        gray50Div.addEventListener('click', this.onHighLightColor);
        gray25Div.addEventListener('click', this.onHighLightColor);
        blackDiv.addEventListener('click', this.onHighLightColor);
        nocolor.addEventListener('click', this.onHighLightColor);
    };
    Text.prototype.createHightlighColorPickerDiv = function (backgroundColor, id) {
        var colorDiv = ej.base.createElement('div', { className: 'e-de-hglt-btn', id: id });
        colorDiv.style.backgroundColor = backgroundColor;
        this.highlightColorElement.appendChild(colorDiv);
        return colorDiv;
    };
    Text.prototype.createDivTemplate = function (id, parentDiv, style) {
        return createDivTemplate(id, parentDiv, style);
    };
    Text.prototype.createButtonTemplate = function (id, iconcss, div, buttonClass, width, toolTipText) {
        return createButtonTemplate(id, iconcss, div, buttonClass, width, toolTipText);
    };
    Text.prototype.createColorTypeInput = function (elemId) {
        var colorType = ej.base.createElement('input', {
            id: elemId,
            attrs: { 'type': 'color' }, styles: 'position:fixed; left:-100em'
        });
        this.documentEditor.getDocumentEditorElement().parentElement.appendChild(colorType);
        return colorType;
    };
    Text.prototype.createDropDownListForSize = function (fontSelectElement) {
        var _this = this;
        var fontSize = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72', '96'];
        this.fontSize = new ej.dropdowns.ComboBox({
            dataSource: fontSize, popupHeight: '180px',
            popupWidth: '78px', width: '78px',
            cssClass: 'e-de-prop-dropdown',
            allowCustom: true,
            showClearButton: false
        });
        this.fontSize.focus = function () { _this.isRetrieving = false; };
        this.fontSize.value = this.documentEditor.selection.characterFormat.fontSize.toString();
        this.fontSize.appendTo(fontSelectElement);
        this.fontSize.element.closest('.e-de-prop-dropdown').setAttribute('title', 'Font Size');
    };
    Text.prototype.createDropDownListForFamily = function (fontSelectElement) {
        var _this = this;
        var fontStyle = [{ FontName: 'Algerian' }, { FontName: 'Arial' }, { FontName: 'Calibri' }, { FontName: 'Cambria' }, { FontName: 'Cambria Math' }, { FontName: 'Candara' },
        { FontName: 'Courier New' }, { FontName: 'Georgia' }, { FontName: 'Impact' }, { FontName: 'Segoe Print' }, { FontName: 'Segoe Script' },
        { FontName: 'Segoe UI' }, { FontName: 'Symbol' }, { FontName: 'Times New Roman' }, { FontName: 'Verdana' }, { FontName: 'Windings' }
        ];
        this.fontFamily = new ej.dropdowns.ComboBox({
            dataSource: fontStyle,
            query: new ej.data.Query().select(['FontName']),
            fields: { text: 'FontName', value: 'FontName' },
            popupHeight: '150px',
            popupWidth: '162px', width: '162px',
            cssClass: 'e-de-prop-dropdown',
            allowCustom: true,
            showClearButton: false,
            itemTemplate: "<span style='font-family: ${FontName};'>${FontName}</span>",
        });
        this.fontFamily.focus = function () { _this.isRetrieving = false; };
        this.fontFamily.appendTo(fontSelectElement);
        this.fontFamily.element.closest('.e-de-prop-dropdown').setAttribute('title', 'Font');
    };
    Text.prototype.wireEvent = function () {
        var _this = this;
        this.fontFamily.addEventListener('change', function () { _this.changeFontFamily(); });
        this.fontSize.addEventListener('change', function () { _this.changeFontSize(); });
        this.bold.addEventListener('click', function () { _this.isRetrieving = false; _this.boldAction(); });
        this.italic.addEventListener('click', function () { _this.isRetrieving = false; _this.italicAction(); });
        this.underline.addEventListener('click', function () { _this.isRetrieving = false; _this.underlineAction(); });
        this.strikethrough.addEventListener('click', function () { _this.isRetrieving = false; _this.strikethroughAction(); });
        this.superscript.addEventListener('click', function () { _this.isRetrieving = false; _this.superscriptAction(); });
        this.subscript.addEventListener('click', function () { _this.isRetrieving = false; _this.subscriptAction(); });
        this.fontColorInputElement.addEventListener('change', function (args) { _this.isRetrieving = false; _this.changeFontColor(args); });
        this.clearFormat.addEventListener('click', function () { _this.isRetrieving = false; _this.clearFormatAction(); });
    };
    Text.prototype.unwireEvents = function () {
        this.fontFamily.change = undefined;
        this.fontSize.change = undefined;
        this.bold.click = undefined;
        this.italic.click = undefined;
        this.underline.click = undefined;
        this.strikethrough.click = undefined;
        this.superscript.click = undefined;
        this.subscript.click = undefined;
        this.fontColorInputElement.change = undefined;
        this.highlightColorElement.click = undefined;
        this.highlightColor.click = undefined;
        this.clearFormat.click = undefined;
    };
    Text.prototype.onSelectionChange = function () {
        this.isRetrieving = true;
        if (this.documentEditor.selection) {
            if (this.documentEditor.selection.characterFormat.fontFamily) {
                this.fontFamily.value = this.documentEditor.selection.characterFormat.fontFamily;
            }
            else {
                this.fontFamily.value = '';
            }
            if (this.documentEditor.selection.characterFormat.fontSize) {
                this.fontSize.value = this.documentEditor.selection.characterFormat.fontSize.toString();
            }
            else {
                this.fontSize.value = '';
            }
            if (this.documentEditor.selection.characterFormat.bold) {
                if (!this.bold.classList.contains('e-btn-toggle')) {
                    this.bold.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.bold.classList.contains('e-btn-toggle')) {
                    this.bold.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.italic) {
                if (!this.italic.classList.contains('e-btn-toggle')) {
                    this.italic.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.italic.classList.contains('e-btn-toggle')) {
                    this.italic.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.underline
                && this.documentEditor.selection.characterFormat.underline !== 'None') {
                if (!this.underline.classList.contains('e-btn-toggle')) {
                    this.underline.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.underline.classList.contains('e-btn-toggle')) {
                    this.underline.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.strikethrough
                && this.documentEditor.selection.characterFormat.strikethrough !== 'None') {
                if (!this.strikethrough.classList.contains('e-btn-toggle')) {
                    this.strikethrough.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.strikethrough.classList.contains('e-btn-toggle')) {
                    this.strikethrough.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.baselineAlignment
                && this.documentEditor.selection.characterFormat.baselineAlignment === 'Subscript') {
                if (!this.subscript.classList.contains('e-btn-toggle')) {
                    this.subscript.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.subscript.classList.contains('e-btn-toggle')) {
                    this.subscript.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.baselineAlignment
                && this.documentEditor.selection.characterFormat.baselineAlignment === 'Superscript') {
                if (!this.superscript.classList.contains('e-btn-toggle')) {
                    this.superscript.classList.add('e-btn-toggle');
                }
            }
            else {
                if (this.superscript.classList.contains('e-btn-toggle')) {
                    this.superscript.classList.remove('e-btn-toggle');
                }
            }
            if (this.documentEditor.selection.characterFormat.fontColor) {
                this.fontColorInputElement.value = this.documentEditor.selection.characterFormat.fontColor;
            }
            if (this.documentEditor.selection.characterFormat.highlightColor) {
                this.highlightColorInputElement.style.backgroundColor = this.appliedHighlightColor;
                this.applyHighlightColorAsBackground(this.documentEditor.selection.characterFormat.highlightColor);
            }
        }
    };
    return Text;
}());
function createDivTemplate(id, parentDiv, style) {
    var divElement;
    if (style) {
        divElement = ej.base.createElement('div', { id: id, styles: style });
    }
    else {
        divElement = ej.base.createElement('div', { id: id });
    }
    parentDiv.appendChild(divElement);
    return divElement;
}
function createButtonTemplate(id, iconcss, div, buttonClass, width, toolTipText) {
    var buttonElement = ej.base.createElement('Button', { id: id });
    buttonElement.style.width = width + 'px';
    buttonElement.style.height = 32 + 'px';
    div.appendChild(buttonElement);
    var btn = new ej.buttons.Button({
        cssClass: buttonClass, iconCss: iconcss
    });
    btn.appendTo(buttonElement);
    buttonElement.setAttribute('title', toolTipText);
    return buttonElement;
}
function toggleAlignmentClass(element) {
    if (element.centerAlignment.classList.contains('e-btn-toggle')) {
        element.centerAlignment.classList.remove('e-btn-toggle');
    }
    if (element.justify.classList.contains('e-btn-toggle')) {
        element.justify.classList.remove('e-btn-toggle');
    }
}