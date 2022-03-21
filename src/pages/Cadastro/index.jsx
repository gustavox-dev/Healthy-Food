import { Formik, Field, Form, ErrorMessage } from "formik"
import { useEffect } from "react"
import imgService from '../../assets/bloco_services.svg'
import { Header } from "../../components/Header"

import './styles.css'

export function Cadastro(){

    function onSubmit(values, actions) {
        console.log('SUBMIT',values)
    }

    function onBlurCep(ev, setFieldValue) {
        const { value } = ev.target

        //rejex
        const cep = value?.replace(/[^0-9]/g, '')

        // Se tiver a quantidade errada de caracteres é dado o return e o código não continua a executar
        if(cep?.length !== 8){
            return
        }

        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then(res => res.json())
            .then(data => {
                setFieldValue('logradouro', data.logradouro)
                setFieldValue('bairro', data.bairro)
                setFieldValue('localidade', data.localidade)
                setFieldValue('uf', data.uf)
            })
        console.log(ev.target.value)
    }
    

    return( 
        
        <div className="container">
            
            <div className="register-datas">
                <div className="register-header">
                    <Header />
                </div>

                <div className="data-content">
                    <img src={imgService} alt="" className="image-container"/>
                    <Formik 
                    onSubmit={onSubmit}
                    initialValues={{
                        name: '',
                    }}
                    render={({ setFieldValue, handleChange, isValid })=>(
                        <Form className="form-content">
                        
                            <h1>Página de Registro</h1>

                            <div className="dados-pf">
                                <div className="form-group">
                                    <label htmlFor="CPF">CPF</label>
                                    <Field name="cpf" type="number" className="form-control" />
                                    <ErrorMessage name="cpf" />
                                    {/* <input  type="number" maxLength={14} /> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Nome</label>

                                    <Field name="name" type="text" className="form-control" />
                                    <ErrorMessage name="name" />
                                    {/* <input className="form-control" type="text" id="nome" value={values.name} onChange={handleChange}/> */}
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="data-nascimento">Data de Nascimento: </label>
                                <input className="form-control" type="date" id="data-nascimento"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="cep">CEP</label>
                                <Field name="cep" type="text" className="form-control" onBlur={(ev) => onBlurCep(ev, setFieldValue)}/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="logradouro">Logradouro</label>
                                <Field name="logradouro" type="text" className="form-control"/>
                                {/* <small>Rua. </small> */}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="bairro">Bairro</label>
                                <Field name="bairro" type="text" className="form-control"/>
                                {/* <small>Bairro</small> */}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="localidade">Localidade</label>
                                <Field name="localidade" type="text" className="form-control"/>
                                {/* <small>Cidade</small> */}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="uf">UF</label>
                                <Field name="uf" type="text" className="form-control"/>
                                {/* <small>Estado</small> */}
                            </div>
                            <button type="submit" disabled={!isValid} className="cadastro-btn">
                                Cadastrar
                            </button>
                        </Form>
                    )}/>
                </div>

            </div>

            
        </div>
    )
}