import { Header } from "./components/header.tsx";
import "./indexPage.css";
import { Separator } from "./components/separator.tsx";
import { PrincipalAvatar } from "./components/principalAvatar/principalAvatar.tsx";
import Logo from "./assets/imgs/logo.jpg";
import { Proposal } from "./components/proposal/proposal.tsx";
import { ButtonLink, ButtonLink1 } from "./components/button/button.tsx";
import { ElectoralCard } from "./components/electoralCard/electoralCard.tsx";
import { dataPrincipals1, dataPrincipals2, proposalPrincipal1, proposalPrincipal2, territorialList } from "./data.tsx";

function IndexPage() {

  return (
    <main className={"main-container"}>
      <Header />
      <img className="logo" src={Logo} alt="Conexión Esapista Nacional" width={100} height={100} />
      <h3 className={"subtitle text-center"}>
        Consejo <span className={"text-red"}>Directivo Nacional</span>{" "}
        Fortalecimiento ESAP
      </h3>
      <Separator />
      <div className="national-grid">
        {
          dataPrincipals2.map(it => 
            <PrincipalAvatar
              title={it.title}
              name={it.name}
              study={it.study}
              scope={it.scope}
              city={it.city}
              src={it.src}
              color={it.color}
            />
          )
        }
      </div>
      <Proposal items={proposalPrincipal1} />
      <ButtonLink classes={"mx-auto my-2"} to="https://drive.google.com/drive/folders/15XwYGuYQVtm1na2agz6apBfU0qTz9iAR?usp=sharing" />
      <h3 className={"subtitle text-center"}>
        Consejo <span className={"text-red"}>Académico Nacional</span>{" "}
        Fortalecimiento ESAP
      </h3>
      <Separator />
      <div className="national-grid">
        {
          dataPrincipals1.map(it => 
            <PrincipalAvatar
              title={it.title}
              name={it.name}
              study={it.study}
              scope={it.scope}
              city={it.city}
              src={it.src}
              color={it.color}
            />
          )
        }
      </div>
      <Proposal items={proposalPrincipal2} />
      <ButtonLink classes={"mx-auto my-2"} to={"https://drive.google.com/drive/folders/15f0rH4pdu9SnkDGREPQDhAe_t_dTH4om?usp=sharing"} />
      <h3 className={"subtitle text-center"}>
        Consejo <span className={"text-red"}>Académico Territorial</span>{" "}
        Fortalecimiento ESAP
      </h3>
      <Separator />
      <section className="electoral-grid my-2">
        {
          territorialList.map(it => 
            <ElectoralCard
              namePrincipal={it.namePrincipal}
              nameSecondary={it.nameSecondary}
              srcPrincipal={it.srcPrincipal}
              srcSecondary={it.srcSecondary}
              title={it.title}
            />
          )
        }
      </section>
      <ButtonLink classes={"mx-auto"} to="https://drive.google.com/drive/folders/1iQ5_kVFMvzEOJFkZeAHeCs9PF_VZhZV8?usp=sharing" />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nsonVN_SAy4?si=-TvOJWBpizd4phBT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <ButtonLink1 classes={"mx-auto"} to="https://votaciones.esap.edu.co/PortalVotacion/Account/Login?ReturnUrl=%2fPortalVotacion%2fListaComicios" />
    </main>
  );
}

export default IndexPage;
