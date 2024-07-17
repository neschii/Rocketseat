import { useContext } from "react";
import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import {  dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
const { transactions } = useContext(TransactionsContext);

const isValidDate = (date) => {
  return !isNaN(Date.parse(date));
}

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
<tbody>
  {transactions.map(transaction => (
    <tr key={transaction.id}>
      <td width="50%">{transaction.description}</td>
      <td>
        <PriceHighlight variant={transaction.type}>
          {transaction.type === 'outcome' && '- '}
          {transaction.type === 'income' && '+ '}
          {priceFormatter.format(transaction.price)}
        </PriceHighlight>
      </td>
      <td>{transaction.category}</td>
      <td>
        {isValidDate(transaction.createdAt) ? dateFormatter.format(new Date(transaction.createdAt)) : 'Data Inválida'}
      </td>
    </tr>
  ))}
</tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}