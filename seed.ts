import {Prisma, PrismaClient} from "@prisma/client"

const client = new PrismaClient();

const getreadlist = ():Prisma.userCreateInput[]=>
[
{
        id: "1001",
        name: "abcd",
        book :  "xyz",
        book_id: "2022",
        book_name: "Harry Potter",
        description: "The novels of whom are students at school of witch craft",
}
];

[
{
        id: "1002",
        name: "abcd",
        book :  "xyz",
        book_id: "2023",
        book_name: "The Excortic",
        description: "The book details the demonic possession of eleven-year-old Regan MacNeil, the daughter of a famous actress, and the two priests who attempt to exorcise the demon.",
}
];

[
{
        id: "1003",
        name: "abcd",
        book :  "xyz",
        book_id: "2022",
        book_name: "Harry Potter",
        description: "The novels of whom are students at school of witch craft",
}
];
    
[
{
         id: "1004",
         name: "abcd",
         book :  "xyz",
        book_id: "2022",
        book_name: "Harry Potter",
        description: "The novels of whom are students at school of witch craft",
}
];

[
{
        id: "1005",
        name: "abcd",
        book :  "xyz",
        book_id: "2022",
        book_name: "Wings of Fire",
        description: "The novels of whom are students at school of witch craft",
}
];