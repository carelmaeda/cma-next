import Image from "next/image";

export default function About() {
  return (
    <section className="section-wrapper">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="about-wrapper d-md-flex">
           <Image src="/images/profile.jpeg" alt="profile"  width={200}  height={200}   />
        <div className="about-text">
        <p>
            Sou <strong>Designer Gráfico</strong> e <strong>Social Media</strong>, especializado na criação de conteúdo, 
            planejamento estratégico e edição de materiais visuais para diferentes plataformas. Com experiência em diversos setores, 
            desenvolvo campanhas criativas que fortalecem a conexão entre marcas e público.
        </p>
        <p>
            Minha formação em <strong>Design</strong> pelo Istituto Europeo di Design, aliada a especializações em 
            <strong> Marketing Digital</strong> e <strong>UX Design</strong>, me permite unir criatividade e estratégia para entregar 
            soluções eficazes e alinhadas às necessidades de cada cliente. Estou sempre em busca de inovação para destacar negócios no 
            mercado e aprimorar sua comunicação.
        </p>
        <p>
            Vamos transformar sua ideia em algo impactante?
        </p>
        <button className="btn btn-primary">Marque Sua Consulta</button>
        </div>

        </div>

    </section>
  );
}