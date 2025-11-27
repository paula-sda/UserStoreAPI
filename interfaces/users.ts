  export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
      firstname: string;
      lastname: string;
    };
    address: {
      geolocation: {
        lat: string;
        long: string;
      };
      city: string;
      street: string;
      number: number;
      zipcode: string;
    };
    phone: string;
    __v: number;
  }
  
  export type CreateUser = Omit<User, 'id'>;
  
  export type UpdateUser = Partial<CreateUser>;
  