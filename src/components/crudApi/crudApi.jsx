import React, { Component } from 'react';

class CrudApi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    postData = (url = '', data = {}) => {
        // Default options are marked with *
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then(response => response.json()); // parses JSON response into native JavaScript objects 
    }

    postDb = async () => {
        const book = {
            bookName: "Nhà giả kim abcd",
            authorName: "Author NA",
            userId: "6282e55d-ce81-4f0b-983a-4b1da959bb9e"
        };
        const a = {
            "code": 200,
            "result": {
                "object": {
                    "_id": "64fc2f48-e9c4-4659-994b-b30d9caee7d4", "status": "active", "bookName": "This hihi Đồng xanh", "authorName": "dk;lfds Vy Oanh", "userId": "6282e55d-ce81-4f0b-983a-4b1da959bb9e", "updatedAt": "2019-07-28T09:11:52.445Z", "createdAt": "2019-07-28T09:11:52.445Z", "note": null, "deletedAt": null
                }
            }
        }
        const result = await this.postData("http://peaceful-fortress-14232.herokuapp.com/api/v1/requestCreateBook", book);
        console.log("result new: " + JSON.stringify(result));

        // try {
        //     await fetch("http://peaceful-fortress-14232.herokuapp.com/api/v1/requestCreateBook", {
        //         method: "POST",
        //         headers: _.merge(
        //             {
        //                 "User-Agent": "Request-Promise",
        //                 "Content-Type": "Application/json"
        //             }
        //             // option.headers || {}
        //         ),
        //         body: JSON.stringify(book)
        //     }).then(result => {
        //         console.log("result new id: " + result.json().results.objects.rows);
        //         return result.json();
        //     }).then(data => {
        //         // test = data;
        //         console.log("new book ip data: " + data);
        //     });
        // } catch (err) {
        //     console.log("Request err: ", err);
        // }
    }
    componentDidMount() {
        this.postDb();
    }
    render() {
        return (
            <div>
                Test crud api
            </div>
        );
    }
}

export default CrudApi;