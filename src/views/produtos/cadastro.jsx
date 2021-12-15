import React from "react";
import produtoService from "../../app/produtoService";

const estadoInicial = {
    nome:"",
    sku:"",
    descricao:"",
    preco:0,
    fornecedor:"",
    sucesso: false,
    errors:[]
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
        try{
            this.service.salvar(produto)
            this.limpaCampos()
            this.setState({sucesso:true})
        }catch(erro){
            const errors = erro.errors
            this.setState({errors:errors})
        }    
    }
        
    limpaCampos = ()=>{
        this.setState(estadoInicial);
        }

    render(){
        return(
            <div className="card">
                <div className="card-header"> Cadastro de produtos </div>
                    <div className="card-body">

                        {this.state.sucesso&&
                            
                                <div class="alert alert-dismissible alert-success">
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Parabéns!</strong> Cadastro realizado com sucesso!
                            </div>
                            
                        }

                        {this.state.errors.length>0 &&
                            this.state.errors.map(msg=>{
                                return(
                                    <div class="alert alert-dismissible alert-danger">
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                <strong>Erro</strong> {msg}
                            </div>
                                )
                            })
                            
                            
                        }

                   

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