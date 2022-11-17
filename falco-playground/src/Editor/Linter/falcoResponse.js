const falcoResponse = {
    "errors": [
        {
            "code": "LOAD_UNKNOWN_ITEM",
            "codedesc": "An unknown top-level object is in the rules content. It will be ignored.",
            "context": {
                "locations": [
                    {
                        "item_name": "",
                        "item_type": "rules content",
                        "position": {
                            "column": 0,
                            "line": 0,
                            "name": "file1",
                            "offset": 0
                        }
                    },
                    {
                        "item_name": "",
                        "item_type": "rules content item",
                        "position": {
                            "column": 33,
                            "line": 8,
                            "name": "file1",
                            "offset": 248
                        }
                    }
                ],
                "snippet": "<No context for file + file1>\n"
            },
            "message": "Unknown top level item"
        }
    ],
    "name": "file1",
    "successful": true,
    "warnings": [
        {
            "code": "LOAD_UNKNOWN_ITEM",
            "codedesc": "An unknown top-level object is in the rules content. It will be ignored.",
            "context": {
                "locations": [
                    {
                        "item_name": "",
                        "item_type": "rules content",
                        "position": {
                            "column": 0,
                            "line": 0,
                            "name": "file1",
                            "offset": 0
                        }
                    },
                    {
                        "item_name": "",
                        "item_type": "rules content item",
                        "position": {
                            "column": 3,
                            "line": 5,
                            "name": "file1",
                            "offset": 98
                        }
                    }
                ],
                "snippet": "<No context for file + file1>\n"
            },
            "message": "Unknown top level item"
        }
    ]
};

export default falcoResponse;
