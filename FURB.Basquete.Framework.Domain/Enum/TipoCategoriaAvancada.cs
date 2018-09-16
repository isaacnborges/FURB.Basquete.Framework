using System;
using System.Collections.Generic;
using System.Text;

namespace FURB.Basquete.Framework.Domain.Enum
{
    public enum TipoCategoriaAvancada
    {
        EficienciaJogador = 1, //PER
        PorcentagemArremessosEficientes, //TS%
        TaxaTentativas3Pontos, //3PAr
        TaxaTentativasLancesLivres, //FTr
        PorcentagemRebotesOfensivos, //ORB%
        PorcentagemRebotesDefensivos, //DRB%
        PorcentagemRebotesTotal, //TRB%
        PorcentagemAssistencias, //AST%
        PorcentagemRoubosBola, //STL%
        PorcentagemTocos, //BLK%
        PorcentagemDesperdiciosBola, //TOV%
        PorcentagemUsoJogador, //USG%
        ContribuicaoVitoriaOfensiva, //OWS
        ContribuicaoVitoriaDefensiva, //DWS
        ContribuicaoVitoria, //WS
        EstimativaContribuicaoOfensiva, //OBPM
        EstimativaContribuicaoDefensiva, //DBPM
        EstimativaContribuicaoTotal, //BPM - Box Plus/Minus
    }
}
