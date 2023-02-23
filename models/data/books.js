import Book from "./../Book.js";
import 'dotenv/config.js'
import '../../config/database.js'

let books = [
    {
        title: 'spiderman',
        date: new Date('2017-07-07'),
        category_id: "63f69097ed806934b677d3d3"
    },    {
        title: 'dr.stange',
        date: new Date('2016-10-13'),
        category_id: "63f69097ed806934b677d3d3"
    },    {
        title: 'batman',
        date: new Date('2005-03-04'),
        category_id: "63f69097ed806934b677d3d4"
    },    {
        title: 'superman',
        date: new Date('2015-05-23'),
        category_id: "63f69097ed806934b677d3d4"
    }
]

Book.insertMany(books)