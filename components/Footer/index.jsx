import * as s from "../Footer/style"

export const Footer = () => {
  return (
    
    <s.Container>
      <s.ContainerLogo src="images/logo.svg" alt="logo Disney+"/>
      <s.ContainerText>
        <a href="#">Politica de Privacidade</a>
        <a href="#">Proteção de dados no Brasil</a>
        <a href="#">Contrato de Assinatura</a>
      </s.ContainerText>
      <s.ContainerText>
        <a href="#">Ajuda</a>
        <a href="#">Dispositivos Compatíveis</a>
        <a href="#">Sobre o Disney+</a>
        <a href="#">Anúncios Personalizados</a>
      </s.ContainerText>
      <p> Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
      </p>
      <p >
        &copy; Disney. Todos os direitos reservados.
      </p>
    </s.Container>
   

  )
}

