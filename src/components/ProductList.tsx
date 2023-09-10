import { Product } from "@/types";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products: Product[] = [
    {
      _id: 1,
      productName: "Men's Lightweight Full-Zip Basketball Jacket",
      productImages: [
        {
          urlImage:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png",
        },
        {
          urlImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png",
        },
      ],
      stock: [
        {
          price: 130,
          quantity: 100,
          sizeID: "S",
          colorID: "black",
        },
        {
          price: 130,
          quantity: 100,
          sizeID: "L",
          colorID: "white",
        },
      ],
      categoryID: "123",
      brand: "Nike",
    },
    {
      _id: 2,
      productName: "Men's Lightweight Full-Zip Basketball Jacket",
      productImages: [
        {
          urlImage:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png",
        },
        {
          urlImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png",
        },
      ],
      stock: [
        {
          price: 130,
          quantity: 100,
          sizeID: "M",
          colorID: "white",
        },
      ],
      categoryID: "123",
      brand: "Nike",
    },
  ];

  const productList = products?.map((product) => (
    <ProductCard key={product._id} product={product} />
  ));

  return <div className="flex flex-wrap gap-4">{productList}</div>;
}
