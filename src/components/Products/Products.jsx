import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running Shoes",
//     price: "$35",
//     image:
//       "https://media.kohlsimg.com/is/image/kohls/3798326_Gray_Platinum?wid=600&hei=600&op_sharpen=1",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     description: "Apple Macbook",
//     price: "$20",
//     image:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1572825197207",
//   },
// ];

const Products = (props) => {
  const { products, onAddToCart } = props;
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
