import { CardData } from '../RegisterCard.tsx'

export const numeric_only_regex = /^[0-9]*$/

const useAddCard = ({
  inputs,
  setInputs,
}: {
  inputs: CardData
  setInputs: (cardData: CardData) => void
}) => {
  const handleChangeExpiredMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!numeric_only_regex.test(String(e.target.value))) {
      return
    } else if (parseInt(e.target.value) > 12) {
      alert('카드 만료 월은 12월까지만 가능합니다.')
      return
    }
    setInputs({ ...inputs, expiredMonth: e.target.value })
  }

  const handleChangeExpiredYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, expiredYear: e.target.value })
  }

  return {
    handleChangeExpiredMonth,
    handleChangeExpiredYear,
  }
}

export default useAddCard
