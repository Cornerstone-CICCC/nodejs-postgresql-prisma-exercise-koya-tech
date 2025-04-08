import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllProducts = () => {
    return prisma.product.findMany();
};

export const getProductById = (id: number) => {
    return prisma.product.findUnique({
        where: { id }
    });
};

export const createProduct = (data: { productName: string; price: number }) => {
    return prisma.product.create({ data });
};

export const updateProduct = (id: number, data: { productName?: string; price?: number }) => {
    return prisma.product.update({
        where: { id },
        data
    });
};

export const deleteProduct = (id: number) => {
    return prisma.product.delete({
        where: { id }
    });
};