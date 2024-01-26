import { z } from 'zod';


const CustomerSchema = z.object({
    id: z.number(),
    name: z.string().min(1, { message: 'Name should be at least 1 characters.' }).max(50),
    company: z.string().min(1, { message: 'Company should be at least 1 characters.' }).max(50),
    address: z.string().min(1, { message: 'Address should be at least 1 characters.' }).max(50),
    phone: z.string().min(1, { message: 'Phone should be at least 1 characters.' }).max(50),
    email: z.string().email({ message: 'Invalid Email' })
});
const NewCustomerSchema = z.object({
    name: z.string().min(1, { message: 'Name should be at least 1 characters.' }).max(50),
    company: z.string().min(1, { message: 'Company should be at least 1 characters.' }).max(50),
    address: z.string().min(1, { message: 'Address should be at least 1 characters.' }).max(50),
    phone: z.string().min(1, { message: 'Phone should be at least 1 characters.' }).max(50),
    email: z.string().email({ message: 'Invalid Email' })
});

type Customer = z.infer<typeof CustomerSchema>
type NewCustomer = z.infer<typeof NewCustomerSchema>

export type { Customer, NewCustomer };

export { CustomerSchema, NewCustomerSchema };