const PRODUTOS = '_PRODUTOS';

export function erroValidacao(errors){
    this.errors = errors
}

export default class produtoService{

    validar = (produto)=>{
        const errors = []

        if(!produto.nome){
            errors.push("O campo nome é obrigatorio.")
        }

        if(!produto.sku){
            errors.push("O campo SKU é obrigatorio.")
        }

        if(!produto.preco || produto.preco <=0){
            errors.push("O campo Preço deve ser maior do que 0.")
        }

        if(!produto.fornecedor){
            errors.push("O campo Fornecedor é obrigatorio.")
        }

        if(errors.length>0){
            throw new erroValidacao(errors)
        }
    }

    salvar= (produto)=>{
        this.validar(produto)

       let produtos = localStorage.getItem(PRODUTOS)

       if(!produtos){
           produtos=[]
       }else{
           produtos=JSON.parse(produtos)
       }

       produtos.push(produto)
       localStorage.setItem(PRODUTOS,JSON.stringify(produtos))

    }
}