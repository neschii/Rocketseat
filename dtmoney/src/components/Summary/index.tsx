import { ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    return (
    <SummaryContainer>
        <SummaryCard>
            <header> 
                <span> Entradas </span>
                <ArrowCircleUp size={32} color="#00b37e"/>
            </header>

            <strong>R$10.500,00</strong>
        </SummaryCard>

              <SummaryCard>
            <header> 
                <span> Saídas </span>
                <ArrowCircleUp size={32} color="#f75a68"/>
            </header>

            <strong>R$2.000</strong>
        </SummaryCard>

              <SummaryCard variant="purple">
            <header> 
                <span> Total </span>
                <CurrencyDollar size={32} color="#fff"/>
            </header>

            <strong>R$8.500</strong>
        </SummaryCard>
        </SummaryContainer>
)

}