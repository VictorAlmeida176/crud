import React from "react";
import produtoService from "../../app/produtoService";

const estadoInicial = {
    nome:"",
    sku:"",
    descricao:"",
    preco:0,
    fornecedor:""
}

class CadastroProduto extends React.Component{

    state= estadoInicial

    constructor(){
        super()
        this.service = new produtoService()
    }

    onChange = (event)=>{
        const valor=event.target.value;
        const nomeDoCampo=event.target.name;
        this.setState({ [nomeDoCampo]:valor })
    }

    onSubmit =(event)=>{
        const produto = {
        nome:this.state.nome,
        sku:this.state.sku,
        descricao:this.state.descricao,
        preco:this.state.preco,
        fornecedor:this.state.fornecedor
        }

        this.service.salvar(produto)
        this.limpaCampos()

        console.log("Salvo com sucesso")
    }

    limpaCampos = ()=>{
        this.setState(estadoInicial);
        }

    render(){
        return(
            <div className="card">
                <div className="card-header"> Cadastro de produtos </div>
                    <div className="card-body">

                        {/* Start row */}
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Nome do produto *</label>
                                        <input onChange={this.onChange} name="nome" value={this.state.nome} type='text' className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>SKU: *</label>
                                        <input onChange={this.onChange} name="sku" value={this.state.sku} type='text' className="form-control"/>
                                    </div>
                                </div>                       
                            </div>
                        {/*End row  */}

                        {/* New row */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Descrição:</label>
                                    <textarea onChange={this.onChange} name="descricao" value={this.state.descricao} className="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                     {/* End new row */}

                     {/* New row */}
                        <div className="row">

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Preço: *</label>
                                    <input onChange={this.onChange} name="preco" value={this.state.preco} type='text' className="form-control"/>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fornecedor: *</label>
                                    <input onChange={this.onChange} name="fornecedor" value={this.state.fornecedor} type='text' className="form-control"/>
                                </div>
                        </div>       
                     {/*End row  */}

                        <div className="row">
                            <div className="col-md-1">
                                <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                            </div>

                            <div className="col-md-1">
                                <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CadastroProduto;