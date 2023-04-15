export const FormCadFarmacia = () => {

    return (
        <form>
            <label htmlFor="razao">Razão Social</label>
            <input type="text" name="razao" placeholder="Digite a razão social" required autoFocus />
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" name="cnpj" placeholder="Digite o CNPJ" required />
            <label htmlFor="nome">Nome Fantasia</label>
            <input type="text" name="nome" placeholder="Digite o Nome Fantasia" required />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Digite o Email" required />
            <label htmlFor="fone">Telefone</label>
            <input type="tel" name="fone" placeholder="Digite o telefone" />
            <label htmlFor="cel">Celular</label>
            <input type="tel" name="cel" placeholder="Digite o Celular" required />
            <label htmlFor="cep">CEP</label>
            <input type="number" name="cep" placeholder="Digite o CEP" required />
            <label htmlFor="endereco">Logradouro/Endereço</label>
            <input type="text" name="endereco" required />
            <label htmlFor="numero">Número</label>
            <input type="number" name="numero" required />
            <label htmlFor="bairro">Bairro</label>
            <input type="text" name="bairro" required />
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" required />
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" required />
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento" />
            <input type="submit" />
        </form>
    )
}
