interface Product {
  nome: string;
  preco:number;
  descrição: string;
  garantia: string;
  seguroAcidentes: boolean;
}

const element = document.getElementById("nome")?.addEventListener("click", fetchProduct);
 
async function fetchProduct(): Promise<void> {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data: Product = await response.json() as Product;

    showProduct(data);
  }

  function showProduct(product: Product) {
    document.body.innerHTML = `
      <div>
        <h2>${product.nome}</h2>
         <h3>${product.preco}</h3>
        <p>${product.descrição}</p>
        <p>${product.garantia}</p>
        <p>${product.seguroAcidentes ? 'Possui seguro contra acidentes' : 'Não possui seguro contra acidentes'}</p>
      </div>
    `;
  }
  fetchProduct();

  
  