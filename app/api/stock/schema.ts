import { z } from 'zod';
const NewSizeSchema = z.object({
    sizeQuantity: z.number({ invalid_type_error: 'Positive Integer' }).int({ message: 'Positive Integer' }).min(0, { message: 'Positive Integer' }),
    size: z.string().min(1, { message: 'Required' })
})
const NewStockSchema = z.object({
    itemCode: z.string().min(1, { message: 'Item Code should be at least 1 characters.' }).max(50),
    itemName: z.string().min(1, { message: 'Item Name should be at least 1 characters.' }).max(50),
    image: z
        .custom<FileList>()
        .transform((file) => file && file.length > 0 && file.item(0))
        .refine((file) => !file || (!!file && file.size <= 1 * 1024 * 1024), {
            message: "The profile picture must be a maximum of 10MB.",
        })
        .refine((file) => !file || (!!file && file.type?.startsWith("image")), {
            message: "Only images are allowed to be sent.",
        }),
    description: z.string().optional(),
    sizes: z.array(NewSizeSchema).min(1, { message: 'At least one size is required.' }).
        refine((array) => array.map((size) => size.size).every((size, index, array) => array.indexOf(size) === index), { message: 'Duplicate Size' })
});
const size = z.object({
    sizeQuantity: z.number({ invalid_type_error: 'Positive Integer' }).int({ message: 'Positive Integer' }).min(0, { message: 'Positive Integer' }),
    size: z.string().min(1, { message: 'Required' }),
    stockId: z.number().int()
})
const StockSchema = z.object({
    id: z.number(),
    itemCode: z.string().min(1, { message: 'Item Code should be at least 1 characters.' }).max(50),
    itemName: z.string().min(1, { message: 'Item Name should be at least 1 characters.' }).max(50),
    imageID: z.string().optional(),
    description: z.string().optional(),
    sizes: z.array(size).min(1, { message: 'At least one size is required.' }).
        refine((array) => array.map((size) => size.size).every((size, index, array) => array.indexOf(size) === index), { message: 'Duplicate Size' })
});

type Stock = z.infer<typeof StockSchema>
type NewStock = z.infer<typeof NewStockSchema>

export type { Stock, NewStock };

export { StockSchema, NewStockSchema };