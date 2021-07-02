import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('admin@123', 10),
        isAdmin: true
    },
    {
        name: 'Jigar Pancholi',
        email: 'jigar@example.com',
        password: bcrypt.hashSync('admin@123', 10),
    }
]

export default users
