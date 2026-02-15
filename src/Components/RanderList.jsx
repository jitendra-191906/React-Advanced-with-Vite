export const RanderList = () => {
      const Products = [
            {
                  id: 1,
                  name: "laptop",
                  prize: "999",
            },
            {
                  id: 2,
                  name: "Samsung ",
                  prize: "90000",
            },
            {
                  id: 3,
                  name: "Macbook",
                  prize: "120000",
            },
            {
                  id: 4,

                  name: "chai pati",
                  prize: "100",
            },
            {
                  id: 5,

                  name: "colddring",
                  prize: "400",
            },
      ];
      const productElements = Products.filter((product) => {
            return product.prize > 500;
      }).map((product) => {
            return (
                  <div key={product.id}>
                        <h1>{product.name}</h1>
                        <p>{product.prize}</p>
                  </div>
            );
      });

      return (
            <>
                  <h1>Products List</h1>
                  {productElements}
            </>
      );
};
