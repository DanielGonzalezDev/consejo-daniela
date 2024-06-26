import './electoralCard.css'

export interface ElectoralCardItem {
    srcPrincipal: string
    srcSecondary: string
    namePrincipal: string
    nameSecondary: string
    title: string
}


export function ElectoralCard({ namePrincipal, nameSecondary, srcPrincipal, srcSecondary, title }: ElectoralCardItem) {
    
    return (
        <article className="electoral-card">
            <div className="electoral-card__avatar-wrapper"> 
                <article className="electoral-card__avatar electoral-card__avatar--primary">
                    <div className={"principal-avatar__img"}>
                        <div></div>
                        <div className={"img__circle"}></div>
                        <img className={"img"} src={srcPrincipal} alt={namePrincipal} width={120} height={120} />
                    </div>
                    <h6 className='electoral-card__name'>{namePrincipal}</h6>
                </article>
                <article className="electoral-card__avatar electoral-card__avatar--secondary">
                    <div className={"principal-avatar__img"}>
                        <div></div>
                        <div className={"img__circle"}></div>
                        <img className={"img"} src={srcSecondary} alt={nameSecondary} width={120} height={120} />
                    </div>
                    <h6 className='electoral-card__name'>{nameSecondary}</h6>
                </article>
            </div>
            <div className="electoral-card__footer">
                <h4 className='electoral-card__title'>{title}</h4>
                <div className="electoral-card__line"></div>
            </div>
        </article>
    )
}