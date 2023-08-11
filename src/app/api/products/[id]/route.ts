import { prisma } from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";

// GET SINGLE PRODUCTS
export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {
	const {id} = params;

	try {
		const product = await prisma.product.findUnique({
			where: {
				id: id
			},
		})
		return new NextResponse(JSON.stringify(product), {status: 200});
	} catch (error) {
		console.log(error)
		return new NextResponse(JSON.stringify({message: "Something went wrong!"}), {status: 500});
	}
}