import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Mounik",
        email: "mounik@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
    {
        name: "Guest",
        email: "guest@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
]