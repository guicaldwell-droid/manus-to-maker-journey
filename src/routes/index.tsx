import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import siteCss from "../site.css?url";
import category_accessories from "@/assets/category-accessories.webp.asset.json";
import category_food from "@/assets/category-food.webp.asset.json";
import category_toys from "@/assets/category-toys.webp.asset.json";
import category_treats from "@/assets/category-treats.webp.asset.json";
import dogshoppe_about from "@/assets/dogshoppe-about.jpg.asset.json";
import dogshoppe_card_care from "@/assets/dogshoppe-card-care.webp.asset.json";
import dogshoppe_card_love from "@/assets/dogshoppe-card-love.webp.asset.json";
import dogshoppe_card_shop from "@/assets/dogshoppe-card-shop.webp.asset.json";
import dogshoppe_care from "@/assets/dogshoppe-care.jpg.asset.json";
import dogshoppe_hero from "@/assets/dogshoppe-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Dog Shoppe — carinho pertinho de você" },
      { name: "description", content: "The Dog Shoppe: petshop da sua vizinhança em Brasília, com atendimento personalizado, banho e tosa. Fale com a gente pelo WhatsApp." },
      { property: "og:title", content: "The Dog Shoppe — carinho pertinho de você" },
      { property: "og:description", content: "Petshop de vizinhança em Brasília: banho, tosa e uma loja cheia de boas escolhas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: dogshoppe_hero.url },
      { name: "twitter:image", content: dogshoppe_hero.url },
    ],
    links: [{ rel: "stylesheet", href: siteCss }],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onPointerMove = (e: PointerEvent) => {
      if (!finePointer.matches || e.pointerType === "touch" || !(e.target instanceof Element)) return;
      const cta = e.target.closest<HTMLElement>(".button, .text-link, .whatsapp-float");
      if (!cta) return;
      const rect = cta.getBoundingClientRect();
      cta.style.setProperty("--pointer-x", `${e.clientX - rect.left}px`);
      cta.style.setProperty("--pointer-y", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);
  return (
    <>

    <div className="topline">
      
      <span>A petshop da sua vizinhança</span>
      
      <span>Atendimento personalizado</span>
      
    </div>

    <header className="site-header" id="topo">
      <a className="brand" href="#topo" aria-label="The Dog Shoppe, início">
        <span className="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none"><path d="M24 26.2c-4.3 0-9 4.1-9 8.5 0 3.6 3.4 5.2 7.1 4.1 1.2-.4 2.4-.4 3.6 0 3.8 1.1 7.2-.5 7.2-4.1 0-4.4-4.6-8.5-8.9-8.5Z" fill="currentColor"/><ellipse cx="11.4" cy="20.2" rx="4.1" ry="5.6" transform="rotate(-28 11.4 20.2)" fill="currentColor"/><ellipse cx="21.1" cy="14.4" rx="4.1" ry="5.6" transform="rotate(-8 21.1 14.4)" fill="currentColor"/><ellipse cx="31.4" cy="15.7" rx="4.1" ry="5.6" transform="rotate(12 31.4 15.7)" fill="currentColor"/><ellipse cx="39" cy="22.6" rx="4.1" ry="5.6" transform="rotate(33 39 22.6)" fill="currentColor"/></svg>
        </span>
        <span className="brand__type"><strong>the dog</strong><small>SHOPPE · PET & CARE</small></span>
      </a>

      <button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        <span></span><span></span>
      </button>
      <nav className={open ? "main-nav is-open" : "main-nav"} id="main-nav" onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }} aria-label="Navegação principal">
        <a href="#servicos">Banho & tosa</a>
        <a href="#loja">A loja</a>
        <a href="#choose">Por que a Dog Shoppe</a>
        <a href="#contato">Onde estamos</a>
        <a className="button button--nav" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Encontrei%20voc%C3%AAs%20pelo%20site." target="_blank" rel="noreferrer">Fale com a gente <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main>
      <section className="hero-showcase" aria-labelledby="showcase-title">
        <h1 className="hero-showcase__word" id="showcase-title">The Dog</h1>
        <img className="hero-showcase__dog" src={dogshoppe_card_shop.url} alt="Cão atento olhando à frente, em primeiro plano" fetchPriority="high" />
      </section>
      <section className="hero hero--below" id="welcome" aria-labelledby="welcome-title">
        <div className="hero__copy">
          <h2 className="hero__title" id="welcome-title">O cuidado que seu pet merece, <em>bem pertinho.</em></h2>
          <p className="hero__lead">Banho, tosa e uma loja cheia de boas escolhas — com aquele atendimento atencioso que faz toda a diferença.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Quero%20conhecer%20a%20The%20Dog%20Shoppe." target="_blank" rel="noreferrer">Chamar no WhatsApp <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#servicos">Conheça a loja <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrap"><img src={dogshoppe_hero.url} alt="Cão simpático em um ambiente acolhedor de petshop" loading="lazy" /></div>
          <div className="hero__caption"> Cuidado de pertinho, com carinho de verdade</div>
        </div>
        <div className="hero__bottom"><span>Boas-vindas à The Dog Shoppe</span><span>CA 5 · Brasília <span aria-hidden="true">↘</span></span></div>
      </section>

      <section className="promise-band" aria-label="O que você encontra na The Dog Shoppe">
        <div className="promise-band__item"><span>Petshop de bairro</span></div>
        
        <div className="promise-band__item"><span>Atendimento personalizado</span></div>
        
        <div className="promise-band__item"><span>Banho & tosa</span></div>
      </section>

      <section className="choose section-pad" id="choose" aria-labelledby="choose-title">
        <div className="choose__heading">
          <div><p className="eyebrow"> De pertinho, com carinho</p><h2 id="choose-title">Por que escolher<br /><em>a gente?</em></h2></div>
          <p>Um lugar de bairro, um atendimento atencioso e cuidado pensado para fazer parte da rotina de vocês.</p>
        </div>
        <div className="choose__grid">
          <article className="choose-card choose-card--love">
            <span className="choose-card__eyebrow">01 / Todo dia</span>
            <h3>Carinho<br />em cada<br />atendimento</h3><p>Um jeito próximo e personalizado de receber você e seu pet.</p>
            <img src={dogshoppe_card_love.url} alt="Cão corgi sorridente representando um atendimento acolhedor" loading="lazy" />
          </article>
          <article className="choose-card choose-card--care">
            <span className="choose-card__eyebrow">02 / Um momento só dele</span>
            <h3>Banho &amp;<br />tosa com<br />cuidado</h3><p>Um cuidado caprichado para seu pet se sentir bem.</p>
            <img src={dogshoppe_card_care.url} alt="Retrato de um cão de pelo dourado associado ao banho e tosa" loading="lazy" />
          </article>
          <article className="choose-card choose-card--shop">
            <span className="choose-card__eyebrow">03 / A loja da vizinhança</span>
            <h3>Boas escolhas<br />pra rotina<br />pet</h3><p>Uma conversa com a gente ajuda a encontrar o que você procura.</p>
            <img src={dogshoppe_card_shop.url} alt="Beagle olhando à frente em um recorte para o card da loja pet" loading="lazy" />
          </article>
        </div>
      </section>

      <section className="care section-pad" id="servicos" aria-labelledby="care-title">
        <div className="section-heading section-heading--split">
          <div><p className="eyebrow"> Um momento só dele</p><h2 id="care-title">Dia de se cuidar.<br /><em>Dia de brilhar.</em></h2></div>
          <p className="section-heading__text">Um banho gostoso, um cuidado caprichado e o tempo que cada pet precisa. Converse com a nossa equipe para saber mais sobre banho e tosa.</p>
        </div>
        <div className="care-card">
          <div className="care-card__photo"><img src={dogshoppe_care.url} alt="Cão recebendo escovação delicada durante os cuidados de higiene" loading="lazy" /><span className="care-card__photo-tag">Cuidado sem pressa</span></div>
          <div className="care-card__content">
            <div className="care-card__number">01 <span>—</span> Cuidado</div>
            <h3>Um cuidado<br />que começa<br /><em>na confiança.</em></h3>
            <p>Banho e tosa com atenção aos detalhes e um jeitinho acolhedor. Porque cada pet é único — e merece ser tratado assim.</p>
            <a className="button button--dark" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20banho%20e%20tosa." target="_blank" rel="noreferrer">Pergunte pra gente <span aria-hidden="true">↗</span></a>
            
          </div>
        </div>
      </section>

      <section className="shop" id="loja" aria-labelledby="shop-title">
        <div className="shop__intro">
          <p className="eyebrow eyebrow--light"> Achadinhos de quatro patas</p>
          <h2 id="shop-title">A loja que tem<br />um pouco de <em>tudo</em><br />que é bom.</h2>
          <p>Uma seleção para acompanhar a rotina, o passeio e os momentos gostosos do seu pet.</p>
        </div>
        <div className="shop__categories" aria-label="Categorias de produtos">
          <article className="category-card category-card--food">
            <img className="category-card__photo" src={category_food.url} alt="Cão ao lado de um pote de ração, imagem ilustrativa da categoria alimentação" loading="lazy" />
            <div className="category-card__copy"><h3>Alimentação</h3><p>Escolhas para a rotina</p></div>
          </article>
          <article className="category-card category-card--treat">
            <img className="category-card__photo" src={category_treats.url} alt="Cão com um petisco, imagem ilustrativa da categoria petiscos" loading="lazy" />
            <div className="category-card__copy"><h3>Petiscos</h3><p>Pequenos mimos do dia</p></div>
          </article>
          <article className="category-card category-card--play">
            <img className="category-card__photo" src={category_toys.url} alt="Cão com um brinquedo de bola, imagem ilustrativa da categoria brinquedos" loading="lazy" />
            <div className="category-card__copy"><h3>Brinquedos</h3><p>Diversão que movimenta</p></div>
          </article>
          <article className="category-card category-card--walk">
            <img className="category-card__photo" src={category_accessories.url} alt="Cão usando peitoral e guia, imagem ilustrativa da categoria acessórios" loading="lazy" />
            <div className="category-card__copy"><h3>Acessórios</h3><p>Prontos pro passeio</p></div>
          </article>
        </div>
        <a className="button button--cream shop__cta" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Quero%20conhecer%20os%20produtos%20da%20loja." target="_blank" rel="noreferrer">Pergunte o que tem na loja <span aria-hidden="true">↗</span></a>
      </section>

      <section className="about section-pad" id="sobre" aria-labelledby="about-title">
        <div className="about__visual">
          <div className="about__photo"><img src={dogshoppe_about.url} alt="Cão sendo recebido com carinho em uma loja pet" loading="lazy" /></div>
          
        </div>
        <div className="about__copy"><p className="eyebrow"> A gente acredita</p><h2 id="about-title">Pet feliz.<br /><em>Tutor tranquilo.</em></h2><p className="about__lead">A The Dog Shoppe é aquele lugar pertinho de casa onde seu pet é recebido com cuidado — e você, com toda a atenção.</p><div className="about-points"><div className="about-point"><span className="about-point__icon" aria-hidden="true">01</span><div><h3>De vizinho pra vizinho</h3><p>Proximidade e praticidade para fazer parte da rotina de quem mora por aqui.</p></div></div><div className="about-point"><span className="about-point__icon" aria-hidden="true">02</span><div><h3>Atendimento de verdade</h3><p>Uma conversa atenciosa para entender o que você e seu pet estão procurando.</p></div></div><div className="about-point"><span className="about-point__icon" aria-hidden="true">03</span><div><h3>Um cantinho pet</h3><p>Cuidados e boas escolhas para acompanhar todas as fases e passeios.</p></div></div></div><a className="text-link text-link--green" href="https://www.instagram.com/thedog.shoppe/" target="_blank" rel="noreferrer">Acompanhe no Instagram <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="visit" id="contato" aria-labelledby="visit-title">
        <div className="visit__copy"><p className="eyebrow eyebrow--light"> Estamos por aqui</p><h2 id="visit-title">Passa aqui.<br /><em>Vai ser bom te ver.</em></h2><p>Quer tirar uma dúvida sobre a loja, banho ou tosa? Manda uma mensagem — a gente conversa.</p><a className="button button--cream" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Encontrei%20voc%C3%AAs%20pelo%20site." target="_blank" rel="noreferrer">Conversar no WhatsApp <span aria-hidden="true">↗</span></a></div>
        <div className="visit__details"><div className="visit-detail"><span className="visit-detail__icon" aria-hidden="true">⌖</span><div><span className="visit-detail__label">Nosso cantinho</span><p>CA 5, Bloco I,<br />lojas 107 e 108</p><span className="visit-detail__sub">Brasília · DF</span></div></div><div className="visit-detail"><span className="visit-detail__icon" aria-hidden="true">↗</span><div><span className="visit-detail__label">Manda um oi</span><a href="https://wa.me/5561993351647" target="_blank" rel="noreferrer">(61) 99335-1647</a><span className="visit-detail__sub">WhatsApp</span></div></div><div className="visit-detail"><span className="visit-detail__icon" aria-hidden="true">◎</span><div><span className="visit-detail__label">Segue a gente</span><a href="https://www.instagram.com/thedog.shoppe/" target="_blank" rel="noreferrer">@thedog.shoppe</a><span className="visit-detail__sub">Instagram</span></div></div></div>
      </section>
    </main>

    <footer className="footer"><a className="brand brand--footer" href="#topo"><span className="brand__mark" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M24 26.2c-4.3 0-9 4.1-9 8.5 0 3.6 3.4 5.2 7.1 4.1 1.2-.4 2.4-.4 3.6 0 3.8 1.1 7.2-.5 7.2-4.1 0-4.4-4.6-8.5-8.9-8.5Z" fill="currentColor"/><ellipse cx="11.4" cy="20.2" rx="4.1" ry="5.6" transform="rotate(-28 11.4 20.2)" fill="currentColor"/><ellipse cx="21.1" cy="14.4" rx="4.1" ry="5.6" transform="rotate(-8 21.1 14.4)" fill="currentColor"/><ellipse cx="31.4" cy="15.7" rx="4.1" ry="5.6" transform="rotate(12 31.4 15.7)" fill="currentColor"/><ellipse cx="39" cy="22.6" rx="4.1" ry="5.6" transform="rotate(33 39 22.6)" fill="currentColor"/></svg></span><span className="brand__type"><strong>the dog</strong><small>SHOPPE · PET & CARE</small></span></a><p className="footer__signoff">Feito com carinho<br />pra quem ama de montão.</p><div className="footer__bottom"><span>© 2026 The Dog Shoppe</span><span>Petshop de vizinhança · Brasília, DF</span><a href="#topo">Voltar ao topo ↑</a></div></footer>

    <a className="whatsapp-float" href="https://wa.me/5561993351647?text=Ol%C3%A1%21%20Encontrei%20voc%C3%AAs%20pelo%20site." target="_blank" rel="noreferrer" aria-label="Fale com a The Dog Shoppe pelo WhatsApp"><svg className="whatsapp-float__logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.84 11.84 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.59 5.96L0 24l6.26-1.64a11.96 11.96 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.35 11.95-11.93a11.86 11.86 0 0 0-3.48-8.42ZM12.05 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.52-5.28c0-5.47 4.45-9.91 9.89-9.91 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.45 9.87-9.92 9.87Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg><span>WhatsApp</span></a>
    
    </>
  );
}
