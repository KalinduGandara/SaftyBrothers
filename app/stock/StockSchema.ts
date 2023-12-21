import { z } from 'zod';
const NewSizeSchema = z.object({
    sizeQuantity: z.number({ invalid_type_error: 'Positive Integer' }).int({ message: 'Positive Integer' }).min(0, { message: 'Positive Integer' }),
    size: z.string().min(1, { message: 'Required' })
})
const SizeSchema = z.object({
    id: z.number(),
    sizeQuantity: z.number({ invalid_type_error: 'Quantity is required.' }).int(),
    size: z.string(),
    stockId: z.number().int()
})
const StockSchema = z.object({
    id: z.number(),
    itemCode: z.string().min(1, { message: 'Item Code should be at least 1 characters.' }).max(50),
    itemName: z.string().min(1, { message: 'Item Name should be at least 1 characters.' }).max(50),
    imageID: z.string().optional(),
    image: z
        .custom<FileList>()
        .transform((file) => file && file.length > 0 && file.item(0))
        .refine((file) => !file || (!!file && file.size <= 1 * 1024 * 1024), {
            message: "The profile picture must be a maximum of 10MB.",
        })
        .refine((file) => !file || (!!file && file.type?.startsWith("image")), {
            message: "Only images are allowed to be sent.",
        }),
    description: z.string().nullable().optional(),
    sizes: z.array(SizeSchema).min(1)
});
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
type NewStock = z.infer<typeof NewStockSchema>
type Stock = z.infer<typeof StockSchema>
type NewSize = z.infer<typeof NewSizeSchema>
type Size = z.infer<typeof SizeSchema>
export type { NewStock };
export type { Stock };
export type { NewSize };
export type { Size };
export { NewStockSchema, StockSchema, SizeSchema, NewSizeSchema };