import { Router } from "express";
import { User, UpdateUser } from "../interfaces/users";

const router = Router();

const users: User[] = [
  {
    "address": {
      "geolocation": { "lat": "-37.3159", "long": "81.1496" },
      "city": "kilcoole",
      "street": "new road",
      "number": 7682,
      "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": { "firstname": "john", "lastname": "doe" },
    "phone": "1-570-236-7033",
    "__v": 0
  },
  {
    "address": {
      "geolocation": { "lat": "-37.3159", "long": "81.1496" },
      "city": "kilcoole",
      "street": "Lovers Ln",
      "number": 7267,
      "zipcode": "12926-3874"
    },
    "id": 2,
    "email": "morrison@gmail.com",
    "username": "mor_2314",
    "password": "83r5^_",
    "name": { "firstname": "david", "lastname": "morrison" },
    "phone": "1-570-236-7033",
    "__v": 0
  },

  // ... pega aquí el resto de usuarios (3 al 10)
];


// GET ALL
router.get('/', (req, res) => {
  res.json(users);
});

// GET BY ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST
router.post('/', (req, res) => {
  try {
    const { email, username, password, name, address, phone, __v } = req.body;

    if (!email || !username || !password || !name || !address || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newUser: User = {
      id: users.length + 1,
      email,
      username,
      password,
      name,
      address,
      phone,
      __v: __v ?? 0
    };

    users.push(newUser);
    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex !== -1) {
    const user = users[userIndex];
    const updatedUserBody: UpdateUser = req.body;
    const updatedUser: User = { ...user, ...updatedUserBody };

    users[userIndex] = updatedUser;
    res.json(updatedUser);

  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);

  if (user) {
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export default router;
